import { NextPage } from "next"
import Layout from "../components/Layout"

const MintPage: NextPage = () => (
  <Layout title="Mint">
    <div className="flex min-h-screen flex-row content-center items-center justify-center justify-items-center">
      <div className="flex max-w-5xl flex-col justify-items-center px-10 pt-12 pb-24 font-mono">
        <h1 className="my-5 space-x-10 text-center font-mono text-4xl text-gray-100 text-shadow-3xl sm:text-5xl md:my-24 md:text-7xl">
          Smol Obits
        </h1>
        <button className="max-w-sm self-center bg-gray-200 px-6 py-4 text-center text-gray-900 shadow-button hover:bg-gray-100 hover:shadow-button-hover">
          Connect your wallet
        </button>
      </div>
    </div>
  </Layout>
)

export default MintPage
