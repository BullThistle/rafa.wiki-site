import { useTheme } from 'next-themes'
import { FC, useEffect, useState } from 'react'

const toggleStyles = `
		w-11 h-6 bg-gray rounded-full peer
		peer-checked:after:translate-x-full after:absolute
		after:bottom-3.5 after:right-[20px] after:bg-white
		after:border-2 after:border-purple 
		after:rounded-full after:h-7 after:w-7 after:absolute
		after:transition-all peer-checked:bg-purple
	`

export const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(
    () => setIsMobile(/Mobi/.test(window.navigator.userAgent)),
    [setIsMobile]
  )

  if (!theme) return null

  const themeToggle = theme === 'light' ? 'dark' : 'light'

  return (
    <div
      onClick={() => !isMobile && setTheme(themeToggle)}
      onTouchStart={() => isMobile && setTheme(themeToggle)}
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
