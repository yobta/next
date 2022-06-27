import { useEffect, useState } from 'react'
import clsx from 'clsx'

import { Toast } from '../Toast'
import { popError, useError } from './errorsStore'
import { Error } from './Error'

export const ErrorToast = (): JSX.Element => {
  const error = useError()
  const [last, setLast] = useState(error)

  useEffect(() => {
    if (last !== error) {
      setLast(error)
    }
  }, [last, error])

  const visible = Boolean(error && last === error)

  return (
    <Toast
      className={clsx(
        'fixed z-50 left-4 right-4 bottom-4 rounded yobta-error',
        'p-2 pl-4 max-w-sm shadow-md flex items-center justify-center gap-2',
        'sm:w-full sm:right-auto'
      )}
      delayInSeconds={16}
      onClose={popError}
      visible={visible}
    >
      <Error error={error} />
    </Toast>
  )
}
