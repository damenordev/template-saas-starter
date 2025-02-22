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
          theme: 'flat',
          variables: {
            colorPrimary: 'hsl(var(--primary))',
            colorBackground: 'hsl(var(--background))',
            colorText: 'hsl(var(--foreground))',
            colorDanger: 'hsl(var(--destructive))',
            borderRadius: '0.75rem',
            fontFamily: 'inherit',
          },
          rules: {
            '.Input': {
              backgroundColor: 'hsl(var(--background))',
              border: '1px solid hsl(var(--border))',
              boxShadow: 'none',
              padding: '0.75rem',
              transition: 'border-color 0.2s ease',
            },
            '.Input:focus': {
              borderColor: 'hsl(var(--ring))',
              boxShadow: '0 0 0 1px hsl(var(--ring))',
            },
            '.Label': {
              color: 'hsl(var(--muted-foreground))',
              fontSize: '0.875rem',
            },
            '.Error': {
              color: 'hsl(var(--destructive))',
              fontSize: '0.875rem',
            }
          }
        },
      }}
    >
      {children}
    </Elements>
  )
}