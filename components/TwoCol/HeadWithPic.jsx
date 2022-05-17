import {
  Heading,
  Box,
  SimpleGrid,
  Img,
  Button,
  Text,
  HStack,
} from "@chakra-ui/react";

export const HeadWithPic = ({
  title,
  desc,
  button1,
  href1,
  button2,
  href2,
  img,
}) => {
  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={10}
      alignItems="center"
      justifyContent="center"
    >
      <Box mx="auto" textAlign="center">
        <Heading fontSize="6xl" color="brandLight.gray">
          {title}
        </Heading>
        <Text
          fontSize={{ base: "md", lg: "lg" }}
          color="brandLight.gray"
          textAlign="center"
          mb={4}
        >
          {desc}
        </Text>

        <HStack justifyContent="center" spacing={8}>
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
            px={5}
            py={1}
            rounded="md"
            // shadow="lg"
            target="_blank"
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
      <Box mx="auto">
        <Img src={img} alt="image" maxH="300px" rounded="md" shadow="lg" />
      </Box>
    </SimpleGrid>
  );
};
