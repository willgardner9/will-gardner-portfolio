import Head from 'next/head'
import Wrapper from '../components/global/Wrapper'


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
        <h1>lalal</h1>
      </Wrapper>
    </div>
  )
}
