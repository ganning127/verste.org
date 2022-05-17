import {
  Heading,
  Text,
  Box,
  Link,
  Center,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function FourOhFour() {
  return (
    <>
      <Center my="auto">
        <Box alignItems="center">
          <Box>
            <HStack>
              <motion.div
                initial={{ x: "300%" }}
                animate={{ x: "35%" }}
                transition={{ type: "spring", velocity: 2 }}
              ></motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0,
                    opacity: 1,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.45,
                    },
                  },
                }}
              >
                <Heading color="blue.shade" fontSize="4xl" isTruncated>
                  Oops, we can't find that page.
                </Heading>
              </motion.div>
              <motion.div
                initial={{ x: "-200%" }}
                animate={{ x: "-55%" }}
                transition={{ type: "spring", velocity: 2 }}
              ></motion.div>
            </HStack>
          </Box>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 1,
                },
              },
            }}
          >
            <Text
              fontWeight="normal"
              textAlign="center"
              color="brandLight.gray"
              fontSize={{ base: "md", lg: "lg" }}
              my="3"
            >
              {" "}
              You look lost, head back{" "}
              <Link color="blue.300" href="/">
                home
              </Link>
            </Text>
          </motion.div>
        </Box>
      </Center>
    </>
  );
}
