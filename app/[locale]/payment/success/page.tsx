import { AppHeader } from '@/components/app/AppHeader'
import { Button } from '@/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card'
import { getTranslations } from '@/lib/i18n'
import Link from 'next/link'
import { PaymentConfetti } from '@/components/payments/PaymentConfetti'
import { Suspense } from 'react'

export default async function PaymentSuccessPage() {
  const t = await getTranslations('payment')

  return (
    <div className="min-h-screen bg-background">
      <AppHeader title="Payment Successful" hideSidebarTrigger />
      <main className="container mx-auto py-32 px-4 sm:px-6 lg:px-8 animate-in fade-in-50 duration-1000 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center w-full">
          {/* Left Column - Success Message */}
          <div className="space-y-8 lg:sticky lg:top-24 flex flex-col items-center lg:items-start">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
              <div className="relative">
                <div className="h-28 w-28 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl">✨</span>
                </div>
                <div className="absolute -bottom-2 -right-2 h-10 w-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <span className="text-xl">✓</span>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-5xl font-extrabold text-foreground sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  {t('paymentSuccess')}
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">{t('thankYou')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild variant="default" size="lg" className="gap-2">
                <Link href="/dashboard">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {t('viewDashboard')}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="/support">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  {t('getSupport')}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Order Details */}
          <Card className="backdrop-blur-sm bg-card/95 border-primary/10 shadow-xl">
            <CardHeader className="border-b border-primary/10 pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t('orderDetails')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="flex justify-between items-center py-3 border-b border-primary/5">
                <span className="text-muted-foreground flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  {t('plan')}:
                </span>
                <span className="font-medium text-lg">{t('premiumPlan')}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-primary/5">
                <span className="text-muted-foreground flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {t('amount')}:
                </span>
                <span className="font-medium text-lg">$20.00</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-muted-foreground flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {t('status')}:
                </span>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  {t('confirmed')}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Suspense>
        <PaymentConfetti />
      </Suspense>
    </div>
  )
}
