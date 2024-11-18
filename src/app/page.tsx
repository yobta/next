import type { Metadata } from 'next'
import Link from 'next/link'
import type { FunctionComponent } from 'react'

import { FormDemo } from './FormDemo'

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'App Yobta',
}

const HomePage: FunctionComponent = () => {
  return (
    <>
      <main className="container max-w-lg mx-auto px-4 border-2">
        <h1 className="text-2xl my-4">Welcome Yobta</h1>
        <FormDemo />
      </main>

      <footer className="text-center">
        <Link className="underline" href="/doc">
          Doc
        </Link>
      </footer>
    </>
  )
}

export default HomePage
