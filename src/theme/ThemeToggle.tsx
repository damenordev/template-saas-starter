import { Moon, Sun } from 'lucide-react'

import { Button } from '@/ui/button'

import { getTheme, setTheme } from './theme.actions'
import { TTheme } from './theme.constants'

export interface IThemeToggleProps {
  classNameButton?: string
  darkElement?: React.ReactNode
  lightElement?: React.ReactNode
}

interface IThemeToggleFormWrapperProps {
  children: React.ReactNode
  nextTheme: TTheme
  className?: string
}

const ThemeToggleFormWrapper: React.FC<IThemeToggleFormWrapperProps> = async ({ children, nextTheme, className }) => {
  return (
    <form className={className} action={setTheme}>
      <input className="hidden" name="theme" defaultValue={nextTheme} readOnly />
      {children}
    </form>
  )
}

export const ThemeToggle = async ({
  darkElement = <Moon size={24} />,
  lightElement = <Sun size={24} />,
}: IThemeToggleProps) => {
  const theme = await getTheme()
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <ThemeToggleFormWrapper nextTheme={nextTheme}>
      <Button variant="ghost" size="icon" className="border hover:bg-card" type="submit">
        {theme === 'dark' ? lightElement : darkElement}
      </Button>
    </ThemeToggleFormWrapper>
  )
}
