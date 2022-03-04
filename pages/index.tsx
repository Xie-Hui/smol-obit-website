import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const Home: NextPage = () => (
  <Layout title="Home">
    <div className="flex min-h-screen items-center justify-items-center">
      <div className="flex flex-1 flex-col">
        <h1 className="mt-2 mb-10 space-x-10 text-center text-5xl text-gray-300 sm:text-5xl md:text-7xl">
          Smol Obits
        </h1>
        <Link href="/mint">
          <button className="mt-1 mb-1 flex flex-1 items-center justify-center whitespace-nowrap px-4 py-2 text-gray-400  hover:bg-gray-700  hover:text-gray-100">
            Mint
          </button>
        </Link>
        <Link href="/litepaper">
          <button className="mt-1 mb-1 items-center justify-center rounded-sm bg-gray-900 bg-origin-border px-4 py-2 font-medium text-gray-400  hover:bg-gray-700 hover:text-gray-100">
            Lite paper
          </button>
        </Link>
        <a
          className="mt-1 mb-1 px-4 py-2 text-center text-gray-400 hover:bg-gray-700 hover:text-gray-100"
          target="_blank"
          href="https://twitter.com/SmolObits"
        >
          Twitter
        </a>
        <a
          target="_blank"
          href="https://discord.gg/CsKRNw4EA9"
          className="mt-1 mb-1 px-4 py-2 text-center text-gray-400 hover:bg-gray-700 hover:text-gray-100"
        >
          Discord
        </a>
      </div>
    </div>
  </Layout>
)

export default Home
