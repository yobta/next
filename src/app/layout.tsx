import type { FunctionComponent } from 'react'

import { Providers } from './Providers'

import '../styles/globals.css'

type Props = {
  children: JSX.Element
}

const RootLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
