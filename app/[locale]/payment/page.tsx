import { PaymentProvider } from '@/components/payments/PaymentProvider'
import { PaymentForm } from '@/components/payments/PaymentForm'
import { AppHeader } from '@/components/app/AppHeader'
import { createPaymentIntent } from './actions'
import { getTranslations } from '@/lib/i18n'

export default async function PaymentPage() {
  const clientSecret = await createPaymentIntent(2000)
  const t = await getTranslations('payment')
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Payment Form Column */}
          <div className="space-y-8 lg:order-2">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">{t('completePayment')}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{t('securePayment')}</p>
            </div>
            <div className="bg-card text-card-foreground shadow-lg rounded-lg border">
              <div className="p-8">
                <PaymentProvider clientSecret={clientSecret}>
                  <PaymentForm />
                </PaymentProvider>
              </div>
            </div>
          </div>

          {/* Order Summary Column */}
          <div className="lg:order-1">
            <div className="p-8 sticky top-8">
              <h2 className="text-2xl font-semibold mb-6">{t('orderSummary')}</h2>
              
              {/* Product Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg transition-transform hover:scale-[1.02]">
                  <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{t('premiumPlan')}</h3>
                    <p className="text-sm text-muted-foreground">{t('annualSubscription')}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$20.00</p>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 py-4 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t('subtotal')}</span>
                  <span>$20.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t('tax')}</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between font-medium pt-4 border-t">
                  <span>{t('total')}</span>
                  <span>$20.00</span>
                </div>
              </div>

              {/* Benefits List */}
              <div className="mt-8 space-y-3">
                <h3 className="font-medium mb-4">{t('includedBenefits')}</h3>
                {[
                  t('benefits.unlimited'),
                  t('benefits.support'),
                  t('benefits.analytics'),
                  t('benefits.integrations')
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm animate-in fade-in-50 duration-500" style={{ animationDelay: `${index * 150}ms` }}>
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
