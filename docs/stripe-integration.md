# Stripe Integration Documentation

## Purpose
- Document Stripe payment integration patterns and workflows using React Server Components
- Enable automated payment processing and subscription management with Server Actions
- Maintain secure handling of payment information through server-side operations
- Optimize performance with server-side rendering patterns

## Required Components

### Context Map
- **Related Files**:
  - `src/lib/stripe/*`: Core Stripe integration logic
  - `src/components/payments/*`: Payment UI components
  - `app/api/stripe/*`: Stripe webhook and payment endpoints
  - `prisma/schema.prisma`: Customer and subscription models

- **Dependencies**:
  - `stripe`: ^14.0.0
  - `@stripe/stripe-js`: ^2.0.0
  - `@prisma/client`: ^6.4.0

### Integration Patterns

#### Stripe Client Setup
```typescript
// File: src/lib/stripe/stripe.client.ts
import { loadStripe } from '@stripe/stripe-js'

export const getStripeClient = () => {
  return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
}
```

#### Server-Side Stripe Instance
```typescript
// File: src/lib/stripe/stripe.server.ts
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
  typescript: true,
})
```

### Required Environment Variables
```env
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### Database Schema Updates
```prisma
model Customer {
  id        String   @id @default(cuid())
  userId    String   @unique
  stripeCustomerId String @unique
  user      User     @relation(fields: [userId], references: [id])
  subscriptions Subscription[]
}

model Subscription {
  id        String   @id @default(cuid())
  customerId String
  customer  Customer @relation(fields: [customerId], references: [id])
  stripeSubscriptionId String @unique
  status    String
  priceId   String
  quantity  Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### API Endpoints

1. **Create Payment Intent**:
```typescript
// POST /api/stripe/create-payment-intent
export async function POST(req: Request) {
  const { amount } = await req.json()
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
  })

  return Response.json({ clientSecret: paymentIntent.client_secret })
}
```

2. **Webhook Handler**:
```typescript
// POST /api/stripe/webhook
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe/stripe.server'
import { prisma } from '@/lib/db'

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
        // Handle successful payment
        break
      }
      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        await prisma.subscription.upsert({
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
        await prisma.subscription.update({
          where: { stripeSubscriptionId: subscription.id },
          data: { status: subscription.status }
        })
        break
      }
    }

    return new Response(null, { status: 200 })
  } catch (error) {
    return new Response('Webhook error', { status: 400 })
  }
}
```

### Common Errors

1. **Invalid API Keys**:
```typescript
// ❌ Incorrect
const stripe = new Stripe(apiKey)

// ✅ Correct
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16'
})
```

2. **Missing Webhook Signature**:
```typescript
// ❌ Incorrect
const event = stripe.webhooks.constructEvent(body)

// ✅ Correct
const event = stripe.webhooks.constructEvent(
  body,
  signature,
  process.env.STRIPE_WEBHOOK_SECRET!
)
```

## Version Compatibility
- Stripe API Version: 2023-10-16
- Next.js: 14.x
- Node.js: >=18.17.0

## Security Guidelines
1. Never log complete card details
2. Use Stripe Elements for secure card collection
3. Validate webhook signatures
4. Store only Stripe customer and subscription IDs

## Maintenance Rules
1. Keep Stripe API version updated
2. Monitor webhook events for errors
3. Regularly test payment flows
4. Update pricing tables when plans change