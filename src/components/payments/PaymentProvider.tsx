'use client'

import { Elements } from '@stripe/react-stripe-js'
import { getStripeClient } from '@/lib/stripe/stripe.client'

interface PaymentProviderProps {
  clientSecret: string
  children: React.ReactNode
}

export function PaymentProvider({ clientSecret, children }: PaymentProviderProps) {
  return (
    <Elements
      stripe={getStripeClient()}
      options={{
        clientSecret,
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#0F172A',
            colorBackground: '#ffffff',
            colorText: '#1e293b',
            colorDanger: '#df1b41',
          },
        },
      }}
    >
      {children}
    </Elements>
  )
}
      