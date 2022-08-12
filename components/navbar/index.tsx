import { ThemeToggle } from './theme-toggle'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Navbar = () => {
  const { pathname } = useRouter()
  return (
    <nav className='py-3'>
      <div className='container py-3 flex justify-between mx-auto max-w-xs sm:max-w-md md:max-w-lg'>
        <div className='mb-1 self-center text-xl font-semibold text-purple'>
          <Link href='/'>rafa.wiki</Link>
        </div>
        <div className='w-full pl-3 text-gray-700'>
          <ul className='flex flex-row p-4 space-x-8 mt-0 text-sm font-medium'>
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
