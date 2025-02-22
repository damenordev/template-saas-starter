import { stripe } from '@/lib/stripe/stripe.server'
import { auth } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 })
    }

    const { amount } = await req.json()

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      metadata: {
        userId: session.user.id,
      },
    })

    return Response.json({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    console.error('Payment intent creation error:', error)
    return new Response('Error creating payment intent', { status: 400 })
  }
}
