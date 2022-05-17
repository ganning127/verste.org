import { Heading, Text, Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
export const HeadingWithDesc = ({ desc, children, smaller }) => {
  return (
    <Box textAlign="center" maxW="700px" mx="auto">
      <Heading
        as="h1"
        fontSize={smaller ? "4xl" : "5xl"}
        color="brandLight.gray"
        mb="4"
        fontWeight="bold"
      >
        {children}
      </Heading>
      {desc && (
        <Text fontWeight="normal" color="brandLight.gray" fontSize="xl" my="3">
          {desc}
        </Text>
      )}
    </Box>
  );
};
