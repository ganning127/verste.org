import { TwoColSignUp } from "../components/Landing/TwoColSignUp";
import { About } from "../components/LandingTabs/About";
import { Benefits } from "../components/LandingTabs/Benefits";
import { Contact } from "../components/LandingTabs/Contact";
import Head from "next/head";
import { NextSeo } from "next-seo";

const url = "https://verste.org";
const title = "Contribute - Verste";
const description =
  "Volunteer with us! Verste is an open-source platform where experienced scholars volunteer their time to simplify academic-heavy research in areas ranging from computer science to biology and economics into easy-to-understand versions.";

export default function Contribute() {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />

      <TwoColSignUp
        title1="Make"
        title2="an"
        title3="Impact"
        desc1="Volunteer with us!"
        desc2="Sign up for early access!"
        sheet="contribute"
        pic="/computer.jpeg"
        tabs={["About", "Benefits", "Contact"]}
        tabsContent={[
          <About key={1} />,
          <Benefits key={2} content="contribute" />,
          <Contact key={3} />,
        ]}
      />
    </>
  );
}
