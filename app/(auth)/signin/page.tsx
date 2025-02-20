import Link from 'next/link'

import { cn } from '@/styles'
import { AuthFormSignIn, AuthFormSocials, Logo } from '@/components'

export default function SignInPage() {
  return (
    <section className={cn('max-w-xl mx-auto flex flex-col gap-6 pt-8 animate-fade-in')}>
      <div className="flex flex-col items-center gap-2">
        <Logo />
        <h1 className="text-6xl font-bold">Welcome</h1>
      </div>
      <AuthFormSignIn />
      <div className="text-center text-sm">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
      <AuthFormSocials />
    </section>
  )
}
