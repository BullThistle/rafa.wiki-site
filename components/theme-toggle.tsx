import { useEffect, useState } from 'react'

const toggleStyles = `
		w-11 h-6 bg-gray-200 rounded-full peer
		peer-checked:after:translate-x-full after:absolute
		after:top-0 after:left-[2px] after:bg-white
		after:border-indigo-800 after:border-2 after:border
		after:rounded-full after:h-6 after:w-6 after:absolute
		after:transition-all peer-checked:bg-indigo-800
	`

export const ThemeToggle = () => {
  const [enabled, setEnabled] = useState(false)
  const [theme, setTheme] = useState(
    typeof window === 'undefined' ? 'light' : localStorage.theme
  )

  useEffect(() => {
    const cl = document.documentElement.classList
    cl.remove(theme === 'dark' ? 'light' : 'dark')
    cl.add(theme)
    localStorage.theme = theme
  }, [theme])

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark')
    if (theme === 'dark') setTheme('light')
    setEnabled(!enabled)
  }

  return (
    <label className='relative cursor-pointer mt-3'>
      <input
        type='checkbox'
        className='sr-only peer'
        defaultChecked={enabled}
      />
      <div onClick={() => toggleTheme()} className={toggleStyles}></div>
    </label>
  )
}
