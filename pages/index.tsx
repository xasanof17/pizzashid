import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header, Navbar } from '../components'
// https://www.figma.com/file/QcMZjl2m2SPszgIhxrLIFj/pizza-landing-page-(Community)?node-id=813%3A104
const Home: NextPage = () => {
   return (
      <>
         <Head>
            <title>Pizzashid</title>
            <link rel="icon" href="/favicon.svg" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
         </Head>
         <div className="app">
            <Navbar />
            <Header/>
         </div>
      </>
   )
}

export default Home
