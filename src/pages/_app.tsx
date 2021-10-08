import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Navbar } from 'components/Navbar'
import Script from 'next/script'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy="beforeInteractive" src="/scripts/darkMode.js" />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
