import { intlMiddleware } from '@/lib/i18n'

export default intlMiddleware

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
}
