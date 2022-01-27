import { Box, Link, Form, FormControl, Input, Text } from '@chakra-ui/react'

export const Contact = () => {
    return (
        <Box>
            <Text fontSize='lg' fontWeight='semibold'>
                We&apos;d love to hear from you! Send us an email at <Link href="mailto:versteteam@gmail.com" bg='brandLight.lightYellow' p={1} rounded='md' color='brandLight.gray' _hover={{ color: 'brandLight.lightBlue' }}>versteteam@gmail.com</Link>, and we&apos;ll get back to you as soon as we can.
            </Text>

        </Box>
    )
}
