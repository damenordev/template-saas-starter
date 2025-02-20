import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react'

import { AppHeader, AppSidebar } from '@/components'
import { SidebarProvider } from '@/ui/sidebar'

const items = [
  { title: 'Home', url: '/', icon: <Home /> },
  { title: 'Inbox', url: '/inbox', icon: <Inbox /> },
  { title: 'Calendar', url: '#', icon: <Calendar /> },
  { title: 'Search', url: '#', icon: <Search /> },
  { title: 'Settings', url: '#', icon: <Settings /> },
]

export default function HomePage() {
  return (
    <SidebarProvider>
      <AppSidebar items={items} />
      <main className="w-full">
        <AppHeader />
        Hello World!
      </main>
    </SidebarProvider>
  )
}
