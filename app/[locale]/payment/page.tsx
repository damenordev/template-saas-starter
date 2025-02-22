'use client'

import { useEffect, useState } from 'react'
import { PaymentProvider } from '@/components/payments/PaymentProvider'
import { PaymentForm } from '@/components/payments/PaymentForm'

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    // Create a payment intent when the page loads
    fetch('/api/stripe/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 2000, // $20.00 in cents
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error('Error:', error))
  }, [])

  if (!clientSecret) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-8">Test Payment</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <PaymentProvider clientSecret={clientSecret}>
          <PaymentForm />
        </PaymentProvider>
      </div>
    </div>
  )
}