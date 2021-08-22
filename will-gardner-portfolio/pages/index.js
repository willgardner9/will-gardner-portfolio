import Head from 'next/head'
import Wrapper from '../components/global/Wrapper'
import Text from '../components/header/Text'
import Menu from '../components/menu/Menu'

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
        <Text />
      </Wrapper>
    </div>
  )
}
