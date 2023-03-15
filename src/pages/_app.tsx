import type { AppProps } from 'next/app'

import { ConnectionToast } from '../components/Notifications/ConnectionToast'
import { ErrorBoundary } from '../components/Errors/ErrorBoundary'
import { ErrorToast } from '../components/Errors/ErrorToast'
import { NotificationToast } from '../components/Notifications/NotificationToast'
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
