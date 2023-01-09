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
  Link,
  UnorderedList,
  ListItem,
  Tabs,
  List,
  ListIcon,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
} from "@chakra-ui/react";
import { HeadingWithDesc } from "../components/Headings/HeadingWithDesc";
import { Footer } from "../components/Footer/index.tsx";
import { TextWithButtons } from "../components/Sections/TextWithButtons";
import { HeadWithPic } from "../components/TwoCol/HeadWithPic";
import { TeamGrid } from "../components/Once/TeamGrid";
import { RVersteCard } from "../components/Cards/RVersteCard";

import { RVersteDetails } from "../components/Once/RVersteDetails";

const url = "https://verste.org";
const title = "RVerste | Verste";
const description =
  "RVerste is a free mentorship program for students to learn topics from graph theory, computational combinatorics, and deep learning before conducting their own research.";

const image = {
  url: "https://i.imgur.com/jHqvKVY.png",
  width: 800,
  height: 600,
  alt: "RVerste cover picture.",
};
export default function RVerste() {
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
          images: [image],
        }}
      />
      <NavBar bg="#fafaff !important" />
      <SmSep />
      <Container maxW="container.xl" mt="">
        <HeadWithPic
          title="RVerste"
          desc="Research @ Verste (RVerste) is a free mentorship program for students to learn topics from graph theory, computational combinatorics, and deep learning before conducting their own research. We're currently accepting applications for our inaugural cohort of RVerste, which starts on February 6th, 2023."
          button2="RVerste Notion"
          button1="Apply Now"
          href2="https://verste.notion.site/RVerste-7e19e14db71444dea89ca8de10588395"
          href1="/rverste/apply"
          img="/rverste_zoom.png"
        />

        <MedSep line={true} />

        <HeadingWithDesc smaller={true}>
          Learn college-level concepts.
        </HeadingWithDesc>

        <TextWithButtons desc="Topics such as combinatorics (much less computational combinatorics!) are usually not taught until college. Getting a head start now not only prepares you for higher education, but allows you to explore your interests and find out what you like. As a completely free program hosted by Verste, RVerste allows anyone to apply. RVerste is separated into 3 different programs: Computational Combinatorics, Deep Learning, and Graph Theory, with two programs having the February 6 start date. Feel free to apply to any of them below." />

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={16} mt={4}>
          <RVersteCard
            title="Deep Learning"
            desc="Do you want to learn how AI like GPT-3 and Stable Diffusion really work? Well, if you’d like to a deep dive into how these models work at a very fundamental mathematical level, this is a great opportunity for you! RVerste Deep Learning is a 5 week program from February 6th, 2023 - March 10, 2023."
            href="/rverste/apply/deep-learning"
            img="/rverste-1.png"
          />
          <RVersteCard
            title="Computational Combinatorics"
            desc="Are you interested in the fundamental math that analyze the speed of an algorithm? In Computational Combinatorics, you will be exposed to the world of counting through interesting competitive math problems. RVerste Computational Combinatorics is a 7 week program from February 6th, 2023 - March 24, 2023."
            href="/rverste/apply/comp-combo"
            img="/rverste-2.png"
          />
          <RVersteCard
            title="Graph Theory"
            desc="Graph theory is the study of graphs (not the x-y kind!) and the relationships between graphs. This course is an introduction to mathematical proofs and concepts in graph theory, including planarity, coloring, and more. RVerste x Graph Theory is a 8 week program from April 3 - May 29, 2023."
            // href="/rverste/apply/graph-theory"
            img="/RVerste (1).png"
          />
        </SimpleGrid>

        <MedSep line={true} />

        <HeadingWithDesc smaller={true}>More Program Details</HeadingWithDesc>

        <Tabs variant="unstyled" textAlign="center">
          <TabList justifyContent="center">
            <Tab
              rounded="lg"
              fontWeight="bold"
              fontSize="lg"
              bg="transparent"
              _selected={{ color: "brandLight.blue", bg: "gray.100" }}
              _focus={{}}
            >
              Deep Learning
            </Tab>
            <Tab
              rounded="lg"
              fontWeight="bold"
              fontSize="lg"
              bg="transparent"
              _selected={{ color: "brandLight.blue", bg: "gray.100" }}
              _focus={{}}
            >
              Computational Combinatorics
            </Tab>
            <Tab
              rounded="lg"
              fontWeight="bold"
              fontSize="lg"
              bg="transparent"
              _selected={{ color: "brandLight.blue", bg: "gray.100" }}
              _focus={{}}
            >
              Graph Theory
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel
              bg="gray.100"
              mt="1"
              p={8}
              rounded="lg"
              maxW="1000px"
              mx="auto"
            >
              <RVersteDetails
                title="Deep Learning"
                desc="Do you want to learn how AI like GPT-3 and Stable Diffusion really work? Well, if you’d like to a deep dive into how these models work at a very fundamental mathematical level, this is a great opportunity for you"
                dates="February 6th, 2023 - March 10, 2023"
                meetTimes="Tuesdays & Thursdays at 6 - 7 PM ET"
                syllabus="https://verste.notion.site/RVerste-x-Deep-Learning-Syllabus-8b3c5e67c1664d599d80c2297d28d4c0"
                prereqs="Basic linear algebra (vector, matrix), calculus (derivative, chain
                  rule)"
                instructorName="Jacob Van Meter"
                instructorImg="/team/jacob.jpeg"
                img="/rverste-1.png"
                learnItems={[
                  "Learn all the math you'll need to know to understand all the nitty gritty of how Neural Networks work.",
                  "Learn how gradient descent optimization works (the secret ingredient to how Neural Networks learn!)",
                  "Learn how to program a Neural Network from scratch, and train it",
                  "Learn how to train a Neural Network to recognize handwritten digits",
                  "Learn how to use industry leading frameworks like PyTorch to speed up development of Neural Networks",
                ]}
                email="jacob@verste.org"
                apply="/rverste/apply/deep-learning"
              />
            </TabPanel>
            <TabPanel
              bg="gray.100"
              mt="1"
              p={8}
              rounded="lg"
              maxW="1000px"
              mx="auto"
            >
              <RVersteDetails
                title="Computational Combinatorics"
                desc="Are you interested in the fundamental math that analyze the speed of an algorithm? In Computational Combinatorics, you will be exposed to the world of counting through interesting competitive math problems.
                "
                dates="February 6th, 2023 - March 24, 2023"
                meetTimes="Mondays & Fridays at 5 - 6 PM ET"
                syllabus="https://verste.notion.site/RVerste-x-Computational-Combinatorics-94e2bf422e2d4ecda1a922fe2b3a0224"
                prereqs="Algebra (Preferably up to Precalculus). Interest in Math. Computer Science experience (any language)."
                instructorName="Ivan Zheng"
                instructorImg="/team/ivan.png"
                learnItems={[
                  "Learn how to apply fundamental combinatorics principles to more advanced problems",
                  "Learn how to implement Python to solve problems computationally",
                  "Learn the thought process behind competitive math problems",
                  "Learn how to tackle your own project and solve your own problem through research",
                  "Learn how to visual and tackle combinatorics problems",
                ]}
                email="ivan@verste.org"
                apply="/rverste/apply/comp-combo"
              />
            </TabPanel>
            <TabPanel
              bg="gray.100"
              mt="1"
              p={8}
              rounded="lg"
              maxW="1000px"
              mx="auto"
            >
              <RVersteDetails
                title="Graph Theory"
                desc="Graph theory is the study of graphs (not the x-y kind!) and the relationships between graphs. This course is an introduction to mathematical proofs and concepts in graph theory, including planarity, coloring, and more."
                dates="April 3rd, 2023 - May 7, 2023"
                meetTimes="Mondays & Fridays at 3 - 4 PM ET"
                syllabus=""
                prereqs="None!"
                instructorName="Ganning Xu"
                instructorImg="/team/ganning.jpg"
                learnItems={[
                  "Learn what a graph is, and how to create graphs from maps.",
                  "Discover different types of graphs: path graphs, cycle graphs, trees, hypercube graphs, and more!",
                  "Learn basic graph theorems, such as Euler's Theorem and the Handshaking Theorem!",
                  "Learn how to write mathematical proofs, and how to read proofs from others.",
                ]}
                email="ganning@verste.org"
                // apply="/rverste/apply/comp-combo"
              />
            </TabPanel>{" "}
          </TabPanels>
        </Tabs>
      </Container>

      <SmSep />
      <Footer />
    </>
  );
}
