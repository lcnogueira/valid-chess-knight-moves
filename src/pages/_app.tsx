import { AppProps } from 'next/app'
import Head from 'next/head'
import Header from 'components/Header'
import ThemeProvider from 'styles/ThemeProvider'

function ValidChessMoves({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Valid Chess Knight Moves</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A challenge for a position at AE Studio"
        />
      </Head>
      <ThemeProvider>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default ValidChessMoves
