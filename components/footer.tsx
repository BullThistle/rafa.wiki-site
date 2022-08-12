import Link from 'next/link'

export const Footer = () => (
  <div className='text-center border-t border-slate-300 p-4 text-slate-400 flex justify-between text-sm'>
    <div>© 2022 by Rafael Furry</div>
    <div className='text-sm hover:cursor-pointer'>
      <Link href='https://github.com/BullThistle/portfolio'>source code</Link>
    </div>
  </div>
)
