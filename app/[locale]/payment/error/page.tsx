import { AppHeader } from '@/components/app/AppHeader'
import { Button } from '@/ui/button'
import { getTranslations } from '@/lib/i18n'
import Link from 'next/link'

export default async function PaymentErrorPage() {
  const t = await getTranslations('payment')

  return (
    <div className="min-h-screen bg-background">
      <AppHeader title="Payment Failed" hideSidebarTrigger />
      <main className="container max-w-xl mx-auto py-16 px-4 animate-in fade-in-50 duration-1000">
        <div className="text-center space-y-8">
          <div className="relative inline-block">
            <span className="text-[96px]">😕</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-medium text-foreground">
              {t('oops')}
            </h1>
            <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium">
              {t('failed')}
            </span>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              {t('friendlyErrorMessage')}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{t('tryAgainLater')}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button asChild size="lg" variant="default">
              <Link href="/payment" className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('tryAgain')}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/support" className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {t('getSupport')}
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}