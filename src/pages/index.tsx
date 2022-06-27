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
import type { NextPage } from 'next'
import Head from 'next/head'

import { pushError } from '../components/ErrorToast'
import { pushNotification } from '../components/NotificationToast'

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
  awaitSubmitYobta(async ({ target, message }) => {
    if (target === 'error') {
      const error = new Error(message)
      pushError(error)
    } else {
      pushNotification({ message })
    }
  }),
  validityYobta()
)

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container max-w-lg mx-auto px-4">
        <h1 className="text-2xl my-4">Welcome Yobta</h1>
        <form noValidate onSubmit={handleForm}>
          <Input caption="Message yobta" name="message" />
          <div className="yobta-menu">
            <label className="yobta-menu-group">
              <input
                className="yobta-radio yobta-addon"
                type="radio"
                name="target"
                value="error"
              />
              Error
            </label>
            <label className="yobta-menu-group">
              <input
                className="yobta-radio yobta-addon"
                type="radio"
                name="target"
                value="notification"
              />
              Notification
            </label>
          </div>
          <button className="yobta-button-primary" type="submit">
            Yarr
          </button>
        </form>
      </main>

      <footer>footer</footer>
    </>
  )
}

export default Home
