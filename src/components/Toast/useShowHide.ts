import { useCallback, useEffect, useState } from 'react'
import { useKey } from 'react-use'

export type ShowHideState = 'entering' | 'visible' | 'exiting' | 'invisible'

type Config = {
  initialState: boolean
  onClose?: VoidFunction
}

interface ShowHideHook {
  (config: Config): {
    state: ShowHideState
    handleAnimationEnd: VoidFunction
    handleClick: VoidFunction
  }
}

export const visibleStates = new Set(['entering', 'visible'])

export const useShowHide: ShowHideHook = ({
  initialState,
  onClose: handleClose,
}) => {
  const [state, setState] = useState<ShowHideState>('invisible')

  const hasVisibleState = visibleStates.has(state)

  useEffect(() => {
    if (initialState) {
      setState('entering')
    }
  }, [initialState])

  const handleClick: VoidFunction = useCallback(() => {
    if (state === 'visible') {
      setState('exiting')
    }
  }, [state])

  const handleAnimationEnd: VoidFunction = useCallback(() => {
    if (state === 'entering') {
      setState('visible')
    }
    if (state === 'exiting') {
      setState('invisible')
      if (handleClose) {
        handleClose()
      }
    }
  }, [state, handleClose])

  useKey(
    'Escape',
    (event) => {
      if (hasVisibleState) {
        setState('exiting')
        event.stopImmediatePropagation()
      }
    },
    {},
    [hasVisibleState]
  )

  useEffect(() => {
    if (initialState && state === 'invisible') {
      setState('entering')
    }
    if (!initialState && hasVisibleState) {
      setState('exiting')
    }
  }, [initialState, hasVisibleState, state])

  return { state, handleAnimationEnd, handleClick }
}
