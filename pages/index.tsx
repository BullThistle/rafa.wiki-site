import type { NextPage } from 'next'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { About } from '../components/about'

const Home: NextPage = () => {
  return (
    <div className='mx-auto mt-10 max-w-xs sm:max-w-sm'>
      <div className='flex flex-col gap-6'>
        <Header />
        <About />
        <Footer />
      </div>
    </div>
  )
}

export default Home
