import { storeYobta } from '@yobta/stores'
import { useYobta } from '@yobta/stores/react'

export interface NotificationLike {
  message: string
}

const notificationStore = storeYobta<NotificationLike[]>([])

export const pushNotification = (
  ...notifications: NotificationLike[]
): void => {
  const last = notificationStore.last()
  const newNotifications = notifications.filter(
    (righ) => !last.some((left) => left.message === righ.message)
  )
  notificationStore.next([...last, ...newNotifications])
}

export const popNotification = (): void => {
  const state = notificationStore.last().slice(1)
  notificationStore.next(state)
}

export const useNotification = (): NotificationLike | undefined => {
  const notifications = useYobta(notificationStore)
  return notifications[0]
}
