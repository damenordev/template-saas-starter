import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react'

import { AppSidebar } from '@/components'
import { SidebarProvider, SidebarTrigger } from '@/ui/sidebar'

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
      <main>
        <SidebarTrigger />
        Hello World!
      </main>
    </SidebarProvider>
  )
}
