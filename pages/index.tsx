import type { NextPage } from 'next'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Profile } from '../components/profile'
import { Navbar } from '../components/navbar'

const Home: NextPage = () => {
  return (
    <div
      className={`
					h-screen
					bg-white dark:bg-slate-800
					text-slate-700 dark:text-white
			`}>
      <Navbar />
      <div className='max-w-sm mx-auto mt-10'>
        <div className='flex flex-col gap-6'>
          <Header />
          <Profile />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
