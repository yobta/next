'use client'
import { FunctionComponent } from 'react'

import { ConnectionToast } from '../components/Notifications/ConnectionToast'
import { ErrorBoundary } from '../components/Errors/ErrorBoundary'
import { ErrorToast } from '../components/Errors/ErrorToast'
import { NotificationToast } from '../components/Notifications/NotificationToast'

type Props = {
  children: JSX.Element
}

export const Providers: FunctionComponent<Props> = ({ children }) => {
  return (
    <ErrorBoundary>
      {children}
      <ErrorToast />
      <NotificationToast />
      <ConnectionToast />
    </ErrorBoundary>
  )
}
