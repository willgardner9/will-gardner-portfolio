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
      main: "HTML, CSS, JavaScript (React running on Next.js) continuously deployed on Vercel",
    },
    {
      preface: "Back end:",
      main: "supabase - a Firebase alternative PaaS that provides auth, user management, a Postgres database, and client-side SDK",
    },
    {
      preface: "Database",
      main: "Postgres database managed and set up through supabase",
    },
  ];

  const authCodeBlock = `// auth.js
const handleSubmit = async (e) => {
  e.preventDefault();
  //  check email is provided. If not, set error message
  if (!email) {
    return setError("you need to provide an email");
  }
  //  set loading to true for ui
  setLoading(true);
  //  attempt auth with supabase
  const {error} = await supabase.auth.signIn({email});
  //  if auth error, set loading to false for ui and set error message
  if (error) {
    setLoading(false);
    return setError("something went wrong... try again soon");
  }
  //  auth success, set loading to false for ui and set success true for ui
  setLoading(false);
  setSuccess(true);
};
  
//  index.js
useEffect(() => {
  if (!supabase.auth.currentUser) return router.push("/auth");
}, [supabase.auth.currentUser]);

if (!supabase.auth.currentUser) return null;`;

  const discardBookModelCodeBlock = `if (
    !book.volumeInfo.authors ||
    !book.volumeInfo.imageLinks ||
    !book.volumeInfo.categories ||
    !book.volumeInfo.pageCount
  )
  
    return null`;

  return (
    <div>
      <Head>
        <title>
          bestreads Demo and Case Study | Will Gardner - Full Stack Developer
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Wrapper>
        <Menu />
        <Title titleText="bestreads" />
        <div className="mt-10 shadow-lg flex max-w-min justify-center rounded">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Ufn0FVb5Wcc"
            playing={true}
            controls={true}
          />
        </div>
        <Heading headingText="Overview" />
        <Overview overviewItems={overviewItems} />
        <Heading headingText="Technical challenges, solutions, and design decisions" />
        <ParagraphTitle paragraphTitle="Supabase authentication and authorisation" />
        <ParagraphText paragraphText="The client-side SDK provided by supabase should the back end functionality for user authentication and authorisation. However, the choice of how you actually implement authentication in the client is up to you. As this project was built for my partner and I, using magic links was the quickest and easiest solution." />
        <ParagraphText paragraphText="Implementing magic links in my Next.js application was easy. Upon authentication, supabase provides access to a global supabase.auth variable that enables authentication and authorisation. Because this app has relatively few pages, I simply set up a useEffect hook to redirect unauthenticated users to the auth page, which works well for this use case. If you were building a larger scale application, a more robust server-side authentication solution using getServerSideProps would be preferable. At the moment, the supabase SDK has some issues with extracting refresh and access token cookies using getServerSideProps, but I will look to implement this server-side auth method when it's available." />
        <Caption captionText="Simple auth and magic links with supabase & auth code useEffect hook using supabase client-side SDK" />
        <div style={{fontFamily: "monospace"}} className="mb-8">
          <CodeBlock
            text={authCodeBlock}
            language="javascript"
            theme={monokai}
          />
        </div>
        <ParagraphTitle paragraphTitle="Book Object Models and Component Props" />
        <ParagraphText paragraphText="Bestreads uses the Google Books API to search for books and get information about their titles, authors, publication dates, and so on. The Google Books API serves JSON data in the following way: if a value doesn't exist in a given key: value pair for a given book, that key will be omitted from the JSON data that is served, meaning the book object models varies from book to book depending on the data available. This could cause difficulities When passing a book object as props to a component: if the Google Books API doesn't have information about a book's author, for example, then that prop will be non-existent, and no data will be rendered in the UI. I decided to tackle this issue on the client side by omitting results that don't conform to a complete object data model." />
        <Caption captionText="Discards books with incomplete information" />
        <div style={{fontFamily: "monospace"}} className="mb-8">
          <CodeBlock
            text={discardBookModelCodeBlock}
            language="javascript"
            theme={monokai}
          />
        </div>
        <ParagraphText paragraphText="As you can see from the above code block, the Google Books API serves JSON data with the following object model: volume.volumeInfo... Some data I want to save is several layers deeper than other data. As such, it didn't make sense for me to make a one-to-one copy of the Google Books API object model in the columns of my Postgres database. In the end, I had two different object models for books being served to my front end. With the way my components were built - they were passed an entire book as a prop - this meant I could not pass as props books from the Google Books API and my database to the same component. This was fine because books data served directly from the Google Books API and from my database were used in different contexts and had different Book Card components. However, if I wanted data from the Google Books API and my database to be served to the same component, I would need to refactor my components to accept individual data points as props, rather than the whole book object." />
      </Wrapper>
      <ScrollToTop />
    </div>
  );
}
