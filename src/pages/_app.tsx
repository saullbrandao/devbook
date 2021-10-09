import { AppProps } from 'next/dist/shared/lib/router/router'
import { Navbar } from 'components/Navbar'
import Script from 'next/script'
import Head from 'next/head'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Shows statistics about github users"
        />
      </Head>
      <Script strategy="beforeInteractive" src="/scripts/darkMode.js" />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
