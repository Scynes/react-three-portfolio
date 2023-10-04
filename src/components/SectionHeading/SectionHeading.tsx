import { Box, Text, Heading } from '@chakra-ui/react';

import { fadeIn } from '@utils/motion';
import { motion } from 'framer-motion';

/**
 * Interface representing the properties of the { SectionHeading } component.
 */
interface Properties {
    // The label of the section
    label: string,
    // The header of the section.
    heading: string
}

/**
 * A heading component used for the shared labeling of page sections.
 * 
 * @param label The label of the section.
 * @param heading The header of the section.
 */
const SectionHeading = ( { label, heading }: Properties ) => {
    return (
        <Box as={ motion.div } variants={ fadeIn('left', 'spring', 0, 0.75 ) }>
            <Text>{ label }</Text>
            <Heading size={ { base: '2xl', md: '3xl' } } marginTop={ '0.5rem' }>{ heading }</Heading>
        </Box>
    );
}

export default SectionHeading;