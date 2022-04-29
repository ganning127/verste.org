import { Box, Text, Heading } from "@chakra-ui/react";

export const StatsCard = ({ title, num, desc, color }) => {
  return (
    <Box textAlign="center" bg="white" rounded="md" p={4} shadow="md">
      <Heading as="h1" fontSize="2xl" color="brandLight.gray">
        {title}
      </Heading>
      <Text fontWeight="bold" fontSize={48} color={color}>
        {num}+
      </Text>

      <Text as="p" fontSize="md" fontWeight="normal" color="brandLight.gray">
        {desc}
      </Text>
    </Box>
  );
};
