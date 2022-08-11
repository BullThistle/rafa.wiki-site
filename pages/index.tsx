import type { NextPage } from 'next'
import { ThemeToggle } from '../components/themeToggle'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Profile } from '../components/profile'

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-white dark:bg-slate-800'>
      <Header />
      <ThemeToggle />
      <Profile />
      <Footer />
    </div>
  )
}

export default Home
