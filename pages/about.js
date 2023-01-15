import { NextSeo } from "next-seo";
import { NavBar } from "../components/NavBar";
import { SmSep } from "../components/Separators/SmSep";
import { MedSep } from "../components/Separators/MedSep";
import {
  Box,
  Button,
  Img,
  Container,
  SimpleGrid,
  Text,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { HeadingWithDesc } from "../components/Headings/HeadingWithDesc";
import { Footer } from "../components/Footer/index.tsx";
import { TextWithButtons } from "../components/Sections/TextWithButtons";
import { HeadWithPic } from "../components/TwoCol/HeadWithPic";
import { TeamGrid } from "../components/Once/TeamGrid";
const url = "https://verste.org";
const title = "About | Verste";
const description =
  "Verste is an open-source platform where experienced scholars volunteer their time to simplify academic-heavy research in areas ranging from computer science to biology and economics into easy-to-understand versions.";

const sponsors = [
  {
    href: "https://aws.amazon.com/",
    img: "/sponsors/aws.png",
  },
  {
    href: "https://hackplus.io/",
    img: "/sponsors/hackplus.png",
  },
  {
    href: "https://www.tacobellfoundation.org/ambition-accelerator/",
    img: "/sponsors/taco_bell.png",
  },
];

export default function About() {
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
      <NavBar bg="#fafaff !important" />
      <SmSep />
      <Container maxW="container.xl" mt="">
        <HeadWithPic
          title="About Us"
          desc="Based in North Carolina, Verste is a 501(c)(3) nonprofit dedicated to making research more accessible by creating simplified research papers. Our core team consists of students from the North Carolina School of Science and Math and Apex Friendship. To read more about our team, head to our team. To learn more about our organization, feel free to read below!"
          button1="Our Notion"
          button2="Contribute"
          href1="https://verste.notion.site/About-Verste-e03cb661bdcb43efa87b41b4cdfd1b0c"
          href2="/contribute"
          img="/about-cover.png"
        />

        <MedSep line={true} />

        <HeadingWithDesc smaller={true}>
          Bridging the Technical Education Gap
        </HeadingWithDesc>

        <TextWithButtons
          desc="Verste is a student-led nonprofit that creates simplified versions of difficult-to-read research papers. As students, we’ve experienced firsthand how difficult it is to understand a research paper filled with complex vocabulary and scientific concepts. We’re here to change that.

          By creating simplified versions of research papers, we provide a stepping stone for high school students and undergraduate researchers reading their first research papers. At the same time, researchers who’ve read plenty of papers in their careers are provided with a consistent experience that allows them to comprehend key points of a research paper in a fast and efficient manner."
        />
        <MedSep line={true} />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
          <Box>
            <Heading color="brandLight.gray" fontSize="4xl">
              Goals
            </Heading>

            <UnorderedList
              fontSize={{ base: "md", lg: "lg" }}
              spacing={2}
              mt={4}
            >
              <ListItem>
                Build a sustainable, supportive, and growing{" "}
                <b>community of contributors</b> interested in simplifying
                research papers.
              </ListItem>
              <ListItem>
                Create a growing <b>library of research papers</b>, each with an
                informative, useful, and high-quality simplification.
              </ListItem>
              <ListItem>
                <b>Bridge the technical education gap</b> and create pathways
                for students interested in research to enter this intriguing
                community.
              </ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Heading color="brandLight.gray" fontSize="4xl">
              Partners & Sponsors
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 3 }} mt={4} spacing={8}>
              {sponsors.map((sponsor, index) => {
                return (
                  <Box as="a" href={sponsor.href} target="_blank" key={index}>
                    <Img src={sponsor.img} maxH="80px" />
                  </Box>
                );
              })}
            </SimpleGrid>
          </Box>
        </SimpleGrid>

        {/* <MedSep line={true} />
        <HeadingWithDesc>Our Team </HeadingWithDesc>
        <Box h={1} my={2} />
        <TeamGrid /> */}

        <MedSep line={true} />
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={16}
          alignItems="center"
        >
          <Box>
            <Heading color="brandLight.gray" fontSize="4xl">
              Verste Contributors
            </Heading>
            <Text fontSize="lg" mt={4} my={4}>
              As a nonprofit, Verste is made possible by the generous efforts of
              our contributors, who dedicate their time to our mission. If
              you're interested in creating simplified versions of research
              papers you've read (or read recently), we'd love for you to join
              our team of contributors! As a contributor, you'll be able to 
              <b>earn service hours</b> for your contributions, 
              <b>gain knowledge</b> and research experience,{" "}
              <b>get involved in the community</b>, and make a difference.{" "}
            </Text>
            <Button
              as="a"
              href="/contribute"
              bg="brandLight.caroBlue"
              color="white"
              fontSize={{ base: "md", lg: "lg" }}
              _hover={{
                bg: "brandLight.blue",
              }}
            >
              Contribute
            </Button>
          </Box>
          <Box mx="auto">
            <Img src="/cs_paper.png" maxH="350px" />
          </Box>
        </SimpleGrid>
      </Container>

      <SmSep />
      <Footer />
    </>
  );
}
