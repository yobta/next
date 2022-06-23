import { observableYobta } from '@yobta/stores'
import { useObservable } from '@yobta/stores/react'
import { YobtaErrorReporter } from '@yobta/validator'

export interface ErrorLike {
  name: string
  message: string
  type?: string
}

const errorsStore = observableYobta<ErrorLike[]>([])

export const pushError = (...errors: ErrorLike[]): void => {
  errorsStore.next((last) => {
    const newErrors = errors.filter(
      (righ) => !last.some((left) => left.message === righ.message)
    )
    return [...newErrors, ...last]
  })
}

export const popError = (): void => {
  errorsStore.next(([, ...last]) => last)
}

export const omitYobtaErrors = (): void => {
  errorsStore.next((last) => last.filter(({ type }) => type !== 'YobtaError'))
}

export const handleYobtaErrors: YobtaErrorReporter = (errors, { event }) => {
  if (event?.type !== 'submit') {
    return
  }
  const rootLevelErrors = errors.filter(({ field }) => field === '@')
  if (rootLevelErrors.length < errors.length) {
    pushError({
      name: 'Error!',
      message: 'Need to fill out a form',
      type: 'YobtaError',
    })
  }
  if (rootLevelErrors.length) {
    rootLevelErrors.forEach((error) => {
      // TODO notify basgsnag for example
    })
    pushError(...rootLevelErrors)
  }
}

export const useError = (): ErrorLike | undefined => {
  const errors = useObservable(errorsStore)
  return errors[0]
}
