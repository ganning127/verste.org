import { TwoColSignUp } from "../components/Landing/TwoColSignUp"


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
                desc1="Become part of a global community making content accessible for all."
                desc2="Join the waitlist for our private beta to get early access"
                sheet="contribute"
                pic='/books.jpeg'
                tabs={['About', 'Benefits', 'Contact']}
                tabsContent={[
                    'We are a nonprofit organization based in Durham, North Carolina with the mission of making the world a better place through the power of language. We are a community of people who love language and want to help make it accessible for everyone.',
                    'By joining us, you will be able to earn volunteer hours for translating books, transcribing videos, and simplifying long texts. You will also be able to earn points for helping other people in the community.',
                    'If you have any questions, please contact us at versteteam@gmail.com'
                ]}
            />

        </>
    )
}
