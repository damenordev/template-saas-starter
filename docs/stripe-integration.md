# Stripe Payment Integration Guide

## Overview
This guide covers the implementation of Stripe payments in our React application, including component setup, styling patterns, and best practices.

## Setup

### 1. Installation
```bash
npm install @stripe/react-stripe-js @stripe/stripe-js
```

### 2. Environment Variables
Ensure these variables are set in your `.env` file:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
STRIPE_SECRET_KEY=your_secret_key
```

## Component Structure

### PaymentProvider
The `PaymentProvider` component wraps the payment form and initializes Stripe:

```tsx
// src/components/payments/PaymentProvider.tsx
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
          }
        }
      }}
    >
      {children}
    </Elements>
  )
}
```

### PaymentForm
The payment form component handles the payment submission:

```tsx
// src/components/payments/PaymentForm.tsx
'use client'

import { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import { Button } from '@/ui/button'
import { toast } from 'sonner'

export function PaymentForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setIsLoading(true)

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/dashboard`,
        },
      })

      if (error) {
        toast.error(error.message)
      }
    } catch (error) {
      toast.error('An error occurred while processing your payment.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <PaymentElement />
      <Button type="submit" disabled={!stripe || isLoading} className="w-full">
        {isLoading ? 'Processing...' : 'Pay now'}
      </Button>
    </form>
  )
}
```

## Usage

```tsx
// app/[locale]/payment/page.tsx
export default async function PaymentPage() {
  const clientSecret = await createPaymentIntent(2000) // Amount in cents

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-lg mx-auto space-y-8">
          <PaymentProvider clientSecret={clientSecret}>
            <PaymentForm />
          </PaymentProvider>
        </div>
      </main>
    </div>
  )
}
```

## Styling

The payment form uses our design system's tokens and can be customized through the PaymentProvider's appearance options:

```typescript
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
      backgroundColor: 'hsl(var(--muted))',
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
}
```

## Best Practices

1. **Security**
   - Never handle raw card data on your server
   - Always use Stripe Elements for secure data collection
   - Keep your secret key secure and never expose it to the client

2. **Error Handling**
   - Always handle payment errors gracefully
   - Display clear error messages to users
   - Implement proper loading states

3. **Testing**
   - Use Stripe's test cards for development
   - Test different payment scenarios
   - Verify webhook handling

4. **Performance**
   - Load Stripe.js asynchronously
   - Initialize Stripe client outside component render
   - Implement proper loading states

## Webhook Integration

To handle post-payment events, set up webhooks:

1. Create a webhook endpoint in your API
2. Configure the webhook URL in your Stripe dashboard
3. Handle relevant events (payment_intent.succeeded, payment_intent.failed, etc.)

## Troubleshooting

1. **Payment form not loading**
   - Verify Stripe publishable key is correct
   - Check if Elements provider is properly configured

2. **Payment failing**
   - Verify client secret is valid
   - Check for proper error handling
   - Validate payment amount and currency

3. **Styling issues**
   - Verify appearance options are properly set
   - Check CSS variable definitions
   - Inspect element styles in dev tools