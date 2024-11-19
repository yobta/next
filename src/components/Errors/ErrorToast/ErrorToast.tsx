import { popError, useErrors } from '../errorsStore'

export const ErrorToast = (): JSX.Element => {
  const errors = useErrors()

  return (
    <>
      {errors.map((error) => (
        <div className="alert alert-error" key={error.message}>
          <span>{error.message}</span>
          <button
            className="btn btn-circle btn-ghost"
            onClick={popError}
            type="button"
          >
            x
          </button>
        </div>
      ))}
    </>
  )
}
