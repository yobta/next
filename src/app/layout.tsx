import { FunctionComponent } from 'react'

import '../styles/globals.css'
import { Providers } from './Providers'

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
