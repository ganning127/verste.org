import {
    Box, Text, List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
import { MdVolunteerActivism, MdWork, MdOutlineSummarize } from 'react-icons/md'
import { RiCommunityFill } from 'react-icons/ri'
import { IoFootstepsSharp } from 'react-icons/io'
import { BsBookHalf } from 'react-icons/bs'
import { FaPhotoVideo } from 'react-icons/fa'
export const Benefits = ({ content }) => {
    let items;
    if (content === 'contribute') {
        items = [
            {
                icon: MdVolunteerActivism,
                text: 'Earn volunteer hours',
            },
            {
                icon: RiCommunityFill,
                text: 'Get involved in community',
            },
            {
                icon: IoFootstepsSharp,
                text: 'Make a difference',
            },
            {
                icon: MdWork,
                text: 'Gain real-world work experience',
            }
        ]
    }
    else {
        items = [
            {
                icon: BsBookHalf,
                text: 'Read translated books',
            },
            {
                icon: FaPhotoVideo,
                text: 'View accurately captioned videos',
            },
            {
                icon: MdOutlineSummarize,
                text: 'Read long texts that have been simplified',
            }
        ]
    }


    return (
        <Box color="brand.white">
            <Text fontSize='lg' fontWeight='semibold'>
                By joining Verste, you&apos;ll be able to:
            </Text>
            <UnorderedList mt={1} fontWeight='semibold'>
                {items.map((item, index) => (
                    <ListItem key={index} fontSize='lg'>
                        <ListIcon as={item.icon} d='inline' />
                        <Text d='inline'>{item.text}</Text>
                    </ListItem>
                )
                )}
            </UnorderedList>

        </Box>
    )
}