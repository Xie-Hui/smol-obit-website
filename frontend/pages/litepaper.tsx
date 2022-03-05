import { NextPage } from "next"
import Layout from "../components/Layout"

const LitepaperPage: NextPage = () => (
  <Layout title="Litepaper">
    <div className="flex min-h-screen flex-row content-center items-center justify-center justify-items-center">
      <div className="flex max-w-5xl flex-col px-10 pt-12 pb-24">
        <h1 className="my-5 space-x-10 text-center font-mono text-4xl text-gray-100 text-shadow-3xl sm:text-5xl md:my-12 md:text-7xl">
          Smol Obits
        </h1>
        <div className="item-start mt-2">
          <h2 className="mt-2 mb-5 font-mono text-2xl text-gray-100 text-shadow-2xl">
            Preface
          </h2>
          <p className="font-sans ">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`}
          </p>
          <blockquote className="mt-2 mb-2 bg-gray-800 px-4 py-4">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore`}</blockquote>
          <p className="font-sans text-gray-300">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`}
          </p>
          <ul className="mt-2 mb-2 list-inside list-disc">
            <li>reprehenderit in voluptate velit esse </li>
            <li>reprehenderit in voluptate velit esse </li>
            <li>reprehenderit in voluptate velit esse </li>
            <li>reprehenderit in voluptate velit esse </li>
          </ul>
          <p className="font-sans text-gray-300">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`}
          </p>
        </div>
        <div className="item-start mt-10">
          <h2 className="mt-2 mb-5 font-mono text-2xl text-gray-100 text-shadow-2xl">
            Common sense development
          </h2>
          <p className="font-sans text-gray-300">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`}
          </p>
          <p className="font-sans text-gray-300">
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
    </div>
  </Layout>
)

export default LitepaperPage
