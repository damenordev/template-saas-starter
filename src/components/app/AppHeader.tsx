import { Bell } from 'lucide-react'

import { ThemeToggle } from '@/theme'
import { Button } from '@/ui/button'
import { SidebarTrigger } from '@/ui/sidebar'
import { I18nSelect } from '@/lib/i18n'
import { auth, signOut } from '@/lib/auth'
import Link from 'next/link'

export interface IAppHeaderProps {
  title?: string
  hideSidebarTrigger?: boolean
}

export const AppHeader = async ({ title, hideSidebarTrigger }: IAppHeaderProps) => {
  const session = await auth()
  console.log({ session })
  return (
    <header className="sticky top-0 left-0 z-40 w-full flex items-center justify-between gap-2 px-3 py-2">
      <div className="flex items-center gap-2">
        {!hideSidebarTrigger && <SidebarTrigger className="[&_svg]:size-6 h-auto w-auto" />}
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="flex items-center justify-end gap-1">
        {session ? (
          <form
            action={async () => {
              'use server'
              await signOut({ redirectTo: '/' })
            }}
          >
            <Button size="sm" type="submit">
              Sign Out
            </Button>
          </form>
        ) : (
          <Link href="/signin">
            <Button size="sm">
              Sign In
            </Button>
          </Link>
        )}
        <I18nSelect />
        <Button variant="ghost" size="icon" className="border hover:bg-card">
          <Bell />
        </Button>
        <ThemeToggle />
      </div>
    </header>
  )
}
