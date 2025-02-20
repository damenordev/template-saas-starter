'use client'
import { GlobeIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Button } from '@/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu'

import { changeLocale } from './i18n.actions'
import { useLocale } from './18n.hooks'
import { I18N_LANGUAGES, TI18NLocale } from './messages'

interface I18nSelectFormProps {
  value: TI18NLocale
  label: string
}

const I18nSelectForm: React.FC<I18nSelectFormProps> = ({ value, label }) => {
  const pathname = usePathname()
  const onChangeLocale = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.set('locale', value)
    formData.set('pathname', pathname)
    await changeLocale(formData)
  }
  return (
    <form onSubmit={onChangeLocale}>
      <input type="hidden" name="locale" value={value} />
      <button className="w-full cursor-pointer" type="submit">
        <DropdownMenuRadioItem value={value}>{label}</DropdownMenuRadioItem>
      </button>
    </form>
  )
}

export const I18nSelect = () => {
  const locale = useLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="border hover:bg-card">
          <GlobeIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={locale}>
          {I18N_LANGUAGES.map(({ label, value }) => (
            <I18nSelectForm key={value} value={value} label={label} />
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
