import { popNotification, useNotifications } from '../notificationStore'

export const NotificationToast = (): JSX.Element => {
  const notifications = useNotifications()

  return (
    <>
      {notifications.map((notification) => (
        <div className="alert alert-info" key={notification.message}>
          <span>{notification.message}</span>
          <button
            className="btn btn-circle btn-ghost"
            onClick={popNotification}
            type="button"
          >
            x
          </button>
        </div>
      ))}
    </>
  )
}
