import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
    <Head>
    <title>Doge Sound Club</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
      <body className="w-full bg-black"
            style={{zoom : "70%"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
