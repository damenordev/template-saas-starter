import en from './en.json'
import es from './es.json'

export type TI18NLocale = 'en' | 'es'
export type TI18NMessages = typeof es

declare global {
  // Use type safe message keys with `next-intl`
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends TI18NMessages {}
}

export const messages: Record<string, TI18NMessages> = { en, es }
export const locales: TI18NLocale[] = Object.keys(messages) as TI18NLocale[]
export const defaultLocale: TI18NLocale = 'es'
