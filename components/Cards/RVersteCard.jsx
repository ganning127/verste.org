import { Box, Text, Heading, Link, Button, Img } from "@chakra-ui/react";

export const RVersteCard = ({ title, desc, img, href }) => {
  return (
    <Box textAlign="center">
      <Heading color="brandLight.gray" fontSize="4xl">
        {title}
      </Heading>
      <Img mx="auto" src={img} maxH="200px" rounded="md" shadow="md" my={3} />
      <Text fontSize="lg" my={4}>
        {desc}
      </Text>
      {href ? (
        <Button
          as="a"
          href={href}
          bg="brandLight.caroBlue"
          color="white"
          fontSize={{ base: "md", lg: "lg" }}
          _hover={{
            bg: "brandLight.blue",
          }}
          target="_blank"
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
    </Box>
  );
};
