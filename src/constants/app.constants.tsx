import { Metadata } from 'next'
import { Home, Inbox, Calendar, Search, Settings, MessageCircle } from 'lucide-react'

import { IAppSidebarItemProps } from '@/components'

export const APP_NAME = 'SaaS Starter'
export const APP_METADATA: Metadata = {
  title: APP_NAME,
  description:
    'SaaS Starter is a powerful template for creating SaaS applications using Next.js, Shadcn, Lucide, and Tailwind CSS. Enhance your project with libraries for authentication, database management, internationalization, payment integration, and more.',
}

export const APP_SIDEBAR_ITEMS: IAppSidebarItemProps[] = [
  { title: 'home', url: '/', icon: <Home /> },
  { title: 'inbox', url: '/inbox', icon: <Inbox /> },
  { title: 'chat', url: '/chat', icon: <MessageCircle /> },
  { title: 'calendar', url: '#', icon: <Calendar /> },
  { title: 'search', url: '#', icon: <Search /> },
  { title: 'settings', url: '#', icon: <Settings /> },
]
