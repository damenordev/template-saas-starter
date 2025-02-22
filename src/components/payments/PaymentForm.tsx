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

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment/success`,
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
