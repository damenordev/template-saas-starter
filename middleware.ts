import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

import { authMiddleware } from '@/lib/auth'
import { intlMiddleware } from '@/lib/i18n'

// Ruta totalmente pública
const PUBLIC_ROUTE = '/'

// Rutas de autenticación (redirigen a dashboard si está autenticado)
const AUTH_ROUTES = ['/signin', '/signup', '/auth/verify', '/auth/reset-password']

export default authMiddleware(async req => {
  const { pathname } = req.nextUrl
  const isAuthRoute = AUTH_ROUTES.some(route => pathname.startsWith(route))
  const isPublicRoute = pathname === PUBLIC_ROUTE
  const token = await getToken({ req, secret: process.env.AUTH_SECRET })

  // Si está en una ruta de auth y está logueado, redirigir al dashboard
  if (isAuthRoute && token) return NextResponse.redirect(new URL('/dashboard', req.url))

  // Si no está logueado y no es ruta pública ni de auth, redirigir a login
  if (!token && !isPublicRoute && !isAuthRoute && !pathname.startsWith('/api/auth')) {
    return NextResponse.redirect(new URL('/signin', req.url))
  }

  // Aplicar internacionalización a todas las rutas
  return intlMiddleware(req)
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
}
