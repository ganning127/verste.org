import {
  Heading,
  Box,
  Text,
  HStack,
  Link,
  Img,
  SimpleGrid,
} from "@chakra-ui/react";

export const HomeLanding = ({ desc, button1, href1, button2, href2, img }) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={5}
      alignItems="center"
      textAlign={{ base: "center", md: "left" }}
    >
      <Box>
        <Heading
          as="h1"
          fontSize={{ base: "5xl", lg: "7xl" }}
          lineHeight={{ base: 1, lg: 1.2 }}
          fontWeight="bold"
          color="brandLight.gray"
        >
          Free <br />
          Simplified <br />
          <Text as="span" color="brandLight.caroBlue">
            Research
          </Text>
        </Heading>

        <Text
          as="p"
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="normal"
          color="brandLight.gray"
          my="5"
        >
          {desc}
        </Text>

        <HStack
          spacing={5}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <Link
            as="a"
            href={href1}
            bg="brandLight.caroBlue"
            _hover={{
              bg: "brandLight.blue",
            }}
            transition="all 0.2s"
            color="white"
            fontSize="lg"
            fontWeight="semibold"
            px={2}
            py={1}
            rounded="md"
          >
            {button1}
          </Link>

          <Link
            as="a"
            href={href2}
            color="brandLight.caroBlue"
            _hover={{
              color: "brandLight.blue",
            }}
            transition="all 0.2s"
            fontSize="lg"
            fontWeight="semibold"
            px={2}
            py={1}
          >
            {button2}
          </Link>
        </HStack>
      </Box>
      <Box>
        <Img src={img} />
      </Box>
    </SimpleGrid>
  );
};
