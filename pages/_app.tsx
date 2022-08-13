import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { useTheme } from '../hooks/useTheme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Head>
        <title>Rafa Wiki</title>
        <meta
          name='theme-color'
          content={theme === 'dark' ? '#191919' : '#F6F8F5'}
        />
      </Head>
      <div className={`h-screen`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
