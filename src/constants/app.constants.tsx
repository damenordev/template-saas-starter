import { Metadata } from 'next'
import { Home, Inbox, Calendar, Search, Settings } from 'lucide-react'

export const APP_NAME = 'SaaS Starter'
export const APP_METADATA: Metadata = {
  title: APP_NAME,
  description:
    'SaaS Starter is a powerful template for creating SaaS applications using Next.js, Shadcn, Lucide, and Tailwind CSS. Enhance your project with libraries for authentication, database management, internationalization, payment integration, and more.',
}

export const APP_SIDEBAR_ITEMS = [
  { title: 'Home', url: '/', icon: <Home /> },
  { title: 'Inbox', url: '/inbox', icon: <Inbox /> },
  { title: 'Calendar', url: '#', icon: <Calendar /> },
  { title: 'Search', url: '#', icon: <Search /> },
  { title: 'Settings', url: '#', icon: <Settings /> },
]
