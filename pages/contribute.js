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
      <Head>
        <title>Contribute - Verste</title>
        <meta
          httpEquiv="refresh"
          content="0;URL='https://docs.google.com/forms/d/e/1FAIpQLSfeCsXbniP7Kr4U1sX9aI4GjKWfQL1x-SzkTsee8r0Z7N17uA/viewform?usp=sf_link'"
        />
        <meta property="og:site_name" content="verste.org" />
        <meta property="og:type" content="website" />
      </Head>
    </>
  );
}
