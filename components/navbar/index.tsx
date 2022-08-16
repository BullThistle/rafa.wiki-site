import { ThemeToggle } from './theme-toggle'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

export const Navbar: FC = () => {
  const { pathname } = useRouter()
  return (
    <nav className='py-3'>
      <div className='container mx-auto flex max-w-xs justify-between py-3 sm:max-w-md md:max-w-lg'>
        <div className='mb-1 self-center text-xl font-semibold text-purple'>
          <Link href='/'>rafa.wiki</Link>
        </div>
        <div className='w-full pl-3'>
          <ul className='mt-0 flex flex-row space-x-8 p-4 text-sm font-medium'>
            <li className={`${pathname === '/' && 'underline'} text-purple`}>
              <Link href='/'>Home</Link>
            </li>
            <li
              className={`${
                pathname === '/resume' && 'underline'
              } text-purple`}>
              <Link href='/resume'>Resume</Link>
            </li>
          </ul>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
}
