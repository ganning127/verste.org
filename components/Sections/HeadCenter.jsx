import {
  Heading,
  Box,
  SimpleGrid,
  Img,
  Button,
  Text,
  HStack,
  Stack,
  Center,
} from "@chakra-ui/react";

export const HeadCenter = ({
  img,
  title,
  emph,
  desc,
  button1,
  href1,
  button2,
  href2,
}) => {
  return (
    <Stack justifyContent="center" spacing={4}>
      {img && <Img alt="Page icon" src={img} width="125px" m="0 auto" />}

      <Heading
        as="h1"
        fontSize="5xl"
        fontWeight="extrabold"
        textAlign="center"
        color="brandLight.gray"
      >
        {title}
      </Heading>

      <Text
        fontSize={{ base: "md", lg: "lg" }}
        textAlign="center"
        fontWeight="bold"
        color="brandLight.blue"
      >
        {emph}
      </Text>
      <Box>
        <Text
          fontSize={{ base: "md", lg: "lg" }}
          textAlign="center"
          mx="auto"
          maxW="40rem"
          color="brandLight.gray"
        >
          {desc}
        </Text>
      </Box>

      <HStack justifyContent="center">
        {href1 && (
          <Button
            as="a"
            href={href1}
            target={href1.includes("https") ? "_blank" : "_self"}
            color="white"
            bg="brandLight.caroBlue"
            rounded="md"
            px="8"
            fontWeight="bold"
            fontSize="md"
            _hover={{
              color: "white",
              background: "brandLight.blue",
            }}
          >
            {button1}
          </Button>
        )}

        {href2 && (
          <Button
            as="a"
            href={href2}
            target={href2.includes("https") ? "_blank" : "_self"}
            size="lg"
            color="brandLight.caroBlue"
            bg="transparent"
            rounded="md"
            px="8"
            fontWeight="bold"
            fontSize="md"
            _hover={{
              color: "brandLight.blue",
            }}
          >
            {button2}
          </Button>
        )}
      </HStack>
    </Stack>
  );
};
