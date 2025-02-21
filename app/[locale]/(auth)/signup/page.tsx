import Link from 'next/link'

import { cn } from '@/styles'
import { AuthFormSignUp, AuthFormSocials, Logo } from '@/components'
import { useTranslations } from '@/lib/i18n'

export default function SignInPage() {
  const t = useTranslations('auth.signUp')
  return (
    <section className={cn('max-w-xl mx-auto flex flex-col gap-6 pt-8 animate-fade-in')}>
      <div className="max-w-sm mx-auto flex flex-col items-center gap-2">
        <Logo />
        <h1 className="text-2xl font-bold text-balance text-center">{t('title')}</h1>
      </div>
      <AuthFormSignUp />
      <div className="text-center text-sm">
        {t('alreadyHaveAccount')}{' '}
        <Link href="/signin" className="underline underline-offset-4">
          {t('signIn')}
        </Link>
      </div>
      <AuthFormSocials />
    </section>
  )
}
