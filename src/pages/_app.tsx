import type { AppProps } from 'next/app'

import { ConnectionToast } from '../components/Toast/ConnectionToast'
import { ErrorBoundary } from '../components/Error/ErrorBoundary'
import { ErrorToast } from '../components/Toast/ErrorToast'
import { NotificationToast } from '../components/Toast/NotificationToast'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
      <ErrorToast />
      <NotificationToast />
      <ConnectionToast />
    </ErrorBoundary>
  )
}

export default MyApp
