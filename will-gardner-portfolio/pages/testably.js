import Head from "next/head";
import Wrapper from "../components/global/Wrapper";
import Menu from "../components/menu/Menu";
import Heading from "../components/case-studies/Heading";
import Title from "../components/case-studies/Title";
import Overview from "../components/case-studies/Overview";
import ParagraphTitle from "../components/case-studies/paragraphTitle";
import Caption from "../components/case-studies/Caption";
import ParagraphText from "../components/case-studies/ParagraphText";
import {CodeBlock, monokai} from "react-code-blocks";
import ScrollToTop from "../components/global/ScrollToTop";
import ReactPlayer from "react-player/youtube";

export default function Home() {
  const overviewItems = [
    {
      preface: "Front end:",
      main: "HTML, CSS, JavaScript (Vue.js running on Nuxt.js) continuously deployed on Vercel",
    },
    {
      preface: "Back end:",
      main: "CRUD API written in Node.js continuously deployed on Digital Ocean",
    },
    {
      preface: "Database:",
      main: "MongoDB deployed on MongoDB Atlas",
    },
  ];

  const authCodeBlock = `export default function ({ app, store, redirect, route, from }) {
    const loggedOut = app.$cookiz.get('loggedOut')
    if (loggedOut !== true) {
      // attempt refresh
      axios.get('refresh-token-route', { withCredentials: true })
        .then((res) => {
          // refresh token is valid: login user, set new access token, redirect to dashboard
          if (res.status === 200) {
            const { accessToken, accessTokenExpiresIn } = res.data.newAccessTokenObj
            store.commit('toggleAuth', true)
            store.commit('setAccessToken', accessToken)
            store.commit('setAccessTokenExpiresIn', accessTokenExpiresIn)
            axios.get('get-user-info-route', { withCredentials: true })
              .then((res) => {
                store.commit('setUser', res.data)
              })
              .then(() => {
                if (from.name === 'dashboard-abtest') {
                  return redirect(from.fullPath)
                }
                if (route.path === '/login') {
                  return redirect(from.fullPath)
                }
                return redirect(route.path)
              })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }`;

  const corsCodeBlock = `// ** ENABLE CORS FOR TESTING AND PRODUCTION ** //
  const cors = require('cors');

  const whitelist = ['http://localhost:3000', 'https://www.testably.co'];

  const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };
  app.use(cors(corsOptions));`;

  return (
    <div>
      <Head>
        <title>
          Testably Demo and Case Study | Will Gardner - Full Stack Developer
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Wrapper>
        <Menu />
        <Title titleText="Testably" />
        <div className="mt-10 shadow-lg flex max-w-min justify-center rounded">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=GgGV66XkDKk"
            playing={true}
            controls={true}
          />
        </div>
        <Heading headingText="Overview" />
        <Overview overviewItems={overviewItems} />
        <Heading headingText="Technical challenges, solutions, and design decisions" />
        <ParagraphTitle paragraphTitle="Authentication and authorisation" />
        <ParagraphText paragraphText="As with any SaaS app, authentication, authorisation, and general user management were one of the first design choices that needed to be made. To keep costs low and prevent vendor lock-in, I opted to handle authentication, authorisation, and user management myself. As I was building a completely decoupled front end and back end, the popular JWT-based refresh token/access token authentication pattern, which uses long-life HTTP-only cookie refresh tokens to generate short-life access tokens that allow access to the API was a good choice." />
        <ParagraphText paragraphText="This authentication pattern has numerous explanatory resources from Auth0 and Hasura that detail the implementation and security considerations of using refresh tokens and access tokens, so I felt confident opting for this authentication pattern." />
        <ParagraphText paragraphText="As I used Vue.js with Nuxt.js on the front end, I initially planned to use the nuxt/auth module to handle client-side authentication. For whatever reason, the nuxt/auth module had issues receiving HTTP-only cookies and then sending requests with HTTP-only cookies. I struggled with the sparse documentation and, short of digging through the source code, there didn't seem to be an expedient solution." />
        <ParagraphText paragraphText="To get around this, I wrote my own lightweight auth middlewares that use Vuex state and Axios (without the nuxt/auth wrapper). Each page of the Nuxt.js app has this auth middleware loaded into it that handles protected routes, silent logins, and refreshing tokens." />
        <Caption captionText="Auth code middleware from refreshOnLoad.js that checks if a user has logged in before and attempts a silent login" />
        <div style={{fontFamily: "monospace"}} className="mb-8">
          <CodeBlock
            text={authCodeBlock}
            language="javascript"
            theme={monokai}
          />
        </div>
        <ParagraphText paragraphText="For future projects where I may want to focus on an easier and quicker developer experience, I'd consider using a client-side SDK that handles auth like Supabase or Firebase." />
        <ParagraphTitle paragraphTitle="Public routes, private routes, and CORS" />
        <ParagraphText paragraphText="As Testably has a decoupled front end and back end hosted on different servers with different domains, the API needs to enable CORS from the front end app's domain. However, as localhost and my production server have different origins, this is not as easy as simply enabling CORS for the production app; in this case, local testing would then be impossible. Enabling CORS using a wildcard * for the domain, allowing all origins, defeats the security benefits of using CORS and prevents the client from accepting HTTP-only cookies, rendering refresh/access token authentication impossible." />
        <ParagraphText paragraphText="With these considerations in mind, early on I decided to enable CORS as a global middleware in my Express app for three origins: my localhost, staging domain, and production domain. This worked well for all protecting the API from external requests." />
        <ParagraphText paragraphText="However, what I failed to consider when making these choices was the need for some public routes on my API - routes that can accept requests from other origins. This is necessary for the client-side snippet that Testably users load onto their site to work properly. Better planning could have foreseen this issue and ensured I only utilised the CORS middleware at a Router or Controller level, enabling me to run CORS-protected and non CORS-protected routes from the same Node.js app." />
        <ParagraphText paragraphText="In the end, to avoid a fairly large-scale overhaul of my Node.js app, I opted to spin up a completely separately Node.js app for my public routes. This works well but adds to my overheads and is not an optimal solution." />
        <Caption captionText="Globally enabled CORS middleware. If I was building Testably from the ground up, I would enable this route by route or controller by controller" />
        <div style={{fontFamily: "monospace"}} className="mb-8">
          <CodeBlock
            text={corsCodeBlock}
            language="javascript"
            theme={monokai}
          />
        </div>
        <ParagraphText paragraphText="Lesson learned: properly plan out all API routes and design considerations before writing a line of code!" />
      </Wrapper>
      <ScrollToTop />
    </div>
  );
}
