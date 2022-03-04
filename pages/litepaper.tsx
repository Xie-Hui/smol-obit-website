import { NextPage } from 'next'
import Layout from '../components/Layout'

const LitepaperPage: NextPage = () => (
  <Layout title="Litepaper">
    <div className="flex min-h-screen items-center justify-items-center">
      <div className="flex flex-1 flex-col px-4 py-2">
        <h1 className="mt-2 mb-10 space-x-10 text-center text-4xl text-gray-300">
          Prehistoric Smolverse
        </h1>
        <p className="text-center text-gray-300">
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`}
        </p>
      </div>
    </div>
  </Layout>
)

export default LitepaperPage
