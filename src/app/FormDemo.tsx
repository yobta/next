'use client'
import { Input } from '@yobta/ui'
import {
  asyncYobta,
  awaitSubmitYobta,
  enumYobta,
  formYobta,
  requiredYobta,
  shapeYobta,
  stringYobta,
  validityYobta,
} from '@yobta/validator'
import type { FunctionComponent } from 'react'

import { pushError } from '../components/Errors/errorsStore'
import { pushNotification } from '../components/Notifications/notificationStore'

const handleForm = asyncYobta(
  formYobta(),
  shapeYobta({
    message: [requiredYobta('Please write a message'), stringYobta()],
    target: [
      requiredYobta('Please select a type'),
      enumYobta(['notification', 'error']),
    ],
  }),
  requiredYobta(),
  awaitSubmitYobta(async ({ message, target }) => {
    if (target === 'error') {
      const error = new Error(message)
      pushError(error)
    } else {
      pushNotification({ message })
    }
  }),
  validityYobta()
)

export const FormDemo: FunctionComponent = () => {
  return (
    <form noValidate onSubmit={handleForm}>
      <Input caption="Message yobta" crossOrigin={undefined} name="message" />
      <div className="yobta-menu">
        <label className="yobta-menu-item">
          <input
            className="yobta-radio yobta-addon"
            name="target"
            type="radio"
            value="error"
          />
          Error
        </label>
        <label className="yobta-menu-item">
          <input
            className="yobta-radio yobta-addon"
            name="target"
            type="radio"
            value="notification"
          />
          Notification
        </label>
      </div>
      <button className="yobta-button-primary" type="submit">
        Yarr
      </button>
    </form>
  )
}
