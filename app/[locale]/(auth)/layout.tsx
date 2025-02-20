import { AppHeader } from '@/components'
import { ILayout } from '@/types'

export default function AuthLayout({ children }: ILayout) {
  return (
    <main className="flex flex-col h-screen w-full">
      <AppHeader hideSidebarTrigger />
      {children}
    </main>
  )
}
