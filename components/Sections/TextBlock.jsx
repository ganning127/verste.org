import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Container,
  Text,
  Badge,
  Grid,
  Link,
  GridItem,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import * as React from "react";

export const TextBlock = ({ title, desc1, desc2 }) => (
  <Box>
    <Heading as="h1" size="xl" maxW="48rem" color="brandLight.gray">
      {title}
    </Heading>
    <Flex
      align="flex-start"
      direction={{
        base: "column",
        lg: "row",
      }}
      justify="space-between"
      my="2rem"
    >
      <Text
        fontSize={{ base: "md", lg: "lg" }}
        mr="3rem"
        color="brandLight.gray"
      >
        {desc1}
      </Text>
      <br></br>
      <Text fontSize={{ base: "md", lg: "lg" }} color="brandLight.gray">
        {desc2}
      </Text>
    </Flex>
  </Box>
);
