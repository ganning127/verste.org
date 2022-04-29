import { NextSeo } from "next-seo";
import { NavBar } from "../components/NavBar";
import { HomeLanding } from "../components/Once/HomeLanding";
import { SmSep } from "../components/Separators/SmSep";
import { MedSep } from "../components/Separators/MedSep";
import { Box, Container, Text } from "@chakra-ui/react";
import { HeadingWithDesc } from "../components/Headings/HeadingWithDesc";
import { DiffComp } from "../components/Once/DiffComp";
import { Footer } from "../components/Footer/index.tsx";
import { TextWithButtons } from "../components/Sections/TextWithButtons";
import { ByTheNumbers } from "../components/Once/ByTheNumbers";

const url = "https://verste.org";
const title = "Verste – Free Simplified Research";
const description =
  "Verste is an open-source platform where experienced scholars volunteer their time to simplify academic-heavy research in areas ranging from computer science to biology and economics into easy-to-understand versions.";

export default function Home() {
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
      <Box id="landing-box">
        <NavBar />

        <SmSep />
        <Container maxW="container.xl">
          <HomeLanding
            desc="Verste is a 501(c)(3) nonprofit organization dedicated to making research more accessible by creating simplified research papers."
            button1="Start Reading"
            href1="https://wiki.verste.org/"
            button2="About Us"
            href2="/about"
            img="/landing.png"
          />
        </Container>

        <MedSep />
      </Box>
      <Container maxW="container.xl">
        <HeadingWithDesc>Less time. More info.</HeadingWithDesc>

        <DiffComp />

        <MedSep />
        <HeadingWithDesc>By the Numbers</HeadingWithDesc>
        <ByTheNumbers />
        <MedSep />
        <HeadingWithDesc>Made possible, by you</HeadingWithDesc>
        <TextWithButtons
          desc="Verste is a 501(c)(3) nonprofit organization dedicated to making research more accessible by creating simplified research papers. As such, we depend on the generous efforts by our contributors to make Verste possible. If you would like to help us out, please fill out the short application form found below! As a contributor, you'll be able to simplify any research papers you'd like, including papers that you've read before, or papers that you're tackling from scratch. Additionally, you'll be contributing to the scientific community, making research more accessible for those without previous experiences in this topic."
          button1="About Contributors"
          href1="/contribute"
          button2="Apply Now"
          href2="/contribute/apply"
          img="/logo.png"
        />
        <MedSep />
      </Container>

      <Footer />
    </>
  );
}
