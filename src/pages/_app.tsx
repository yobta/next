import type { AppProps } from 'next/app'
import { StrictMode } from 'react'

import { ConnectionToast } from '../components/ConnectionToast'
import { ErrorToast } from '../components/ErrorToast'
import { NotificationToast } from '../components/NotificationToast'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StrictMode>
      <Component {...pageProps} />
      <ErrorToast />
      <NotificationToast />
      <ConnectionToast />
    </StrictMode>
  )
}

export default MyApp
