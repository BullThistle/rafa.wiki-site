import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property='custom' content='yolo' />
      </Head>
      <body className='bg-white dark:bg-black text-black dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
