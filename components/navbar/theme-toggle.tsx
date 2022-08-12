import { useEffect, useState } from 'react'

const toggleStyles = `
		w-11 h-6 bg-gray rounded-full peer
		peer-checked:after:translate-x-full after:absolute
		after:bottom-3.5 after:right-[20px] after:bg-white
		 after:border after:border-purple
		after:rounded-full after:h-7 after:w-7 after:absolute
		after:transition-all peer-checked:bg-purple
	`

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null)

  useEffect(() => {
    const themeFromStorage = localStorage.getItem('theme')
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'
    setTheme(themeFromStorage ?? systemTheme)
  }, [])

  useEffect(() => {
    if (!theme) return
    const cl = document.documentElement.classList
    cl.remove(theme === 'dark' ? 'light' : 'dark')
    cl.add(theme)
    console.log('theme in use effect', theme)
    localStorage.setItem('theme', theme)
    console.log('set localStorageTheme', localStorage.theme)
  }, [theme])

  const toggleTheme = () => {
    console.log('toggle theme', theme)
    if (theme === 'light') setTheme('dark')
    if (theme === 'dark') setTheme('light')
  }

  if (!theme) return null

  return (
    <label className='relative cursor-pointer mt-3'>
      <input
        type='checkbox'
        className='sr-only peer'
        checked={theme === 'light' ? false : true}
        onClick={() => toggleTheme()}
        // Empty function to suppress react error saying onChange
        // is needed when checked is used. Using onClick instead
        onChange={() => {}}
      />
      <div className={toggleStyles}></div>
    </label>
  )
}
