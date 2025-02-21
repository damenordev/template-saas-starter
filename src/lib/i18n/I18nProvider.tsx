import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ReactNode } from 'react'

import { TI18NLocale } from './messages'

export interface I18nProviderProps {
  children: ReactNode
  locale: TI18NLocale
}

export const I18nProvider = async ({ children, locale }: I18nProviderProps) => {
  const messages = await getMessages()
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
