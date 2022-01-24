import { SimpleGrid, Heading, Link, Input, FormControl, Text, Box, Img, Flex, chakra, Button, useDisclosure, ScaleFade } from "@chakra-ui/react"
import { FadeIn } from '../animations/FadeIn'
import { Formik, Form } from "formik";
import React, { useState } from "react"

export const TwoColSignUp = ({ title1, title2, title3, desc1, desc2, sheet, pic }) => {
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)


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
        <Box bgImage="url('/purple_grad.png')" bgRepeat="repat" bgSize="cover" h='100vh' p={4}>
            <FadeIn delay={0.2}>
                <Link href="/" _hover={{ scale: 1.1 }}>
                    <Heading color="white" fontSize="4xl" fontWeight='black' d='inline'>Verste</Heading>
                    {sheet == 'contribute' && <Heading color="#FFF280" fontSize="4xl" fontWeight='black' d='inline'> Contributor</Heading>}
                </Link>
            </FadeIn>

            <Flex height='90vh' alignItems="center" maxW='700px' mx='auto'>
                <Box>
                    <FadeIn delay={0.8}>
                        <Text fontSize='5xl' color='white' fontWeight='bold' noOfLines={1}>
                            <chakra.span _hover={{ color: '#7ef3f7' }} transition='all 0.2s'>{title1}</chakra.span> <chakra.span _hover={{ color: '#7ef3f7' }} transition='all 0.2s' color="#FFF280">{title2}</chakra.span> <chakra.span _hover={{ color: '#7ef3f7' }} transition='all 0.2s'> {title3}</chakra.span>.
                        </Text>
                    </FadeIn>


                    <FadeIn delay={1.2}>
                        <Text color="white" fontSize='xl' maxW='600px' fontWeight="semibold" my={3}>
                            {desc1}
                        </Text>
                    </FadeIn>

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

                    <Box mt="10">
                        <FadeIn delay={1.8}>
                            {sheet == "general" && (
                                <Text fontWeight='bold' color='white' fontSize='lg'> To join as a contributor, <Link href='/contribute' bg='whiteAlpha.300' _hover={{ bg: 'whiteAlpha.500' }} p={1} rounded='md'>click here</Link>!</Text>
                            )}

                            {sheet == "contribute" && (
                                <Text fontWeight='bold' color='white' fontSize='lg'> To join as a reader, <Link href='/' bg='whiteAlpha.300' _hover={{ bg: 'whiteAlpha.500' }} p={1} rounded='md'>click here</Link>!</Text>
                            )}
                        </FadeIn>
                    </Box>

                    <ScaleFade in={submitted} initialScale={0.1}>
                        <Box transition='all 0.1s' bg='#ADA7F1' rounded='md' p={2}>
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