import Head from 'next/head'
import Wrapper from '../components/global/Wrapper'
import Divider from '../components/global/Divider'
import Text from '../components/global/Text'
import HeaderText from '../components/header/HeaderText'
import Menu from '../components/menu/Menu'
import Project from '../components/project/Project'
import Technologies from '../components/technologies/Technologies'
import GhostButton from '../components/project/GhostButton'
import Contact from '../components/contact/Contact'
import ScrollToTop from '../components/global/ScrollToTop'

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
        <HeaderText />
        <Divider text="Projects" />
        <Text text="I love building and deploying full stack applications to create functional, user-focused tools and learn new technologies. Please see a selection of web apps I have built below. You can view each project deployed live, review the open-source code on GitHub, or read the case study to learn more about the project." />
        <Project
          projectNameText="Testably"
          projectImage="testably"
          projectDescription="Testably is a micro-SaaS product providing easy-to-use A/B testing tools for startups and small businesses. I developed Testably after growing frustrated in my day job about the lack of simple, affordable A/B testing solutions available for startups. Testably is built with Express and MongoDB on the back end and Vue.js with Nuxt.js on the front end."
          viewLiveButtonDestination="https://testably.co/"
          viewOnGitHubButtonDestination="https://github.com/willgardner9?tab=repositories&q=testably&type=&language=&sort="
          readCaseStudyDestination="/testably"
        />
        <Divider text="Technologies" />
        <Text text="This is a selection of languages, frameworks, and APIs that I am comfortable with and have experience using. I love learning new technologies, too  - check out my learning roadmap at the end of the section to see what I’m planning on picking up next!" />
        <Technologies />
        <Divider text="Contact" />
        <Contact />
      </Wrapper>
      <ScrollToTop />
    </div>
  )
}
