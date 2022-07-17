import { NextSeo } from "next-seo";
import { NavBar } from "../components/NavBar";
import { HomeLanding } from "../components/Once/HomeLanding";
import { SmSep } from "../components/Separators/SmSep";
import { MedSep } from "../components/Separators/MedSep";
import { Box, Container, Button } from "@chakra-ui/react";
import { HeadingWithDesc } from "../components/Headings/HeadingWithDesc";
import { DiffComp } from "../components/Once/DiffComp";
import { Footer } from "../components/Footer/index.tsx";
import { TextWithButtons } from "../components/Sections/TextWithButtons";
import { ByTheNumbers } from "../components/Once/ByTheNumbers";
import { FullButtonWithPic } from "../components/TwoCol/FullButtonWithPic";
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
      <NavBar />

      <Box id="landing-box">
        <SmSep />
        <Container maxW="container.xl">
          <HomeLanding
            desc="Verste is a 501(c)(3) nonprofit dedicated to making research more accessible by creating simplified research papers."
            button1="Start Reading"
            href1="https://wiki.verste.org/"
            button2="About Us"
            href2="/about"
            img="/landing.png"
          />
        </Container>
      </Box>
      <Box mt="-3rem">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#c6dcf0"
            fillOpacity="0.5"
            d="M0,96L80,85.3C160,75,320,53,480,74.7C640,96,800,160,960,170.7C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </Box>
      <Box bg="rgba(198, 220, 240, 0.5)">
        <Container maxW="container.xl">
          <HeadingWithDesc>Less time. More info.</HeadingWithDesc>

          <DiffComp />

          <Box textAlign="center" mt={8}>
            <Button
              as="a"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfxESQ8oTZXq6dVkjnxNZYoiAD_XyZGM60gCJFKP7asJb26dg/viewform"
              bg="brandLight.caroBlue"
              _hover={{
                bg: "brandLight.caroBlue",
              }}
              color="white"
              rounded="md"
            >
              Request a Simplification
            </Button>
          </Box>
        </Container>
      </Box>
      <Box>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#c6dcf0"
            fillOpacity="0.5"
            d="M0,160L80,138.7C160,117,320,75,480,80C640,85,800,139,960,160C1120,181,1280,171,1360,165.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </Box>

      <Container maxW="container.xl" mt="-12rem">
        <MedSep />
        <HeadingWithDesc>By the Numbers</HeadingWithDesc>
        <ByTheNumbers />
        <MedSep />
        <HeadingWithDesc>Made possible, by you</HeadingWithDesc>
        <TextWithButtons
          desc="Verste is a 501(c)(3) nonprofit dedicated to making research more accessible by creating simplified research papers. As such, we depend on the generous efforts by our contributors to make Verste possible. If you would like to help us out, please fill out the short application form found below! As a contributor, you'll be able to simplify any research papers you'd like, including papers that you've read before, or papers that you're tackling from scratch. Additionally, you'll be contributing to the scientific community, making research more accessible for those without previous experiences in this topic."
          button1="About Contributors"
          href1="/contribute"
          button2="Apply Now"
          href2="/contribute/apply"
          img="/logo.png"
        />
        <MedSep />
        <HeadingWithDesc>Join Our Discord Server</HeadingWithDesc>
        <FullButtonWithPic
          pic="/discord-window.png"
          logo="/discord.png"
          desc="Join our community of student researchers, contributors, interns, and team members in one place."
          buttonText="Discord Invite"
          buttonLink="https://discord.com/invite/P7st5jHHD6"
        />

        <SmSep />
      </Container>

      <Footer />
    </>
  );
}
