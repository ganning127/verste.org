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
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5} alignItems="center">
      <Box>
        <Heading
          as="h1"
          fontSize="7xl"
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
          fontSize="lg"
          fontWeight="normal"
          color="brandLight.gray"
          my="5"
        >
          {desc}
        </Text>

        <HStack spacing={5}>
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
