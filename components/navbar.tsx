import { ThemeToggle } from './themeToggle'
import Link from 'next/link'

export const Navbar = () => (
  <nav className='py-3 px-[30%]'>
    <div className='container flex justify-between mx-auto'>
      <div className='mb-1 self-center text-xl font-semibold'>
        <Link href='/'>rafa.dev</Link>
      </div>
      <div className='w-full text-gray-700'>
        <ul className='flex flex-row p-4 space-x-8 mt-0 text-sm font-medium'>
          <li className='px-4 text-indigo-800'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:text-indigo-800 dark:text-white'>
            <Link href='/resume'>Resume</Link>
          </li>
        </ul>
      </div>
      <ThemeToggle />
    </div>
  </nav>
)
