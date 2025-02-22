import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe/stripe.server'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  const body = await req.text()
  const signature = (await headers()).get('stripe-signature')

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return new Response('Missing stripe-signature or webhook secret', { status: 400 })
  }

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    )

    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        await db.customer.update({
          where: { stripeCustomerId: paymentIntent.customer as string },
          data: {
            subscriptions: {
              updateMany: {
                where: { status: 'incomplete' },
                data: { status: 'active' }
              }
            }
          }
        })
        break
      }
      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        await db.subscription.upsert({
          where: { stripeSubscriptionId: subscription.id },
          create: {
            stripeSubscriptionId: subscription.id,
            status: subscription.status,
            priceId: subscription.items.data[0].price.id,
            quantity: subscription.items.data[0].quantity || 1,
            customer: {
              connectOrCreate: {
                where: { stripeCustomerId: subscription.customer as string },
                create: {
                  stripeCustomerId: subscription.customer as string,
                  userId: '', // This should be set when creating the customer
                }
              }
            }
          },
          update: {
            status: subscription.status,
            priceId: subscription.items.data[0].price.id,
            quantity: subscription.items.data[0].quantity || 1,
          }
        })
        break
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        await db.subscription.update({
          where: { stripeSubscriptionId: subscription.id },
          data: { status: subscription.status }
        })
        break
      }
    }

    return new Response(null, { status: 200 })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return new Response(
      'Webhook error: ' + (error instanceof Error ? error.message : 'Unknown error'),
      { status: 400 }
    )
  }
}

export const runtime = 'nodejs'