'use server'
import { cookies } from 'next/headers'

import { DEFAULT_THEME, THEME_COOKIE, type TTheme } from './theme.constants'

export const getTheme = async (): Promise<TTheme> => {
  const cookieStore = await cookies()
  return (cookieStore.get(THEME_COOKIE)?.value as TTheme) || DEFAULT_THEME
}

export const setTheme = async (formData: FormData) => {
  const theme = formData.get('theme') as TTheme
  const cookieStore = await cookies()
  cookieStore.set(THEME_COOKIE, theme)
}
