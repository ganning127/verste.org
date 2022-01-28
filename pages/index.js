import { TwoColSignUp } from "../components/Landing/TwoColSignUp"
import { About } from '../components/LandingTabs/About'
import { Benefits } from '../components/LandingTabs/Benefits'
import { Contact } from '../components/LandingTabs/Contact'
import { NextSeo } from 'next-seo';

const url = 'https://verste.org'
const title = 'Verste – Free Books Translated'
const description = "Verste is an open-source platform where experienced scholars volunteer their time to simplify academic-heavy research in areas ranging from computer science to biology and economics into easy-to-understand versions."

export default function Home() {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url, title, description
        }}
      />

      <TwoColSignUp
        title1="Free"
        title2="Simplified"
        title3="Research."
        desc1="Read simplified research papers, articles, and more."
        desc2="Sign up to get early access!"
        sheet="general"
        pic='/research.jpeg'
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
