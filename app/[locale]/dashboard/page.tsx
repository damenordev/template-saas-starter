import { APP_SIDEBAR_ITEMS } from '@/constants'
import { AppHeader, AppSidebar } from '@/components'
import { SidebarProvider } from '@/ui/sidebar'

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar items={APP_SIDEBAR_ITEMS} />
      <main className="w-full">
        <AppHeader />
        Hello World!
      </main>
    </SidebarProvider>
  )
}
