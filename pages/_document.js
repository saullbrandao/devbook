import Document, { Html, Head, Main, NextScript, } from 'next/document'
import { Navbar } from '../components/Navbar'

export default class MyDocument extends Document {
  render() {
    return (
      <Html className='bg-gradient-to-b from-black to-black-light'>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" />
          <Navbar />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

}