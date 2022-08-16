import Link from 'next/link'

export const Footer = () => (
  <div className='flex justify-between border-t-2 border-light-gray px-2 pt-4 text-sm dark:border-gray'>
    <div className='text-gray'>© 2022 by Rafael Furry</div>
    <div className='text-sm text-purple hover:cursor-pointer'>
      <Link href='https://github.com/BullThistle/portfolio'>source code</Link>
    </div>
  </div>
)
