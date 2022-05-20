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
  OrderedList,
  List,
  ListIcon,
  ListItem,
  UnorderedList,
  Icon,
} from "@chakra-ui/react";
import { HeadingWithDesc } from "../components/Headings/HeadingWithDesc";
import { Footer } from "../components/Footer/index.tsx";
import { HeadCenter } from "../components/Sections/HeadCenter";
import { AiOutlineCheck } from "react-icons/ai";
const url = "https://verste.org";
const title = "Intern | Verste";
const description =
  "Verste is an open-source platform where experienced scholars volunteer their time to simplify academic-heavy research in areas ranging from computer science to biology and economics into easy-to-understand versions.";

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

      <NavBar bg="#fafaff !important" />
      <SmSep />
      <Container maxW="container.xl" mt="">
        <HeadCenter
          img="/contributor-logo.png"
          title="Verste Contributor"
          emph="Virtual & Ongoing"
          desc="Verste Contributors are essential in fulfill Verste's mission of creating simplified research papers. If you have previous research experience (either reading or writing), we'd love for you to join our team of contributors!"
          button1="Apply Now"
          href1="https://docs.google.com/forms/d/e/1FAIpQLSfeCsXbniP7Kr4U1sX9aI4GjKWfQL1x-SzkTsee8r0Z7N17uA/viewform"
          button2="Contributor Notion"
          href2="https://verste.notion.site/Verste-Contributors-862f399e67c24f35a3a256904d28d368"
        />

        <MedSep line={true} />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
          <Box>
            <Heading color="brandLight.gray" fontSize="4xl">
              What You'll Do
            </Heading>
            <UnorderedList
              fontSize={{ base: "md", lg: "lg" }}
              spacing={2}
              mt={4}
            >
              <ListItem>
                Simplify any research paper that you'd like, which could be
                papers that you've read before or something that you're tackling
                from scratch
              </ListItem>
              <ListItem>
                Edit research papers that someone else has simplified to add
                more information, clear up confusion, or just to make them
                better
              </ListItem>
              <ListItem>
                Talk to us about project ideas you might have, such as outreach,
                programming, or anything else, and we'd be happy to chat.
              </ListItem>
            </UnorderedList>

            <Text fontSize={{ base: "md", lg: "lg" }} mt={4}>
              <b>Application Link:</b>{" "}
              <Link href="/contribute/apply" color="blue.400" isExternal>
                verste.org/contribute/apply
              </Link>
              .
            </Text>
          </Box>

          <Box>
            <Heading color="brandLight.gray" fontSize="4xl">
              Contributor Benefits
            </Heading>
            <List spacing={2} mt={4}>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.500" />
                <Text as="span" fontSize={{ base: "md", lg: "lg" }}>
                  Earn{" "}
                  <Text as="span" color="blue.400" fontWeight="bold">
                    community service hours
                  </Text>{" "}
                  for simplifying and editing research papers
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.500" />
                <Text as="span" fontSize={{ base: "md", lg: "lg" }}>
                  Earn{" "}
                  <Text as="span" color="blue.400" fontWeight="bold">
                    Presidential Volunteer Service Award
                  </Text>{" "}
                  hours
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.500" />
                <Text as="span" fontSize={{ base: "md", lg: "lg" }}>
                  Gain{" "}
                  <Text as="span" color="blue.400" fontWeight="bold">
                    knowledge and research experience
                  </Text>{" "}
                  through your efforts
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.500" />
                <Text as="span" fontSize={{ base: "md", lg: "lg" }}>
                  Potential{" "}
                  <Text as="span" color="blue.400" fontWeight="bold">
                    LinkedIn endorsements
                  </Text>
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.500" />
                <Text as="span" fontSize={{ base: "md", lg: "lg" }}>
                  A{" "}
                  <Text as="span" color="blue.400" fontWeight="bold">
                    letter of recommendation
                  </Text>{" "}
                  from our founders
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.500" />
                <Text as="span" fontSize={{ base: "md", lg: "lg" }}>
                  Become part of an{" "}
                  <Text as="span" color="blue.400" fontWeight="bold">
                    active and fun environment
                  </Text>{" "}
                  with active support, resources, and guidance
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.500" />
                <Text as="span" fontSize={{ base: "md", lg: "lg" }}>
                  Obtain preparation for various{" "}
                  <Text as="span" color="blue.400" fontWeight="bold">
                    research programs and opportunities
                  </Text>
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineCheck} color="green.500" />
                <Text as="span" fontSize={{ base: "md", lg: "lg" }}>
                  A{" "}
                  <Text as="span" color="blue.400" fontWeight="bold">
                    completely virtual opportunity
                  </Text>
                  , you're free to contribute as much as you want :)
                </Text>
              </ListItem>
            </List>
          </Box>
        </SimpleGrid>

        <SmSep line={true} />
        <HeadingWithDesc>Application Process</HeadingWithDesc>

        <OrderedList
          fontSize={{ base: "md", lg: "lg" }}
          spacing={2}
          mt={4}
          maxW="750px"
          mx="auto"
        >
          <ListItem>
            Fill out the{" "}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfeCsXbniP7Kr4U1sX9aI4GjKWfQL1x-SzkTsee8r0Z7N17uA/viewform"
              color="blue.400"
              fontWeight="bold"
              isExternal
            >
              Verste Contributor Application
            </Link>{" "}
            (shouldn’t take more than 5 minutes)
          </ListItem>
          <ListItem>
            Join our community of student researchers on{" "}
            <Link
              href="https://discord.com/invite/DrztSC6jyr"
              color="blue.400"
              fontWeight="bold"
              isExternal
            >
              Discord
            </Link>
            !
          </ListItem>
          <ListItem>Wait for an email from us about the next steps!</ListItem>
        </OrderedList>

        <SmSep />

        <Footer />
      </Container>
    </>
  );
}
