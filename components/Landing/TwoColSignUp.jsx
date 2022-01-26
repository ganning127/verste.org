import { SimpleGrid, Heading, Link, Input, FormControl, Text, Box, Img, Flex, chakra, Button, Tabs, TabList, TabPanels, Tab, TabPanel, ScaleFade } from "@chakra-ui/react"
import { FadeIn } from '../animations/FadeIn'
import { Formik, Form } from "formik";
import React, { useState } from "react"

export const TwoColSignUp = ({ title1, title2, title3, desc1, desc2, sheet, pic, tabs, tabsContent }) => {
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    let gradient;

    if (sheet === 'general') {
        gradient = 'linear(to-r, brand.blue.deep, brand.blue.dark)'
    }
    else {
        gradient = 'linear(to-r, brand.black, brand.blue.deep)'
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


    return (
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={0} bgGradient={gradient} bgRepeat="repeat" bgSize="cover" minH='100vh'>
            <Box textAlign={{ base: 'center', lg: 'left' }} p={4} >

                <Link href="/" >
                    <FadeIn delay={0.2}>
                        <Heading color="brand.white" fontSize="4xl" fontWeight='black' d='inline' transition='all 0.4s' _hover={{ color: 'brand.gold' }}>Verste</Heading>
                        {sheet == 'contribute' && <Heading color="brand.gold" fontSize="4xl" fontWeight='black' d='inline'> Contributor</Heading>}
                    </FadeIn>
                </Link>


                <Flex alignItems="center" maxW='700px' mx='auto' minH='80vh' mt={16}  >
                    <Box>
                        <Box>
                            <FadeIn delay={0.6}>
                                {sheet == "general" && (
                                    <Text fontWeight='bold' color='brand.white' fontSize='lg'> Want to contribute? <Link href='/contribute' bg='brand.gray' _hover={{ color: 'brand.gold' }} p={1} rounded='md'>Join our team</Link>!</Text>
                                )}

                                {sheet == "contribute" && (
                                    <Text fontWeight='bold' color='brand.white' fontSize='lg'>Want to join as a reader? <Link href='/' bg='brand.blue' _hover={{ color: 'brand.gold' }} p={1} rounded='md'>click here</Link>!</Text>
                                )}
                            </FadeIn>
                        </Box>

                        <FadeIn delay={1.0}>
                            <Text fontSize={{ base: '4xl', md: '5xl' }} color='brand.white' fontWeight='bold'>
                                <chakra.span >{title1}</chakra.span> <chakra.span transition='all 0.2s' color="#ffc020">{title2}</chakra.span> <chakra.span> {title3}</chakra.span>
                            </Text>
                        </FadeIn>


                        <FadeIn delay={1.4}>
                            <Text color="brand.white" fontSize='2xl' maxW='600px' fontWeight="semibold" my={3}>
                                {desc1}
                            </Text>
                        </FadeIn>

                        <FadeIn delay={1.8}>
                            <Tabs size='md' variant='unstyled' mt={10} color='brand.white'>
                                <TabList justifyContent={{ base: 'center', lg: "start" }}>
                                    {
                                        tabs.map((tab, i) => {
                                            return (
                                                <Tab fontWeight="bold" _selected={{ bg: 'brand.gray', color: 'brand.gold' }} _focus={{}} rounded='md' fontSize='lg' key={i}>{tab}</Tab>
                                            )
                                        })
                                    }
                                </TabList>
                                <TabPanels mt={3} ml={3}>
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
                        </FadeIn>


                        {!submitted && <FadeIn delay={2.2}>
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
                                                    bg="brand.blue.dark"
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
                                            <Box textAlign={{ base: 'center', lg: 'left' }} w="100%">
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
                            <Box transition='all 0.1s' bg='brand.blue.dark' rounded='md' p={2} mt="10">
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

            <Box minH='100vh' bgImage={`url('${pic}')`} bgSize='cover' bgRepeat='no-repeat' d={{ base: 'none', lg: 'block' }} bgPos='center' />
        </SimpleGrid >)
}