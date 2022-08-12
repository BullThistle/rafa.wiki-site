import Link from 'next/link'

export const Footer = () => (
  <div className='border-t-2 border-light-gray dark:border-gray pt-4 px-2 flex justify-between text-sm'>
    <div>© 2022 by Rafael Furry</div>
    <div className='text-sm hover:cursor-pointer text-purple'>
      <Link href='https://github.com/BullThistle/portfolio'>source code</Link>
    </div>
  </div>
)
