import { useEffect, useState } from 'react'

export interface ThemeProps {
  theme: 'light' | 'dark' | null
  toggleTheme(): void
}

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeProps['theme']>(null)

  useEffect(() => {
    const themeFromStorage = localStorage.getItem('theme')
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'
    if (!!themeFromStorage)
      setTheme(themeFromStorage as ThemeProps['theme'] | null)
    else if (!!systemTheme) setTheme(systemTheme)
    else setTheme('light')
  }, [])

  useEffect(() => {
    if (!theme) return
    const cl = document.documentElement.classList
    cl.remove(theme === 'dark' ? 'light' : 'dark')
    cl.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark')
    if (theme === 'dark') setTheme('light')
  }

  return { theme, toggleTheme }
}
