import Image from 'next/image'
import React from 'react'

export const Header = () => (
  <div className='flex items-center justify-between border-b-2 border-light-gray p-4 dark:border-gray'>
    <div>
      <div className='text-2xl font-bold'>Rafael Furry</div>
      <div className='text-gray'>Software Developer</div>
    </div>
    <div className='w-4/12 px-4'>
      <Image
        src='/nw-beach.jpeg'
        alt='relaxing at north west beach'
        width='500'
        height='500'
        className='h-auto max-w-full rounded-full border-none align-middle shadow'
      />
    </div>
  </div>
)
