import { Box, Text, chakra } from '@chakra-ui/react'

export const About = () => {
    return (
        <Box>
            <Text fontSize='lg' fontWeight='semibold'>
                Have you ever read a research paper but didn&apos;t  understand it? Verste is here to change that. We&apos;re an open source platform where experienced scholars volunteer their time to simplify academic-heavy research in areas ranging from <chakra.span color='brandLight.lightYellow'>computer science</chakra.span> to <chakra.span color='brandLight.lightYellow'>biology</chakra.span> and <chakra.span color='brandLight.lightYellow'>economics</chakra.span> into easy-to-comprehend versions.
            </Text>
        </Box>
    )
}
