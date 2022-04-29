import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import { StatsCard } from "../Cards/StatsCard";
export const ByTheNumbers = () => {
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={10}
        alignItems="center"
        justifyContent="center"
      >
        <StatsCard
          title="Categories"
          num={7}
          color="green.400"
          desc="With topics including biology, chemistry, computer science, economics, physics, and social sciences, Verste contains simplified research from topics in many scientific journals."
        />
        <StatsCard
          title="Readers"
          num={100}
          color="brand.gold"
          desc="Currently, Verste has over 100 readers from around the world. We're not only making an impact in the scientific community, but also bringing technical education to the reach of everyone."
        />
        <StatsCard
          title="Contributors"
          num={60}
          color="brandLight.caroBlue"
          desc="With over 60 contributors simplifying and editing research papers, we strive to make our simplifications to the upmost quality. We are growing faster than ever. "
        />
      </SimpleGrid>
    </>
  );
};
