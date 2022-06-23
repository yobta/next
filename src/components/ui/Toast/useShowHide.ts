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
  let [state, setState] = useState<ShowHideState>('invisible')

  let hasVisibleState = visibleStates.has(state)

  useEffect(() => {
    if (initialState) {
      setState('entering')
    }
  }, [])

  let handleClick: VoidFunction = useCallback(() => {
    if (state === 'visible') {
      setState('exiting')
    }
  }, [state])

  let handleAnimationEnd: VoidFunction = useCallback(() => {
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
  }, [initialState, hasVisibleState])

  return { state, handleAnimationEnd, handleClick }
}
