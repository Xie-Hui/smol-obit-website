import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const Home: NextPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="text-center text-6xl font-black">Hello!!! 👋</h1>
    <p>hello there</p>
  </Layout>
)

export default Home
