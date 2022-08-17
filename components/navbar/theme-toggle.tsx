import { useTheme } from 'next-themes'
import { FC, useEffect, useState } from 'react'

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
        className='peer sr-only'
        checked={theme === 'light' ? false : true}
        // Empty function to suppress react error saying onChange
        // is needed when checked is used. Using onClick and onTouchStart instead
        onChange={() => {}} // eslint-disable-line @typescript-eslint/no-empty-function
      />
      <div
        className={`
					peer h-6 w-11 rounded-full bg-gray after:absolute after:bottom-3.5
					after:right-[20px] after:h-7 after:w-7
					after:rounded-full after:border-2 
					after:border-purple  after:bg-white after:transition-all
					peer-checked:bg-purple peer-checked:after:translate-x-full
				`}></div>
    </div>
  )
}
