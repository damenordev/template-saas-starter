'use server'

import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { stripe } from '@/lib/stripe/stripe.server'

export async function createPaymentIntent(amount: number) {
  const session = await auth()

  if (!session?.user) {
    redirect('/auth/signin')
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      metadata: {
        userId: session.user.id,
      },
    })

    return paymentIntent.client_secret
  } catch (error) {
    console.error('Payment intent creation error:', error)
    throw new Error('Failed to create payment intent. Please try again later.')
  }
}