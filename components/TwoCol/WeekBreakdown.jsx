import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Container,
  Text,
  Badge,
  Link,
  SimpleGrid,
  useColorModeValue as mode,
  VStack,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import * as React from "react";

export const WeekBreakdown = ({ week, title, desc, img }) => {
  return (
    <Box as="section" py="8" overflow="hidden">
      <Box
        maxW={{
          base: "xl",
          md: "7xl",
        }}
        mx="auto"
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={24}
          alignItems="center"
        >
          <Box spacing={4} justifyContent="flex-start">
            <Badge px="2" fontSize="1em" colorScheme="blue" rounded="md">
              {week}
            </Badge>

            <Heading color="brandLight.gray" fontSize="4xl" my={4}>
              {title}
            </Heading>
            <Text fontSize={{ base: "sm", lg: "lg" }}>{desc}</Text>
          </Box>

          <Box
            maxW={{
              base: "xl",
              md: "7xl",
            }}
            mx="auto"
          >
            <Img src={img} alt={week + " picture"} />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
