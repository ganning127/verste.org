import { SimpleGrid, Heading, Link, Input, FormControl, Text, Box, Img, Flex, chakra, Button, Tabs, TabList, TabPanels, Tab, TabPanel, ScaleFade } from "@chakra-ui/react"
import { FadeIn } from '../animations/FadeIn'
import { Formik, Form } from "formik";
import React, { useState } from "react"

export const TwoColSignUp = ({ title1, title2, title3, desc1, desc2, sheet, pic, tabs, tabsContent }) => {
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    let gradient;

    if (sheet === 'general') {
        gradient = 'linear(to-r, brand.darkerPurple, pink.700)'
    }
    else {
        gradient = 'linear(to-r, brand.darkerPurple, brand.darkBlue)'
    }


    const subscribeEmail = async event => {
        event.preventDefault();
        let email = document.getElementById('emailFooter').value;

        setLoading(true);
        console.log(`Subscribing ${email} to newsletter...`)

        const res = await fetch(`/api/subscribe`,
            {
                body: JSON.stringify({
                    email: email,
                    sheetType: sheet
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


    return (<SimpleGrid columns={{ base: 1, lg: 2 }} h="100vh" spacing={0}>
        <Box bgGradient={gradient} bgRepeat="repat" bgSize="cover" h='100vh' p={4} textAlign={{ base: 'center', lg: 'left' }}>
            <FadeIn delay={0.2}>
                <Link href="/" _hover={{ scale: 1.1 }}>
                    <Heading color="brand.white" fontSize="4xl" fontWeight='black' d='inline'>Verste</Heading>
                    {sheet == 'contribute' && <Heading color="brand.lightYellow" fontSize="4xl" fontWeight='black' d='inline'> Contributor</Heading>}
                </Link>
            </FadeIn>

            <Flex height='90vh' alignItems="center" maxW='700px' mx='auto'>


                <Box>

                    <Box mt="0">
                        <FadeIn delay={1.6}>
                            {sheet == "general" && (
                                <Text fontWeight='bold' color='white' fontSize='lg'> Want to join our team? <Link href='/contribute' bg='whiteAlpha.300' _hover={{ bg: 'whiteAlpha.500' }} p={1} rounded='md'>click here</Link>!</Text>
                            )}

                            {sheet == "contribute" && (
                                <Text fontWeight='bold' color='white' fontSize='lg'> Want to join as a reader? <Link href='/' bg='whiteAlpha.300' _hover={{ bg: 'whiteAlpha.500' }} p={1} rounded='md'>click here</Link>!</Text>
                            )}
                        </FadeIn>
                    </Box>

                    <FadeIn delay={0.8}>
                        <Text fontSize={{ base: '4xl', md: '5xl' }} color='brand.white' fontWeight='bold'>
                            <chakra.span _hover={{ color: 'brand.lightPurple' }} transition='all 0.2s'>{title1}</chakra.span> <chakra.span _hover={{ color: 'brand.lightPurple' }} transition='all 0.2s' color="brand.lightYellow">{title2}</chakra.span> <chakra.span _hover={{ color: 'brand.lightPurple' }} transition='all 0.2s'> {title3}</chakra.span>
                        </Text>
                    </FadeIn>


                    <FadeIn delay={1.2}>
                        <Text color="brand.white" fontSize='xl' maxW='600px' fontWeight="semibold" my={3}>
                            {desc1}
                        </Text>
                    </FadeIn>


                    <Tabs size='md' variant='unstyled' mt={10} color='brand.white'>
                        <TabList justifyContent={{ base: 'center', lg: "start" }}>
                            {
                                tabs.map((tab, i) => {
                                    return (
                                        <Tab fontWeight="bold" _selected={{ bg: 'brand.lightPurple' }} rounded='md' fontSize='lg' key={i}>{tab}</Tab>
                                    )
                                })
                            }
                        </TabList>
                        <TabPanels mt={1}>
                            {
                                tabsContent.map((content, i) => {
                                    return (
                                        <TabPanel key={i} p={0}>
                                            {content}
                                        </TabPanel>
                                    )
                                })
                            }
                        </TabPanels>
                    </Tabs>


                    {!submitted && <FadeIn delay={2.0}>
                        <Box mt={10}>
                            <Formik>
                                <Form onSubmit={subscribeEmail}>
                                    <Box>
                                        <Box
                                            display={{
                                                md: 'flex',
                                            }}
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
                                                    placeholder="Email"
                                                    type="email"
                                                    letterSpacing={1}
                                                    border="1px solid"
                                                    borderColor="white"
                                                    bg="white"
                                                    _placeholder={{ color: '#BABABA' }}
                                                    color="#9e9d9d"
                                                    _focus=""
                                                    _hover=""
                                                    fontSize='lg'
                                                    shadow='lg'
                                                />
                                            </FormControl>
                                            <Button
                                                id="signupFooter"
                                                type="submit"
                                                shadow='lg'
                                                w={{
                                                    base: 'full',
                                                    md: 'auto',
                                                }}
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
                                                fontSize='lg'
                                            >

                                                <Text>Sign Up</Text>
                                            </Button>

                                        </Box>
                                        <Box textAlign="left" w="100%">
                                            <Text id="formResponseFooter" fontSize="lg" color="white" mt={3} fontWeight='bold'>
                                                {desc2}
                                            </Text>
                                        </Box>
                                    </Box>
                                </Form>
                            </Formik>
                        </Box>
                    </FadeIn>}



                    <ScaleFade in={submitted} initialScale={0.1}>
                        <Box transition='all 0.1s' bg='brand.lightPurple' rounded='md' p={2} mt="3">
                            <Text fontSize="xl" fontWeight='bold' color="white" >
                                Thanks! We&apos;ll see you soon 👋
                            </Text>

                            <Text color='white' fontWeight='bold' >
                                In the meantime, feel free to share Verste with your friends!
                            </Text>
                        </Box>
                    </ScaleFade>




                </Box>

            </Flex>
        </Box >

        <Box>
            <Img src={pic} h='100vh' w='100%' objectFit="cover" d={{ base: 'none', lg: 'block' }} />
        </Box>
    </SimpleGrid >)
}