import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Navbar } from 'components/Navbar'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
