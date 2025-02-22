import { PaymentProvider } from '@/components/payments/PaymentProvider'
import { PaymentForm } from '@/components/payments/PaymentForm'
import { AppHeader } from '@/components/app/AppHeader'
import { createPaymentIntent } from './actions'

export default async function PaymentPage() {
  const clientSecret = await createPaymentIntent(2000)

  if (!clientSecret) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-900">
        <div className="animate-pulse flex space-x-4">
          <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="space-y-4">
            <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <AppHeader title="Payment" hideSidebarTrigger />
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">Complete Your Payment</h1>
            <p className="mt-4 text-lg text-muted-foreground">Secure payment processing powered by Stripe</p>
          </div>
          <div className="bg-card text-card-foreground shadow-lg rounded-lg border">
            <div className="p-8">
              <PaymentProvider clientSecret={clientSecret}>
                <PaymentForm />
              </PaymentProvider>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
