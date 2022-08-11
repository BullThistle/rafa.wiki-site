import type { NextPage } from 'next'
import { ThemeToggle } from '../components/themeToggle'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Profile } from '../components/profile'
import { Layout } from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='flex flex-col gap-6'>
        <ThemeToggle />
        <Header />
        <Profile />
        <Footer />
      </div>
    </Layout>
  )
}

export default Home
