import { Bell } from 'lucide-react'

import { ThemeToggle } from '@/theme'
import { Button } from '@/ui/button'
import { SidebarTrigger } from '@/ui/sidebar'

export const AppHeader = () => {
  return (
    <header className="sticky top-0 left-0 z-40 w-full flex items-center justify-between gap-2 px-3 py-2">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="[&_svg]:size-6 h-auto w-auto" />
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <div className="flex items-center justify-end gap-1">
        <Button variant="ghost" size="icon" className="border hover:bg-card">
          <Bell />
        </Button>
        <ThemeToggle />
      </div>
    </header>
  )
}
