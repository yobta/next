import { Clock, Cross } from '@sdlk/react-entypo'

import { ErrorLike } from './errorsStore'
import { useToastContext } from '../Toast'

interface ErrorFC {
  (props: { error?: ErrorLike }): JSX.Element
}

export const Error: ErrorFC = ({ error }): JSX.Element => {
  const { autoHide, countdown, handleClick } = useToastContext()
  return (
    <>
      <div className="flex-1">
        <h6 className="text-xs font-bold">Ошибка!</h6>
        <div className="whitespace-pre-line">{error?.message}</div>
        {autoHide && (
          <div className="ui-badge bg-ink-border text-xs inline-flex gap-1 items-center">
            <Clock className="w-3 h-3" />
            {countdown}
          </div>
        )}
      </div>
      <button
        className="ui-button rounded-full w-12 h-12 p-0"
        type="button"
        onClick={handleClick}
      >
        <Cross className="w-full" />
      </button>
    </>
  )
}
