import { NextPage } from "next"
import Link from "next/link"
import Layout from "../components/Layout"

const Home: NextPage = () => (
  <Layout title="Home">
    <div className="flex min-h-screen items-center justify-items-center">
      <div className="flex flex-1 flex-col">
        <h1 className="mt-2 mb-10 space-x-10 text-center font-mono font-mono text-4xl text-gray-100 text-shadow-3xl sm:text-5xl md:text-7xl">
          Smol Obits
        </h1>
        <Link href="/mint">
          <button className="mt-1 mb-1 flex flex-1 items-center justify-center whitespace-nowrap font-mono text-gray-400 hover:bg-gray-700 hover:text-gray-100 hover:text-shadow-xl">
            <div className="w-full px-4 py-2 transition-transform hover:-translate-x-2">
              mint
            </div>
          </button>
        </Link>
        <Link href="/litepaper">
          <button className="mt-1 mb-1 items-center justify-center rounded-sm bg-gray-900 bg-origin-border font-mono font-medium hover:bg-gray-700">
            <div className="px-4 py-2 text-gray-400 transition-transform hover:-translate-x-2 hover:text-gray-100 hover:text-shadow-xl">
              lite paper
            </div>
          </button>
        </Link>
        <a
          className="mt-1 mb-1 text-center font-mono text-gray-400 hover:bg-gray-700 hover:text-gray-100 hover:text-shadow-xl"
          target="_blank"
          href="https://twitter.com/SmolObits"
        >
          <div className="w-full px-4 py-2 transition-transform hover:-translate-x-2">
            twitter
          </div>
        </a>
        <a
          target="_blank"
          href="https://discord.gg/CsKRNw4EA9"
          className="mt-1 mb-1 text-center font-mono text-gray-400 hover:bg-gray-700 hover:text-gray-100 hover:text-shadow-xl"
        >
          <div className="w-full px-4 py-2 transition-transform hover:-translate-x-2">
            discord
          </div>
        </a>
      </div>
    </div>
  </Layout>
)

export default Home
