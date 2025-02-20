import en from './en.json'
import es from './es.json'
import de from './de.json'
import fr from './fr.json'
import it from './it.json'
import ja from './ja.json'
import ko from './ko.json'
import pt from './pt.json'
import ru from './ru.json'
import tr from './tr.json'
import zh from './zh.json'

export type TI18NLocale = 'en' | 'es' | 'de' | 'fr' | 'it' | 'ja' | 'ko' | 'pt' | 'ru' | 'tr' | 'zh'
export type TI18NMessages = typeof es

declare global {
  // Use type safe message keys with `next-intl`
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends TI18NMessages {}
}

export const messages: Record<string, TI18NMessages> = { en, es, de, fr, it, ja, ko, pt, ru, tr, zh }
export const locales: TI18NLocale[] = Object.keys(messages) as TI18NLocale[]
export const defaultLocale: TI18NLocale = 'es'

export const I18N_LANGUAGES: { label: string; value: TI18NLocale }[] = [
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' },
  { label: 'Deutsch', value: 'de' },
  { label: 'Français', value: 'fr' },
  { label: 'Italiano', value: 'it' },
  { label: '日本語', value: 'ja' },
  { label: '한국어', value: 'ko' },
  { label: 'Português', value: 'pt' },
  { label: 'Русский', value: 'ru' },
  { label: 'Türkçe', value: 'tr' },
  { label: '中文', value: 'zh' },
]
