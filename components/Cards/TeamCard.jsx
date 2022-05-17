import { Box, Badge, Stack, Text, WrapItem, Avatar } from "@chakra-ui/react";
export const TeamCard = ({ name, title, desc, img }) => {
  return (
    <Box
      border="1px solid lightgray"
      borderRadius="10px"
      textAlign="center"
      p="4"
      spacing={5}
    >
      <Badge colorScheme="blue" px={2} mt={"-60px"}>
        {title}
      </Badge>
      <WrapItem mb={4}>
        <Avatar
          width="150px"
          name={name}
          src={img}
          height="150px"
          mx="auto"
          bg="transparent"
        />
      </WrapItem>

      <Text
        color={"brandLight.gray"}
        fontWeight="bold"
        fontSize={{ base: "md", lg: "lg" }}
      >
        {name}
      </Text>
    </Box>
  );
};
