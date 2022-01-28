import { Box, Link, Text } from '@chakra-ui/react'

export const Contact = () => {
    return (
        <Box>
            <Text fontSize='lg' fontWeight='semibold'>
                We&apos;d love to hear from you! Send us an email at <Link href="mailto:versteteam@gmail.com" bg='brandLight.blue' p={1} rounded='md' color='brandLight.white' _hover={{ color: 'brandLight.lightYellow' }}>versteteam@gmail.com</Link>, and we&apos;ll get back to you as soon as we can.
            </Text>

        </Box>
    )
}
