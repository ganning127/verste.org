import { SimpleGrid, Heading, Spinner, Input, FormControl, Text, Box, Img, Flex, chakra, Button } from "@chakra-ui/react"
import React, { useState } from "react"
import { Formik, Form } from "formik";
import { FadeIn } from "../components/animations/FadeIn";

import Head from "next/head"
export default function Home() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const getTime = () => {
    let diffTime = Math.abs(new Date().valueOf() - new Date('02 Feb 2022').valueOf());
    let days = diffTime / (24 * 60 * 60 * 1000);
    let hours = (days % 1) * 24;
    let minutes = (hours % 1) * 60;
    let secs = (minutes % 1) * 60;
    [days, hours, minutes, secs] = [Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(secs)]
    return [days, hours, minutes, secs]
  }


  const times = getTime();
  const units = ["days", "hours", "minutes", "seconds"]

  // const [time, setTime] = useState(times)
  // setInterval(() => {
  //   setTime(getTime())
  // }, 1000)


  const subscribeEmail = async event => {
    event.preventDefault();
    let email = document.getElementById('emailFooter').value;

    setLoading(true);
    console.log(`Subscribing ${email} to newsletter...`)

    const res = await fetch(`/api/subscribe`,
      {
        body: JSON.stringify({
          email: email
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST'
      }
    )

    let result = await res.json()
    setSubmitted(true);
  }



  return (
    <>
      <Head>
        <title>Verste | Translate. Transcribe. Simplify.</title>
        <meta name="description" content="Earn volunteer hours for translating books, transcribing videos, and simplifying long texts!" />
        <meta property="og:title" content="Verste | Translate. Transcribe. Simplify." />
        <meta property="og:url" content="https://www.verste.org/" />
        <meta property="og:site_name" content="verste.org" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleGrid columns={{ base: 1, lg: 2 }} h="100vh" spacing={0}>
        <Box bgImage="url('/purple_grad.png')" bgRepeat="repat" bgSize="cover" h='100vh' p={4}>
          <FadeIn>
            <Heading color="white" fontSize="4xl">Verste</Heading>
          </FadeIn>

          <Flex height='90vh' alignItems="center">
            <Box>

              <FadeIn delay={0.8}>
                <Text fontSize='5xl' color='white' fontWeight='bold'>
                  Translate. <chakra.span color="#FFF280">Transcribe.</chakra.span> Simplify.
                </Text>
              </FadeIn>


              <FadeIn delay={1.2}>
                <Text color="white" fontSize='xl' maxW='600px' fontWeight="semibold" my={6}>
                  Earn volunteer hours for translating books, transcribing videos, and simplifying texts!
                </Text>
              </FadeIn>

              {/* <SimpleGrid columns={4} spacing={4} mt='3' fontSize='4xl' fontWeight='bold' maxW='sm'>
                {time.map((item, i) => {
                  return (
                    <FadeIn delay={1.4} key={i} >
                      <Box textAlign="center">
                        <Text bg='white' align='center' rounded='md' py={4}>
                          {item}
                        </Text>
                        <Text color='white' fontSize='lg' mt="1">
                          {units[i]}
                        </Text>
                      </Box>
                    </FadeIn>
                  )
                }
                )}
              </SimpleGrid> */}
              {!submitted && <FadeIn delay={1.6}>
                <Box mt={6}>

                  <Formik>
                    <Form onSubmit={subscribeEmail}>
                      <Box>
                        <Box
                          mt="8"
                          display={{
                            md: 'flex',
                          }}
                        // maxW="xl"
                        >
                          <FormControl id="emailFooter" isRequired>
                            <Input
                              roundedEnd={{
                                md: '0',
                              }}
                              mb={{
                                base: '2',
                                lg: '0',
                              }}
                              flex="1"
                              placeholder="email"
                              type="email"
                              letterSpacing={1}
                              border="1px solid"
                              borderColor="white"
                              bg="white"
                              _placeholder={{ color: '#BABABA' }}
                              color="#9e9d9d"
                              _focus=""
                              _hover=""
                            />
                          </FormControl>
                          <Button
                            id="signupFooter"
                            type="submit"
                            w={{
                              base: 'full',
                              md: 'auto',
                            }}
                            fontSize="sm"
                            px="12"
                            roundedStart={{
                              md: '0',
                            }}
                            bg="#5A3074"
                            color="white"
                            fontWeight="bold"
                            transition='all 0.4s'
                            letterSpacing="wide"
                            _hover={{ px: "75px" }}
                            isLoading={loading}
                            loadingText="Working magic.."
                          >

                            <Text>Sign Up</Text>

                          </Button>

                        </Box>
                        <Box textAlign="left" w="100%">
                          <Text id="formResponseFooter" fontSize="lg" fontStyle="italic" color="white" mt="2">
                            Sign up here to get early access!
                          </Text>
                        </Box>
                      </Box>
                    </Form>
                  </Formik>
                </Box>
              </FadeIn>}

              {
                submitted &&
                <Box transition='all 0.1s' bg='#ADA7F1' rounded='md' p={2}>
                  <Text fontSize="xl" fontWeight='bold' color="white" >
                    Thanks! We&apos;ll see you soon 👋
                  </Text>

                  <Text color='white' fontWeight='bold' >
                    In the meantime, feel free to share Verste with your friends!
                  </Text>
                </Box>
              }
            </Box>

          </Flex>
        </Box>

        <Box>
          <Img src='/books.png' h='100vh' w='100%' objectFit="cover" d={{ base: 'none', lg: 'block' }} />

        </Box>
      </SimpleGrid >
    </>
  )
}
