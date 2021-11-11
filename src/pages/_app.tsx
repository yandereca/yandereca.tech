import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Component {...pageProps} />

      <style global jsx>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: #fefefe;
        }
      `}</style>
    </>
  )
}

export default MyApp
