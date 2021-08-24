import Head from 'next/head'
import Wrapper from '../components/global/Wrapper'
import Menu from '../components/menu/Menu'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Will Gardner - Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;500&display=swap" rel="stylesheet" />
      </Head>
      <Wrapper>
        <Menu />
        <section className="mt-8">
          <h1 className="font-karla text-3xl font-light">Case study</h1>
          <h2 className="font-karla text-5xl font-medium mt-4">Testably</h2>
        </section>
        <h1>lalal</h1>
      </Wrapper>
    </div>
  )
}
