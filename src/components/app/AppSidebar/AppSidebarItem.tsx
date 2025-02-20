'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import { SidebarMenuButton, SidebarMenuItem } from '@/ui/sidebar'
import { cn } from '@/styles'
import { TI18NMessages, useTranslations } from '@/lib/i18n'

export type TIAppSidebarItemTitle = keyof TI18NMessages['sidebar']['items']

export interface IAppSidebarItemProps {
  title: TIAppSidebarItemTitle
  icon: React.ReactNode
  url: string
}

export const AppSidebarItem: React.FC<IAppSidebarItemProps> = ({ icon, title, url }) => {
  const pathname = usePathname()
  const isActive = pathname === url
  const t = useTranslations('sidebar.items')
  return (
    <SidebarMenuItem key={title}>
      <SidebarMenuButton
        asChild
        className={cn('hover:bg-primary/5 hover:text-primary transition-all', {
          'bg-primary/15 text-primary rounded-sm hover:bg-primary/20 hover:text-primary': isActive,
        })}
      >
        <Link href={url}>
          {icon}
          <span className="flex-1 font-medium">{t(title)}</span>
          {isActive ? <div className="size-2 rounded-full bg-primary/30" /> : <ChevronRight className="size-5 -mr-1" />}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
