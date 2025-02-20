import { LayoutDashboardIcon } from 'lucide-react'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1 font-medium">
      {/* <div className="flex h-8 w-8 items-center justify-center rounded-md">
        <LayoutDashboardIcon className="size-40" />
      </div>
      <span className="sr-only">{APP_NAME}</span> */}

      <LayoutDashboardIcon className="size-11" />
      <h1 className="flex flex-col">
        <span className="text-lg font-bold leading-none">SaaS</span>
        <span className="text-[8px] bg-primary/25 text-primary px-1 py-0.5 rounded-[4px] uppercase font-medium">
          starter
        </span>
      </h1>
    </Link>
  )
}
