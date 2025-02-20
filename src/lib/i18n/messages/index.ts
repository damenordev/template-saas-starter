import en from './en.json'
import es from './es.json'
import fr from './fr.json'
import zh from './zh.json'

export type TI18NLocale = 'en' | 'es' | 'fr' | 'zh'
export type TI18NMessages = typeof es

declare global {
  // Use type safe message keys with `next-intl`
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends TI18NMessages {}
}

export const messages: Record<string, TI18NMessages> = { en, es, fr, zh }
export const locales: TI18NLocale[] = Object.keys(messages) as TI18NLocale[]
export const defaultLocale: TI18NLocale = 'es'

export const I18N_LANGUAGES: { label: string; value: TI18NLocale }[] = [
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' },
  { label: 'Français', value: 'fr' },
  { label: '中文', value: 'zh' },
]
