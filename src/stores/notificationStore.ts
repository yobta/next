import { observableYobta } from '@yobta/stores'
import { useObservable } from '@yobta/stores/react'

export interface NotificationLike {
  message: string
}

const notificationStore = observableYobta<NotificationLike[]>([])

export const pushNotification = (
  ...notifications: NotificationLike[]
): void => {
  notificationStore.next((last) => {
    const newNotifications = notifications.filter(
      (righ) => !last.some((left) => left.message === righ.message)
    )
    return [...last, ...newNotifications]
  })
}

export const popNotification = (): void => {
  notificationStore.next((last) => last.slice(1))
}

export const useNotification = (): NotificationLike | undefined => {
  const notifications = useObservable(notificationStore)
  return notifications[0]
}
