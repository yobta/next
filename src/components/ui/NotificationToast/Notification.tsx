import { Clock, Cross } from '@yobta/ui'

import { NotificationLike } from './notificationStore'
import { useToastContext } from '../Toast'

interface NotificationFC {
  (props: { notification?: NotificationLike }): JSX.Element
}

export const Notification: NotificationFC = ({ notification }): JSX.Element => {
  const { autoHide, countdown, handleClick } = useToastContext()
  return (
    <>
      <div className="flex-1">
        <div className="whitespace-pre-line">{notification?.message}</div>
        {autoHide && (
          <div className="ui-badge bg-ink-border text-xs inline-flex gap-1 items-center">
            <Clock className="w-3 h-3" />
            {countdown}
          </div>
        )}
      </div>
      <button
        className="ui-button rounded-full w-12 h-12 p-0"
        type="button"
        onClick={handleClick}
      >
        <Cross className="w-full" />
      </button>
    </>
  )
}
