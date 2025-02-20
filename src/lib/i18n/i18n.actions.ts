'use server'
import { getLocale as getLocaleNextIntl } from 'next-intl/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { TI18NLocale } from './messages'

export const changeLocale = async (formData: FormData) => {
  const locale = formData.get('locale') as TI18NLocale
  const pathname = formData.get('pathname') as string
  const cookieStore = await cookies()
  cookieStore.set('NEXT_LOCALE', locale)
  redirect(pathname)
}

export const getLocale = async () => (await getLocaleNextIntl()) as TI18NLocale
