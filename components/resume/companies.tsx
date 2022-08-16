import { FC } from 'react'
import Link from 'next/link'

interface Company {
  role: string
  name: string
  website: string
  location: string
  dates: string
  technologies: string
  achievements?: string[]
  responsibilities?: string[]
}

const companies: Company[] = [
  {
    role: 'SOFTWARE ENGINEER',
    name: 'WECONNECT',
    website: 'weconnectrecovery.com',
    location: 'Seattle, WA',
    dates: 'December 2018 - August 2022',
    technologies:
      'TypeScript, GraphQL, React Native, React, Redux, React Navigation, Jest, Cypress, Apollo Client, Detox, Node, Apollo Server, Prisma, PostgreSQL, Redis, Bitrise, Sentry',
    achievements: [
      'Introduced React Hooks to the team and created a strategy to piecemeal refactor from Recompose to Hooks.',
      'Introduced Redux Toolkit to simplify our global state management and improve performance.',
      'Pitched and implemented Prisma as the ORM for a new performant server we migrated legacy servers to.',
      'Reduced React Native build times from an hour and a half to twenty minutes.',
      'Implemented a React Native media query system to give more consistent styles across screen sizes while eliminating the need for normalize functions.',
      'Reduced the noise of production alerts by adding a severity level to all error logs and setting alerting rules based on the severity level.',
      'Created a typed and versioned client analytics logging tool to give the data team a single source of truth on events and changes to events.'
    ],
    responsibilities: [
      'Creating features for and maintaining a React Native app and a React dashboard.',
      'Building a GraphQL API for the two clients.',
      'Providing rotational on call support(monitoring, fixing bugs, escalating when required).'
    ]
  },
  {
    role: 'SOFTWARE ENGINEER CONTRACTOR',
    name: 'CUEMED',
    website: 'cuemed.com',
    location: 'Seattle, WA',
    dates: 'October 2018 - December 2018',
    technologies:
      'React Native, Redux, Redux Saga, Redux Form, Jest, React Navigation',
    responsibilities: [
      'Implementing the CueMed React Native app from scratch as the sole developer.'
    ]
  },
  {
    role: 'WEB DEVELOPER INTERN',
    name: 'OFF THE RECORD',
    website: 'offtherecord.com',
    location: 'Seattle, WA',
    dates: 'January 2018 - Febuary 2018',
    technologies: 'Angular, Bootstrap, SCSS, OAuth 2',
    achievements: [
      'Designed and implemented a referral page.',
      'Implemented share functionality for six social platforms.'
    ]
  }
]

const FormattedList: FC<{ listItems: string[] }> = ({ listItems }) => (
  <ul className='ml-5 list-disc'>
    {listItems.map((listItem, id) => (
      <li key={`${listItem + id}`}>{listItem}</li>
    ))}
  </ul>
)

export const Companies: FC = () => (
  <>
    {companies.map(
      (
        {
          role,
          name,
          website,
          location,
          dates,
          technologies,
          achievements,
          responsibilities
        },
        id
      ) => (
        <div key={`${name} + ${id}`} className='mt-3'>
          <p className=' text-base font-bold'>{`${role}, ${name}`}</p>
          <div className='text-purple'>
            <Link href={`https://${website}`}>{website}</Link>
          </div>
          <p>{location}</p>
          <p>{dates}</p>
          <p className='mt-2 font-bold'>TECHNOLOGIES:</p>
          <p>{technologies}</p>
          {achievements?.length && (
            <>
              <p className='mt-2 font-bold'>ACHIEVEMENTS:</p>
              <FormattedList listItems={achievements} />
            </>
          )}
          {responsibilities?.length && (
            <>
              <p className='mt-3 font-bold'>RESPONSIBILITIES:</p>
              <FormattedList listItems={responsibilities} />
            </>
          )}
        </div>
      )
    )}
  </>
)
