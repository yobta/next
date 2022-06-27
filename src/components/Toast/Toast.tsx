import clsx from 'clsx'
import {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react'

import { useCountdown } from './useCountDown'
import { ShowHideState, useShowHide, visibleStates } from './useShowHide'
import { ToastContextProvider } from './toastContext'

type BaseProps = ComponentProps<'div'>

interface ClassNameGetter {
  (state: ShowHideState): string
}

type Props = Omit<BaseProps, 'className'> & {
  className?: string | ClassNameGetter
  delayInSeconds?: number
  onClose?: VoidFunction
  visible: boolean
}

export const Toast: ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<HTMLDivElement>
> = forwardRef(
  (
    { className, children, delayInSeconds = 0, onClose, visible, ...rest },
    ref
  ) => {
    const autoHide = delayInSeconds > 0

    const { state, handleClick, handleAnimationEnd } = useShowHide({
      initialState: visible,
      onClose,
    })

    const countdown = useCountdown({
      callback: handleClick,
      delayInSeconds,
      disabled: !autoHide || !visible,
    })

    return (
      <ToastContextProvider
        value={{
          autoHide,
          countdown,
          handleClick,
          state,
        }}
      >
        <div
          {...rest}
          className={clsx(
            typeof className === 'function' ? className(state) : className,
            'transform-gpu',
            visibleStates.has(state)
              ? 'animate-slide-in-bottom'
              : 'animate-slide-out-bottom pointer-events-none',
            state === 'invisible' && 'hidden'
          )}
          onAnimationEnd={handleAnimationEnd}
          ref={ref}
        >
          {children}
        </div>
      </ToastContextProvider>
    )
  }
)

Toast.displayName = 'Toast'
