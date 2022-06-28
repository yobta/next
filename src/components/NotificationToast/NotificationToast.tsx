import { useEffect, useState } from 'react'
import clsx from 'clsx'

import { popNotification, useNotification } from './notificationStore'
import { Toast } from '../Toast'
import { Notification } from './Notification'

export const NotificationToast = (): JSX.Element => {
  const notification = useNotification()
  const [last, setLast] = useState(notification)

  useEffect(() => {
    if (last !== notification) {
      setLast(notification)
    }
  }, [last, notification])

  const visible = Boolean(notification && last === notification)

  return (
    <Toast
      className={clsx(
        'fixed z-50 right-4 bottom-4 left-4 rounded yobta-info',
        'p-2 pl-4 max-w-sm shadow-md flex items-center justify-center gap-2',
        'sm:w-full sm:left-auto'
      )}
      delayInSeconds={6}
      onClose={popNotification}
      visible={visible}
    >
      <Notification notification={notification} />
    </Toast>
  )
}
