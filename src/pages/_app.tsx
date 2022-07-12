import type { AppProps } from 'next/app'
import { StrictMode } from 'react'

import '../styles/globals.css'
import { ErrorBoundary } from '../components/Error'
import {
  ErrorToast,
  NotificationToast,
  ConnectionToast,
} from '../components/Toast'

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
