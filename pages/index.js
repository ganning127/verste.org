import { TwoColSignUp } from "../components/Landing/TwoColSignUp"
import { About } from '../components/LandingTabs/About'
import { Benefits } from '../components/LandingTabs/Benefits'
import { Contact } from '../components/LandingTabs/Contact'
import Head from "next/head"

export default function Home() {



  return (
    <>
      <Head>
        <title>Verste | Free Books Translated</title>
        <meta name="description" content="Earn volunteer hours for translating books, transcribing videos, and simplifying long texts!" />
        <meta property="og:title" content="Verste | Translate. Transcribe. Simplify." />
        <meta property="og:url" content="https://www.verste.org/" />
        <meta property="og:site_name" content="verste.org" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TwoColSignUp
        title1="Free"
        title2="Research"
        title3="Simplified."
        desc1="Read simplified research papers, articles, and more."
        desc2="Sign up to get early access!"
        sheet="general"
        pic='/landing.jpeg'
        tabs={['About', 'Benefits', 'Contact']}
        tabsContent={[
          <About key={1} />,
          <Benefits key={2} content='general' />,
          <Contact key={3} />
        ]}
      />

    </>
  )
}
