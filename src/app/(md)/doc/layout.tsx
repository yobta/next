import type { FunctionComponent, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const MdLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <main className="prose container max-w-lg mx-auto my-16">{children}</main>
  )
}

export default MdLayout
