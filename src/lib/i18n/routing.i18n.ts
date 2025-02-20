import { defineRouting } from 'next-intl/routing'

import { locales, defaultLocale } from './messages'

export const routing = defineRouting({ locales, defaultLocale, localePrefix: 'never' })
