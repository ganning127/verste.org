import { SimpleGrid, Box } from "@chakra-ui/react";
import { TeamCard } from "../Cards/TeamCard";
import Team from "../../data/team.json";
export const TeamGrid = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
      {Team.map((item, index) => {
        return (
          <Box key={index}>
            <TeamCard {...item} />
          </Box>
        );
      })}
    </SimpleGrid>
  );
};
