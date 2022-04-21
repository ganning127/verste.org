import { Box, Text, Icon, SimpleGrid, HStack } from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";
export const DiffComp = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={20} spacingY={5}>
      <Box bg="white" textAlign="center" p={4} rounded="md" shadow="sm">
        <Text fontWeight="semibold" fontSize="2xl" color="brandLight.caroBlue">
          Simplified
        </Text>
        <Text fontSize="lg" color="brandLight.text">
          By studying different animals, we can investigate the biological
          causes of cravings. From parasites to monkeys, many species all show a
          drive for ethanol. While mice are usually used to study an
          organisms&apos ethanol, it is easier to find the biological causes of
          such behavior in fruit flies.
        </Text>
        <HStack mx="auto" justify="center" mt={2} spacing={10}>
          <Box d="flex" alignItems="center" fontSize="xl">
            <Icon as={AiFillCheckCircle} color="green.400" mr={2} />
            <Text>Easier</Text>
          </Box>
          <Box d="flex" alignItems="center" fontSize="xl">
            <Icon as={AiFillCheckCircle} color="green.400" mr={2} />
            <Text>Faster</Text>
          </Box>
          <Box d="flex" alignItems="center" fontSize="xl">
            <Icon as={AiFillCheckCircle} color="green.400" mr={2} />
            <Text>Better</Text>
          </Box>
        </HStack>
      </Box>
      <Box bg="white" textAlign="center" p={4} rounded="md" shadow="sm">
        <Text fontWeight="semibold" fontSize="2xl" color="brandLight.red">
          Original
        </Text>
        <Text fontSize="lg" color="brandLight.gray">
          Model systems provide the opportunity to characterize the biology
          underlying cue-induced cravings. Memory for ethanol associated cues
          are demonstrated in a wide range of species, from nematodes to
          primates. Although rodent models are the predominant model organism
          used to study cue-induced ethanol seeking, Drosophila melanogaster
          offer distinct advantages in defining the biology of cue-induced
          ethanol seeking.
        </Text>
      </Box>
    </SimpleGrid>
  );
};
