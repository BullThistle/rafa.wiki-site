import { useEffect, useState } from 'react'

const toggleStyles = `
		w-11 h-6 bg-gray rounded-full peer
		peer-checked:after:translate-x-full after:absolute
		after:top-0 after:left-[2px] after:bg-white
		after:border-purple after:border-2 after:border
		after:rounded-full after:h-6 after:w-6 after:absolute
		after:transition-all peer-checked:bg-purple
	`

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    typeof window === 'undefined' ? 'light' : localStorage.theme
  )
  console.log(
    'storage theme',
    typeof window === 'undefined' ? 'window is undefined' : localStorage.theme
  )

  useEffect(() => {
    const cl = document.documentElement.classList
    cl.remove(theme === 'dark' ? 'light' : 'dark')
    cl.add(theme)
    localStorage.theme = theme
    console.log('set localStorageTheme', localStorage.theme)
  }, [theme])

  const toggleTheme = () => {
    console.log('toggle theme', theme)
    if (theme === 'light') setTheme('dark')
    if (theme === 'dark') setTheme('light')
  }

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
