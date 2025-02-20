import { I18nProvider, TI18NLocale } from '@/i18n'

export interface IAppProvider {
  children: React.ReactNode
  locale: TI18NLocale
}

export const AppProvider: React.FC<IAppProvider> = ({ children, locale }) => {
  return <I18nProvider locale={locale}>{children}</I18nProvider>
}
