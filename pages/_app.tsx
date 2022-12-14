import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { ThemeProvider, useTheme } from 'next-themes'
import { FC, useEffect, useState } from 'react'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider attribute='class'>
    <AppContents Component={Component} pageProps={pageProps} />
  </ThemeProvider>
)

const AppContents: FC<Pick<AppProps, 'Component' | 'pageProps'>> = ({
  Component,
  pageProps
}) => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <Head>
        <title>Rafa Wiki</title>
        <meta
          name='theme-color'
          content={theme === 'dark' ? '#191919' : '#F6F8F5'}
        />
      </Head>
      <div className='h-screen'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
