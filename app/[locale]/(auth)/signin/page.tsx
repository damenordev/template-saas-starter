import Link from 'next/link'

import { cn } from '@/styles'
import { AuthFormSignIn, AuthFormSocials, Logo } from '@/components'
import { auth } from '@/lib/auth/auth.config'
import { getTranslations } from '@/lib/i18n'

export default async function SignInPage() {
  const session = await auth()
  console.log({ session })

  const t = await getTranslations('auth.signIn')

  return (
    <section className={cn('max-w-xl mx-auto flex flex-col gap-6 pt-8 animate-fade-in')}>
      <div className="flex flex-col items-center gap-2">
        <Logo />
        <h1 className="text-6xl font-bold text-center mt-2">{t('title')}</h1>
      </div>
      <AuthFormSignIn />
      <div className="text-center text-sm">
        {t('noAccount')}{' '}
        <Link href="/signup" className="underline underline-offset-4">
          {t('createAccount')}
        </Link>
      </div>
      <AuthFormSocials />
    </section>
  )
}
