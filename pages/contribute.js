import { TwoColSignUp } from "../components/Landing/TwoColSignUp"
import { About } from '../components/LandingTabs/About'
import { Benefits } from '../components/LandingTabs/Benefits'
import { Contact } from '../components/LandingTabs/Contact'
import Head from "next/head"
export default function Contribute() {
    return (
        <>
            <Head>
                <title>Contribute - Verste</title>
                <meta name="description" content="Become part of a global community making content accessible for all." />
                <meta property="og:title" content="Verste | Translate. Transcribe. Simplify." />
                <meta property="og:url" content="https://www.verste.org/" />
                <meta property="og:site_name" content="verste.org" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TwoColSignUp
                title1="Translate."
                title2="Transcribe."
                title3="Simplify."
                desc1="Make an impact on your community."
                desc2="Join the waitlist for our private beta to get early access"
                sheet="contribute"
                pic='/books.jpeg'
                tabs={['About', 'Benefits', 'Contact']}
                tabsContent={[
                    <About key={1} />,
                    <Benefits key={2} content='contribute' />,
                    <Contact key={3} />
                ]}
            />

        </>
    )
}
