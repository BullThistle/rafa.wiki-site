import { ThemeToggle } from './theme-toggle'
import Link from 'next/link'
import { useRouter } from 'next/router'

const selectedStyles = 'text-purple'
const unselectedStyles = 'hover:purple dark:text-white'

export const Navbar = () => {
  const { pathname } = useRouter()
  return (
    <nav className='py-3 px-[30%]'>
      <div className='container flex justify-between mx-auto'>
        <div className='mb-1 self-center text-xl font-semibold'>
          <Link href='/'>rafa.wiki</Link>
        </div>
        <div className='w-full pl-3 text-gray-700'>
          <ul className='flex flex-row p-4 space-x-8 mt-0 text-sm font-medium'>
            <li
              className={pathname === '/' ? selectedStyles : unselectedStyles}>
              <Link href='/'>Home</Link>
            </li>
            <li
              className={
                pathname === '/resume' ? selectedStyles : unselectedStyles
              }>
              <Link href='/resume'>Resume</Link>
            </li>
          </ul>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
}
