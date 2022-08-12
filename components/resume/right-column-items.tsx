import { FC } from 'react'

interface ColumnItem {
  name: string
  items: string[]
}

const columnItems: ColumnItem[] = [
  {
    name: 'PERSONAL DETAILS',
    items: ['linkedin.com/in/rafaelfurry', 'github.com/BullThistle']
  },
  {
    name: 'TOP SKILLS',
    items: [
      'TypeScript',
      'React',
      'React Native',
      'Redux',
      'Node',
      'GraphQL',
      'Prisma'
    ]
  },
  {
    name: 'STUDYING',
    items: ['Go', 'Swift', 'Next.js', 'Tailwind CSS']
  },
  {
    name: 'HOBBIES',
    items: ['MIDI scripting', 'Neovim/Treesitter plugin dev']
  }
]

export const RightColumnItems: FC = () => (
  <>
    {columnItems.map(({ name, items }, nameId) => (
      <div key={`${name} + ${nameId}`} className='mb-3'>
        <p className='font-bold'>{name}</p>
        <div className='mt-1 ml-3'>
          {items.map((item, itemId) => (
            <p key={`${item} + ${itemId}`}>{item}</p>
          ))}
        </div>
      </div>
    ))}
  </>
)
