import { useEffect, useState } from 'react'

type CountdownConfig = {
  callback: VoidFunction
  delayInSeconds: number
  disabled?: boolean
}

interface CountdownHook {
  (config: CountdownConfig): number
}

const timeout = 1000

export const useCountdown: CountdownHook = ({
  delayInSeconds,
  callback,
  disabled,
}) => {
  const initialState = delayInSeconds * timeout
  const [state, setState] = useState(initialState)
  useEffect(() => {
    setState(initialState)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, delayInSeconds])

  useEffect(() => {
    if (disabled) {
      return () => {}
    }
    function update(): void {
      if (document.hasFocus()) {
        setState((last) => {
          return Math.max(last - timeout, 0)
        })
      }
    }
    const interval = setInterval(update, timeout)

    const terminate = (): void => {
      clearInterval(interval)
    }

    if (state === 0) {
      terminate()
      setState(initialState)
      callback()
    }

    return terminate
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delayInSeconds, disabled, callback, state])
  return Math.round(state / 1000)
}
