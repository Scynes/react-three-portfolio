import { Box, Card as ChakraCard, Center, Image, Text } from '@chakra-ui/react';

import { fadeIn } from '@utils/motion';
import { motion } from 'framer-motion';

import Tilt from 'react-parallax-tilt';

interface Properties {
    slot: number,
    icon: string,
    title: string
}

const Card  = ( { slot, icon, title }: Properties ) => {
    return (
        <Box as={ Tilt } width={ 'full' } maxWidth={ { base: 'full', sm: '240px', md: '240px' } } key={ slot } tiltReverse={ true }>
        <Box as={ motion.div } variants={ fadeIn('right', 'spring', slot * 0.5, 0.75 ) } padding={ '2px' } rounded={ '2xl' } bgGradient={ 'linear(to-b, #804dee, #0073FF)' }>
            <ChakraCard height={ '17rem' } boxShadow={ 'dark-lg' } rounded={ '2xl' }>
                <Center height={ 'full' } flexDirection={ 'column' } gap={ '2rem' }>
                    <Image src={ `/icons/${icon}-icon.png` } />
                    <Text fontWeight={ 'bold' } fontSize={ '3xl' } maxW={ '9rem' } textAlign={ 'center' }>{ title }</Text>
                </Center>
            </ChakraCard>
        </Box>
    </Box>
    );
}

export default Card;