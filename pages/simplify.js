import { NextSeo } from "next-seo";
import { NavBar } from "../components/NavBar";
import { SmSep } from "../components/Separators/SmSep";
import {
  Box,
  Container,
  Text,
  VStack,
  SimpleGrid,
  Textarea,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputStepper,
  UnorderedList,
  ListItem,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from "@chakra-ui/react";
import { HeadingWithDesc } from "../components/Headings/HeadingWithDesc";
import { Footer } from "../components/Footer/index.tsx";
import { useState } from "react";

const url = "https://verste.org";
const title = "Verste – Free Simplified Research";
const description =
  "Verste is an open-source platform where experienced scholars volunteer their time to simplify academic-heavy research in areas ranging from computer science to biology and economics into easy-to-understand versions.";

export default function Simplify() {
  const [paper, setPaper] = useState("");
  const [question, setQuestion] = useState("");
  const [num, setNum] = useState(3);
  const [responded, setResponded] = useState(false);
  const [summary, setSummary] = useState("");
  const [answer, setAnswer] = useState("");
  const [bullets, setBullets] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePaper = (e) => {
    setPaper(e.target.value);
  };

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const handleNum = (num) => {
    setNum(num);
  };

  const handleSimplify = async () => {
    setLoading(true);
    if (paper === "" || question === "") {
      alert("Please fill out both fields");
      return;
    }

    const resp = await fetch("/api/simplify", {
      method: "POST",
      body: JSON.stringify({
        paper,
        question,
        num,
      }),
    });

    const data = await resp.json();
    setResponded(true);
    setSummary(data.summary);
    setAnswer(data.answer);
    setBullets(data.bullets);
    setLoading(false);
  };
  return (
    <>
      <NavBar />

      <SmSep />

      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <HeadingWithDesc>Original</HeadingWithDesc>
            <VStack spacing={4}>
              <FormControl isRequired borderRadius="20" color="gray.900">
                <FormLabel htmlFor="extraInfo" color="blue.dark">
                  Paste the original research paper here
                </FormLabel>
                <Textarea
                  id="origPaper"
                  type="text"
                  placeholder="The input length should be greater than 20 sentences."
                  color="gray.900"
                  onInput={handlePaper}
                  rows={15}
                />
              </FormControl>

              <FormControl isRequired borderRadius="20" color="gray.900">
                <FormLabel htmlFor="lastname" color="blue.dark">
                  Type in a question (N/A if none)
                </FormLabel>
                <Input
                  onChange={handleQuestion}
                  type="text"
                  placeholder="e.g. How many trials did the authors do?"
                  color="gray.900"
                />
              </FormControl>

              <FormControl isRequired borderRadius="20" color="gray.900">
                <FormLabel>Number of bullets wanted</FormLabel>
                <NumberInput
                  defaultValue={3}
                  min={1}
                  max={10}
                  id="num"
                  onChange={(val) => handleNum(val)}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <Button
                colorScheme="blue"
                onClick={handleSimplify}
                isLoading={loading}
                loadingText="Working some magic..."
              >
                {" "}
                Simplify!
              </Button>
            </VStack>
          </Box>

          <Box>
            <HeadingWithDesc>Simplified</HeadingWithDesc>

            {responded && (
              <VStack justifyContent="flex-start">
                <Box bg="white" p={4} rounded="md" shadow="md" w="100%">
                  <Text fontWeight="bold">Summary:</Text>
                  <Text>{summary}</Text>
                </Box>

                <Box bg="white" p={4} rounded="md" shadow="md" w="100%">
                  <Text fontWeight="bold">Answer:</Text>
                  <Text>{question === "N/A" ? "None" : answer}</Text>
                </Box>

                <Box bg="white" p={4} rounded="md" shadow="md" w="100%">
                  <Text fontWeight="bold">Main Points:</Text>

                  <UnorderedList>
                    {bullets.map((bullet, i) => (
                      <ListItem key={i}>{bullet}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </VStack>
            )}
          </Box>
        </SimpleGrid>
      </Container>
      <SmSep />
      <Footer />
    </>
  );
}
