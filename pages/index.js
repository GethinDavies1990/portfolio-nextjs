import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gethin Davies Full Stack Developer</title>
        <meta name="description" content="Home page" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
    </div>
  )
}
