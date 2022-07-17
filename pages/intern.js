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
import { WeekBreakdown } from "../components/TwoCol/WeekBreakdown";
import { HeadingWithDesc } from "../components/Headings/HeadingWithDesc";

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
      <Container maxW="container.lg" mt="">
        <HeadCenter
          img="/intern-logo.png"
          title="Creative Design Internship Program 2022"
          emph="June 20 - August 15"
          desc="In our 8-week creative design internship, come work with a rapidly growing 501(c)(3) nonprofit! With Verste, you’ll be working with our core team to grow, expand, and reach more students across the country. 
          "
          button1="Apply Now"
          href1="https://docs.google.com/forms/d/e/1FAIpQLScBDLeZ6LEsQouekpkYLe1gUmCoyrY6jTgovzpW32JicB1EzQ/viewform"
          button2="Learn More"
          href2="https://docs.google.com/document/d/1GU1KV7ql5dxkj_dkwGQz6cf1tda92QYGAW4l0rlFj3s/edit?usp=sharing"
        />

        <SmSep line={true} />

        <TextBlock
          title="What are Creative Design Interns?"
          desc1="Come work directly with Verste’s core team to design UI wireframes, engage in weekly workshops, develop creative brand imaging, and so much more!"
          desc2="Our creative design internship is an 8-week virtual internship designed to guide you through project-based learning and build connections with other interns and our founders. This summer, join us as we launch our first cohort of creative design interns."
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
                <b>Interview:</b> Based on the written application, applicants
                who move forward from the first stage will be invited to
                interview with Verste's core team.
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

        <SmSep line={true} />
        <HeadingWithDesc desc="Here’s a breakdown of the general idea of what we’ll be covering each week throughout your internship! Please keep in mind that the schedule may change and everything is flexible!">
          Week Breakdown
        </HeadingWithDesc>
        <Box>
          <WeekBreakdown
            title="Onboarding, Introductions, Setup"
            week="Week 1"
            desc="Welcome to week 1! Here, we’ll be going over everything you need to make the most of your Verste Creative Design internship."
            img="/week - 1.png"
          />
          <WeekBreakdown
            title="Portfolio, Aspects of Engaging Instagram posts"
            week="Week 2"
            desc="You’ve made it to week 2! Now, we’ll be adding your Verste portfolio, which you’ll be using in your final presentation, and we’ll run through a quick workshop on how to create engaging Instagram posts."
            img="/week - 2.png"
          />
          <WeekBreakdown
            title="Web Prototyping using Figma"
            week="Week 3"
            desc="We are three weeks in! This week, we’ll be going over an important aspect of any designer's job, designing websites. Our goal for this week is to give you the tools and skills needed for you to create an engaging website."
            img="/week - 3.png"
          />
          <WeekBreakdown
            title="GIMP: Free Photo Editing and Manipulation"
            week="Week 4"
            desc="Halfway through the internship! This week, we’ll be running through a workshop on how to use GIMP, a free photo manipulator to re-create our logo and Instagram posts."
            img="/week - 4.png"
          />
          <WeekBreakdown
            title="Photoshop: Layers, Masks, Anything!"
            week="Week 5"
            desc="You’re in the home stretch now! We’ll be running through a photoshop workshop on how to manipulate images and create unique works of art. Please note that Photoshop IS a paid program, but there is a free trial that we will be using for our purposes."
            img="/week - 5.png"
          />
          <WeekBreakdown
            title="Color Theory"
            week="Week 6"
            desc="This week, we’ll be focusing on color theory. What is color theory? How can color theory be incorporated within the design to create appealing works that are visually pleasing?"
            img="/week - 6.png"
          />
          <WeekBreakdown
            title="Notion and Task Management"
            week="Week 7"
            desc="Second to last week! We’re almost there. This week, we’ll be going over task management and project management in general using Notion, a productivity app."
            img="/week - 7.png"
          />
          <WeekBreakdown
            title="Final Intern Presentations"
            week="Week 8"
            desc="This is our final week of the 2022 Verste Creative Design Internship. This week, you’ll be presenting your work to the entire Verste core team. Feel free to create a slidedeck or show off your portfolio."
            img="/week - 8.png"
          />
        </Box>

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
      </Container>

      <SmSep />
      <Footer />
    </>
  );
}
