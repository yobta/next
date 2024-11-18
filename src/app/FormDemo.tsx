'use client'
import {
  asyncSubmit,
  createAsyncValidator,
  form,
  oneOf,
  pipe,
  required,
  shape,
  string,
  validity,
} from '@yobta/validator'
import type { FunctionComponent } from 'react'

import { pushError } from '../components/Errors/errorsStore'
import { pushNotification } from '../components/Notifications/notificationStore'

const handleForm = createAsyncValidator(
  form(),
  shape({
    message: pipe(string(), required('Please write a message')),
    target: pipe(
      required('Please select a type'),
      oneOf(new Set(['error', 'notification']))
    ),
  }),
  required(),
  asyncSubmit(async ({ message, target }) => {
    if (target === 'error') {
      const error = new Error(message)
      pushError(error)
    } else {
      pushNotification({ message })
    }
  }),
  validity(pushError)
)

export const FormDemo: FunctionComponent = () => {
  return (
    <form noValidate onSubmit={handleForm}>
      <input name="message" />
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
