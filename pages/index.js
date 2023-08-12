import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Gethin Davies Full Stack Developer</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
    </div>
  )
}
