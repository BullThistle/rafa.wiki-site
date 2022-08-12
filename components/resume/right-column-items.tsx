import { FC } from 'react'
import Link from 'next/link'

interface ColumnItem {
  header: string
  items: {
    name: string
    link: string
  }[]
}

const columnItems: ColumnItem[] = [
  {
    header: 'PERSONAL DETAILS',
    items: [
      {
        name: 'linkedin.com/in/rafaelfurry',
        link: 'https://www.linkedin.com/in/rafaelfurry/'
      },
      { name: 'github.com/BullThistle', link: 'https://github.com/BullThistle' }
    ]
  },
  {
    header: 'TOP SKILLS',
    items: [
      { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
      { name: 'React', link: 'https://reactjs.org/' },
      { name: 'React Native', link: 'https://reactnative.dev/' },
      { name: 'Redux', link: 'https://redux.js.org/' },
      { name: 'Node', link: 'https://nodejs.org/' },
      { name: 'GraphQL', link: 'https://graphql.org/' },
      { name: 'Prisma', link: 'https://www.prisma.io/' }
    ]
  },
  {
    header: 'STUDYING',
    items: [
      { name: 'Go', link: 'https://go.dev/' },
      { name: 'Swift', link: 'https://developer.apple.com/swift/' },
      { name: 'Next.js', link: 'https://nextjs.org/' },
      { name: 'Tailwind CSS', link: 'https://tailwindcss.com/' }
    ]
  },
  {
    header: 'HOBBIES',
    items: [
      {
        name: 'MIDI scripting',
        link: 'https://www.bitwig.com/support/technical_support/community-controller-extensions-and-scripts-29/'
      },
      {
        name: 'Neovim/Treesitter plugin dev',
        link: 'https://github.com/nvim-treesitter/nvim-treesitter'
      }
    ]
  }
]

export const RightColumnItems: FC = () => (
  <>
    {columnItems.map(({ header, items }, nameId) => (
      <div key={`${header} + ${nameId}`} className='mb-3 ml-3'>
        <p className='font-bold'>{header}</p>
        <div className='mt-1 text-sm'>
          {items.map(({ name, link }, itemId) => (
            <div key={`${name} + ${itemId}`} className='text-purple'>
              <Link href={link}>{name}</Link>
            </div>
          ))}
        </div>
      </div>
    ))}
  </>
)
