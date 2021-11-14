import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="favicon.bmp" type="image/bitmap" />
      </Head>

      <Component {...pageProps} />

      <style global jsx>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: #fefefe;

          font-family: 'Noto Sans JP', sans-serif;

          color: #202020;
        }

        * {
          box-sizing: border-box;
        }

        .page-link {
          color: #707070;
          text-decoration: none;
          padding: 0 1rem;
        }
      `}</style>
    </>
  )
}

export default MyApp
