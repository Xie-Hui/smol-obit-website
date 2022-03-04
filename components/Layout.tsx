import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="min-h-screen bg-gradient-to-t from-gray-900 to-gray-800">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <div className="flex justify-between px-4 py-6">
        <div className="items-center">
          <Link href="/">
            <a className="items-center lg:w-0 lg:flex-1">Home</a>
          </Link>{' '}
        </div>
        <div>
          <Link href="/about">
            <a>Mint</a>
          </Link>
          <Link href="/users">
            <a>Prehistoric Smolverse</a>
          </Link>
          <button className="text-gray-100 hover:text-gray-500 ">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
    {children}
  </div>
)

export default Layout
