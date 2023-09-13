import { Box, Text, Heading } from '@chakra-ui/react';

import { fadeIn } from '@utils/motion';
import { motion } from 'framer-motion';

interface Properties {
    label: string,
    heading: string
}

const SectionHeading = ( { label, heading }: Properties ) => {
    return (
        <Box as={ motion.div } variants={ fadeIn('left', 'spring', 0, 0.75 ) }>
            <Text>{ label }</Text>
            <Heading size={ { base: '2xl', md: '3xl' } } marginTop={ '0.5rem' }>{ heading }</Heading>
        </Box>
    );
}

export default SectionHeading;