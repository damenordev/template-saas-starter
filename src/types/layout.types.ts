import { TI18NLocale } from '@/lib/i18n'

export interface ILayout<PARAMS = unknown> {
  children: React.ReactNode
  params: Promise<PARAMS>
}

export interface ILayoutWithLocale extends ILayout {
  params: Promise<{ locale: TI18NLocale }>
}
