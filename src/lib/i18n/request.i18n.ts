import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

import { routing } from './routing.i18n'
import { TI18NLocale } from './messages'

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale
  if (!routing.locales.includes(locale as TI18NLocale)) return notFound()
  return { messages: (await import(`./messages/${locale}.json`)).default, locale }
})
