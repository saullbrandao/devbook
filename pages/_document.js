import Document, { Html, Head, Main, NextScript, } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body className='bg-gray-50 bg-gradient-to-b dark:from-black dark:to-black-light'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

}