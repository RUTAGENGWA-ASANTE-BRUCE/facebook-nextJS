import type { NextPage } from 'next'
import { useSession} from "next-auth/react"
import Head from 'next/head'
import Image from 'next/image'
import Login from "../components/Login"
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import Feed from "../components/Feed"
const Home: NextPage = () => {
  const { data: session } = useSession()
  if(!session) return <Login />;
  return (
    <div className="">
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />
      <main className="flex">
        <SideBar />
        <Feed />
      </main>
    </div>
  )
}

export default Home

