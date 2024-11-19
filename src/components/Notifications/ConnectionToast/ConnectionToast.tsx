import { createConnectivityStore } from '@yobta/stores'
import { useStore } from '@yobta/stores/react'
import clsx from 'clsx'

import { IconNoConnection } from '../../../ui/icons/IconNoConnection'

interface ConnectionToastFC {
  (): JSX.Element
}

const store = createConnectivityStore()

export const ConnectionToast: ConnectionToastFC = () => {
  const connected = useStore(store)
  return (
    <div
      className={clsx(
        'fixed right-0 top-12 px-4 py-2 rounded-box rounded-r-none flex flex-col items-center',
        'z-50 transform-gpu bg-neutral transition duration-150 pointer-events-auto',
        connected === null && 'hidden',
        connected === true && 'translate-x-10 opacity-0 duration-500'
      )}
    >
      <IconNoConnection />
      <span className="text-sm">No Internet</span>
    </div>
  )
}
