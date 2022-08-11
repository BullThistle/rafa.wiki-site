import type { NextPage } from 'next'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Profile } from '../components/profile'

const Home: NextPage = () => {
  return (
    <div className='max-w-sm mx-auto mt-10'>
      <div className='flex flex-col gap-6'>
        <Header />
        <Profile />
        <Footer />
      </div>
    </div>
  )
}

export default Home
