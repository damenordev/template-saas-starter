'use client'
import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { Label } from '@/ui/label'
import { useTranslations } from '@/lib/i18n'
// import { signIn } from '@/lib/auth'
import { signIn } from 'next-auth/react'

export const AuthFormSignIn = () => {
  const t = useTranslations('auth')

  return (
    <form
      className="flex flex-col gap-6"
      action={async formData => {
        // 'use server'
        const { email, password } = Object.fromEntries(formData)
        console.log({ email, password })
        try {
          const response = await signIn('credentials', { email, password })
          console.log({ response })
        } catch (error) {
          console.error(error)
        }
      }}
    >
      <div className="flex flex-col gap-6 max-w-sm w-full mx-auto">
        <div className="grid gap-2">
          <Label htmlFor="email">{t('email')}</Label>
          <Input name="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">{t('password')}</Label>
          <Input name="password" type="password" placeholder="********" required />
        </div>
        <Button type="submit" className="w-full">
          {t('signIn.button')}
        </Button>
      </div>
    </form>
  )
}
