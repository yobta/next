import type { AppProps } from 'next/app'
import { StrictMode } from 'react'

import { ConnectionToast } from '../components/ConnectionToast'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { ErrorToast } from '../components/ErrorToast'
import { NotificationToast } from '../components/NotificationToast'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StrictMode>
      <ErrorBoundary>
        <Component {...pageProps} />
        <ErrorToast />
        <NotificationToast />
        <ConnectionToast />
      </ErrorBoundary>
    </StrictMode>
  )
}

export default MyApp
