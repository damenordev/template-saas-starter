'use server'

import { auth } from '@/lib/auth/auth'
import { redirect } from 'next/navigation'

export async function createPaymentIntent(amount: number) {
  const session = await auth()

  if (!session?.user) {
    redirect('/auth/signin')
  }

  const response = await fetch('/api/stripe/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => null)
    throw new Error(errorData?.message || 'Failed to create payment intent. Please ensure you are logged in.')
  }

  const data = await response.json()
  return data.clientSecret
}