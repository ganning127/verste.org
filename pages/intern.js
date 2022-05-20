import { NextSeo } from "next-seo";
import { NavBar } from "../components/NavBar";
import { SmSep } from "../components/Separators/SmSep";
import { MedSep } from "../components/Separators/MedSep";
import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Heading,
  Link,
  OrderedList,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { Footer } from "../components/Footer/index.tsx";
import { HeadCenter } from "../components/Sections/HeadCenter";
import { TextBlock } from "../components/Sections/TextBlock";
import { AiOutlineCheck } from "react-icons/ai";
const url = "https://verste.org";
const title = "Intern | Verste";
const description =
  "Verste is an open-source platform where experienced scholars volunteer their time to simplify academic-heavy research in areas ranging from computer science to biology and economics into easy-to-understand versions.";

export default function Intern() {
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
        <HeadCenter
          img="/intern-logo.png"
          title="Verste Design Internship 2022"
          emph="June 20 - August 15"
          desc="In our 8-week design internship, come work with a rapidly growing 501(c)(3) nonprofit organization! With Verste, you’ll be working with our core team to grow, expand, and reach more students across the country. 
          "
          button1="Apply Now"
          href1="https://docs.google.com/forms/d/e/1FAIpQLSe9B0iPoimxo46JXtLTwr3xnADWWJoMSgrrBWW2Tj7o3XJBhw/viewform"
          button2="Learn More"
          href2="https://docs.google.com/document/d/1GU1KV7ql5dxkj_dkwGQz6cf1tda92QYGAW4l0rlFj3s/edit?usp=sharing"
        />

        <SmSep line={true} />

        <TextBlock
          title="What are Verste Design Interns?"
          desc1="Verste is a 501(c)(3) nonprofit organization that creates simplified versions of difficult to read research papers."
          desc2="Our design internship is an 8-week virtual internship designed to guide you through project-based learning and build connections with other interns and our founders. This summer, join us as we launch our first cohort of design interns."
        />

        <SmSep line={true} />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
          <Box>
            <Heading color="brandLight.gray" fontSize="4xl">
              Application Process
            </Heading>
            <OrderedList fontSize={{ base: "md", lg: "lg" }} spacing={2} mt={4}>
              <ListItem>
                <b>
                  {" "}
                  <Link href="/intern/apply" color="blue.400" isExternal>
                    Written Application
                  </Link>
                </b>{" "}
                (5/20 - 6/4)
              </ListItem>
              <ListItem>
                <b>Assignment & Interview:</b> Based on the written application,
                every applicant that moves forward will have to complete an
                assignment related to design. Applications who submit the
                assignment will have an interview with the Verste team.
              </ListItem>
            </OrderedList>

            <Text fontSize={{ base: "md", lg: "lg" }} mt={4}>
              <b>Intern applications</b> will close on{" "}
              <b>June 4 at 11:59 PM EST</b>.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }}>
              <b>Program dates:</b> June 20 - August 15 (8-week program).
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }}>
              <b>Application Link:</b>{" "}
              <Link href="/intern/apply" color="blue.400" isExternal>
                verste.org/intern/apply
              </Link>
              .
            </Text>
          </Box>

          <Box>
            <Heading color="brandLight.gray" fontSize="4xl">
              Why Should You Apply?{" "}
            </Heading>
            <List spacing={2} mt={4}>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.500" />
                <Text as="span" fontSize={{ base: "md", lg: "lg" }}>
                  <Text as="span" color="blue.400" fontWeight="bold">
                    Community
                  </Text>
                  . By joining the Verste team, you gain a network of passionate
                  youth and a supportive team for advice, feedback, and more.
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.500" />
                <Text as="span" fontSize={{ base: "md", lg: "lg" }}>
                  <Text as="span" color="blue.400" fontWeight="bold">
                    Impact
                  </Text>
                  . Join us in creating opportunities for thousands of people
                  from around the world.
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.500" />
                <Text as="span" fontSize={{ base: "md", lg: "lg" }}>
                  <Text as="span" color="blue.400" fontWeight="bold">
                    Learn
                  </Text>
                  . Regardless of the role you take on, you’ll gain invaluable
                  skills in cold-emailing, event planning, public speaking,
                  leadership, networking, and more.
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.500" />
                <Text as="span" fontSize={{ base: "md", lg: "lg" }}>
                  <Text as="span" color="blue.400" fontWeight="bold">
                    Experience
                  </Text>
                  . The diverse projects you will work on will help you develop
                  skills that you can’t learn in school.
                </Text>
              </ListItem>
            </List>
          </Box>
        </SimpleGrid>

        <Text
          fontSize={{ base: "md", lg: "lg" }}
          fontStyle="italic"
          textAlign="center"
          mt={8}
        >
          For any questions regarding this internship opportunity, please read
          our FAQs on{" "}
          <Link
            color="blue.400"
            href="https://docs.google.com/document/d/1GU1KV7ql5dxkj_dkwGQz6cf1tda92QYGAW4l0rlFj3s/edit?usp=sharing"
            isExternal
          >
            this document
          </Link>
          , or email us at{" "}
          <Link color="blue.400" href="mailto:hello@verste.org">
            hello@verste.org
          </Link>
          !
        </Text>

        <MedSep />
      </Container>

      <SmSep />
      <Footer />
    </>
  );
}
