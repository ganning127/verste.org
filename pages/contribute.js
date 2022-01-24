import { TwoColSignUp } from "../components/Landing/TwoColSignUp"


import Head from "next/head"
export default function Contribute() {



    return (
        <>
            <Head>
                <title>Contribute - Verste</title>
                <meta name="description" content="Earn volunteer hours for translating books, transcribing videos, and simplifying long texts!" />
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
                desc1="Earn volunteer hours for translating books, transcribing videos, and simplifying texts!"
                desc2="Sign up here to get early access!"
                sheet="contribute"
                pic='/books.png'
            />

        </>
    )
}
