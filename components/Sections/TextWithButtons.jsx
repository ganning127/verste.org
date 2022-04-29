import { Box, SimpleGrid, Img, Button, Text, HStack } from "@chakra-ui/react";

export const TextWithButtons = ({ desc, button1, href1, button2, href2 }) => {
  return (
    <Box mx="auto" maxW="1000px">
      <Text fontSize="xl" color="brandLight.gray" textAlign="center" mb={4}>
        {desc}
      </Text>

      <HStack justifyContent="center">
        <Button
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
        </Button>
        <Button
          as="a"
          bg="transparent"
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
          rounded="md"
        >
          {button2}
        </Button>
      </HStack>
    </Box>
  );
};
