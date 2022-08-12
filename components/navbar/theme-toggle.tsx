import { useEffect, useState } from 'react'

const toggleStyles = `
		w-11 h-6 bg-gray rounded-full peer
		peer-checked:after:translate-x-full after:absolute
		after:bottom-3.5 after:right-[20px] after:bg-white
		after:border-2 after:border-purple 
		after:rounded-full after:h-7 after:w-7 after:absolute
		after:transition-all peer-checked:bg-purple
	`

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(
    () => setIsMobile(/Mobi/.test(window.navigator.userAgent)),
    [setIsMobile]
  )

  useEffect(() => {
    const themeFromStorage = localStorage.getItem('theme')
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'
    if (!!themeFromStorage) setTheme(themeFromStorage)
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

  if (!theme) return null

  return (
    <div
      onClick={() => !isMobile && toggleTheme()}
      onTouchStart={() => isMobile && toggleTheme()}
      className='relative mt-3 cursor-pointer'>
      <input
        type='checkbox'
        className='sr-only peer'
        checked={theme === 'light' ? false : true}
        // Empty function to suppress react error saying onChange
        // is needed when checked is used. Using onClick instead
        onChange={() => {}}
      />
      <div className={toggleStyles}></div>
    </div>
  )
}
