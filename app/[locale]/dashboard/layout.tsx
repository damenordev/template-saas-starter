import { ILayout } from '@/types'
import { SidebarProvider } from '@/ui/sidebar'

export default function DashboardLayout({ children }: ILayout) {
  return <SidebarProvider>{children}</SidebarProvider>
}
