import { ILayout } from '@/types'
import { cn, fontSans, fontMono } from '@/styles'
import { AppProvider } from '@/providers'

import '@/styles/globals.css'

export default async function RootLayout({ children }: ILayout) {
  return (
    <html className="w-full overflow-x-hidden">
      <body
        className={cn(
          fontSans.className,
          fontMono.className,
          'relative min-h-screen w-full bg-background text-foreground overflow-x-hidden'
        )}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
