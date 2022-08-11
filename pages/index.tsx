import type { NextPage } from 'next'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Profile } from '../components/profile'

const Home: NextPage = () => (
  <div>
    <Header />
    <Profile />
    <Footer />
  </div>
)

export default Home
