import Head from 'next/head'
import Wrapper from '../components/global/Wrapper'
import Divider from '../components/global/Divider'
import Text from '../components/header/Text'
import Menu from '../components/menu/Menu'
import Project from '../components/project/Project'

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
        <Divider text="Projects" />
        <Project
          projectNameText="Testably"
          projectDescription="Testably.co is a micro-SaaS product providing easy-to-use A/B testing tools for startups and small businesses. I developed Testably.co after growing frustrated in my day job about the lack of simple, affordable A/B testing solutions available for startups. Testably.co is built with Express and MongoDB on the backend and Nuxt.js on the frontend."
          viewLiveButtonDestination="https://testably.co/"
          viewOnGitHubButtonDestination="https://github.com/willgardner9/testably.co-back-end"
          readCaseStudyDestination="/testably"
        />
      </Wrapper>
    </div>
  )
}
