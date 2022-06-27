import type { AppProps } from 'next/app'

import { ErrorToast } from '../components/ErrorToast'
import { NotificationToast } from '../components/NotificationToast'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <Component {...pageProps} />
      <ErrorToast />
      <NotificationToast />
    </div>
  )
}

export default MyApp
