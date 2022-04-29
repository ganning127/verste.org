import { Box, SimpleGrid, Img, Button, Text, HStack } from "@chakra-ui/react";

export const TextButtonPic = ({
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
      <Box mx="auto">
        <Text
          fontSize="xl"
          color="brandLight.gray"
          textAlign={{ base: "center", lg: "left" }}
          mb={4}
        >
          {desc}
        </Text>

        <HStack justifyContent={{ base: "center", lg: "flex-start" }}>
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
      <Box mx="auto">
        <Img
          src={img}
          alt="image"
          maxH="250px"
          d={{ base: "none", lg: "block" }}
        />
      </Box>
    </SimpleGrid>
  );
};
