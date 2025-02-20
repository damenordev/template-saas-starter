import createIntlMiddleware from 'next-intl/middleware'

import { routing } from './routing.i18n'

export const intlMiddleware = createIntlMiddleware(routing)
