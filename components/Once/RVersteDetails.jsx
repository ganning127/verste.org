import {
  Heading,
  Text,
  SimpleGrid,
  Img,
  Link,
  ListItem,
  Tabs,
  List,
  ListIcon,
  TabList,
  TabPanels,
  Box,
  Button,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { AiOutlineCheck } from "react-icons/ai";
export const RVersteDetails = ({
  title,
  desc,
  dates,
  meetTimes,
  syllabus,
  prereqs,
  instructorName,
  instructorImg,
  learnItems,
  email,
  apply,
}) => {
  return (
    <>
      <Heading size="xl" mt={4} color="brandLight.blue">
        {title}
      </Heading>
      <Text mt={4} fontSize="lg">
        {desc}
      </Text>
      {apply ? (
        <Button
          as="a"
          href={apply}
          _hover={{
            bg: "brandLight.blue",
          }}
          bg="brandLight.caroBlue"
          color="white"
          target="_blank"
          mt={4}
        >
          Apply for {title}
        </Button>
      ) : (
        <Text fontSize="lg" mt={4} fontStyle="italic">
          The application for Graph Theory opens in late March, as the program
          is held in April. Please fill out the{" "}
          <Link
            href="https://forms.gle/rqMQQLRvcXJyPXERA"
            color="brandLight.blue"
            isExternal
          >
            interest form
          </Link>{" "}
          if you&apos;re interested!
        </Text>
      )}
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={8}
        mt={4}
        textAlign="left"
        alignItems="center"
      >
        <Box>
          <Heading size="lg" mt={4}>
            Course Logistics
          </Heading>

          <Text fontSize="lg" mt={4}>
            <Text as="span" fontWeight="bold">
              Program Dates:
            </Text>{" "}
            {dates}
          </Text>

          <Text fontSize="lg" mt={3}>
            <Text as="span" fontWeight="bold">
              Meeting Times:
            </Text>{" "}
            {meetTimes}
          </Text>

          <Text fontSize="lg" mt={3}>
            <Text as="span" fontWeight="bold">
              Course Syllabus:
            </Text>{" "}
            <Link href={syllabus} color="brandLight.blue">
              {title} Syllabus
            </Link>
          </Text>

          <Text fontSize="lg" mt={3}>
            <Text as="span" fontWeight="bold">
              Pre-requisites:
            </Text>{" "}
            {prereqs}
          </Text>
        </Box>
        <Box textAlign="center">
          <Img mx="auto" src={instructorImg} rounded="md" maxH="300px" />
          <Text mt={4} fontSize="lg">
            <Text as="span" fontWeight="bold">
              Instructor:
            </Text>{" "}
            {instructorName}
          </Text>
        </Box>
      </SimpleGrid>
      <Heading size="lg" mt={8} align="left">
        What you&apos;ll learn
      </Heading>
      <List spacing={2} mt={4} align="left">
        {learnItems.map((item, index) => (
          <ListItem key={index}>
            <ListIcon as={AiOutlineCheck} color="green.500" />
            <Text as="span" fontSize={{ base: "md", lg: "lg" }}>
              {item}
            </Text>
          </ListItem>
        ))}
      </List>
      <Text fontSize="xl" mt={8}>
        <Text as="span" fontWeight="bold">
          Questions?
        </Text>{" "}
        Email {instructorName.split(" ")[0]} at:{" "}
        <Link color="brandLight.blue" href={"mailto:" + email}>
          {email}
        </Link>
      </Text>
    </>
  );
};
