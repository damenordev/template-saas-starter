import { LayoutDashboardIcon, ChevronsUpDown } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from '@/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar'

import { AppSidebarItem, IAppSidebarItemProps } from './AppSidebarItem'

export interface IAppSidebarProps {
  items: IAppSidebarItemProps[]
}

const user = {
  name: 'shadcn',
  email: 'm@example.com',
  avatar: 'https://github.com/shadcn.png',
}

export const AppSidebar = ({ items }: IAppSidebarProps) => {
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row items-center gap-1 p-4">
        <LayoutDashboardIcon className="size-11" />
        <h1 className="flex flex-col items-center gap-0.5">
          <span className="text-xl font-bold leading-none">SaaS</span>
          <span className="text-[10px] bg-primary/25 text-primary px-1.5 py-0.5 rounded-sm uppercase font-medium">
            started
          </span>
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <AppSidebarItem key={item.title} {...item} icon={item.icon} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="hover:bg-card rounded-lg p-1">
          <div className="flex items-center gap-2 p-0.5 text-left text-sm">
            <Avatar className="size-8 rounded-lg">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold leading-none">{user.name}</span>
              <span className="truncate text-xs leading-none">{user.email}</span>
            </div>
            <ChevronsUpDown className="size-5" />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
