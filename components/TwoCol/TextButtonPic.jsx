import { Box, SimpleGrid, Img, Button, Text } from "@chakra-ui/react";

export const TextButtonPic = ({ desc, button1, href1, img }) => {
  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={10}
      alignItems="center"
      justifyContent="center"
    >
      <Box mx="auto">
        <Text fontSize="xl" color="brandLight.gray" mb={4}>
          {desc}
        </Text>
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
      </Box>
      <Box mx="auto">
        <Img src={img} alt="image" maxH="250px" />
      </Box>
    </SimpleGrid>
  );
};
