import { ILayoutWithLocale } from '@/types'
import { cn, fontSans, fontMono } from '@/styles'
import { AppProvider } from '@/providers'
import { getTheme } from '@/theme'
import '@/styles/globals.css'

export default async function RootLayout({ children, params }: ILayoutWithLocale) {
  const { locale } = await params
  const theme = await getTheme()
  return (
    <html lang={locale}>
      <body
        className={cn(
          theme,
          fontSans.className,
          fontMono.className,
          'relative min-h-screen w-full bg-background text-foreground overflow-x-hidden'
        )}
      >
        <AppProvider locale={locale}>{children}</AppProvider>
      </body>
    </html>
  )
}
