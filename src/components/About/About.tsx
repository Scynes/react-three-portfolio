import { Box, Card, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import withSectionWrapper from '@hoc/withSectionWrapper';
import { fadeIn, textDrop } from '@utils/motion';

interface Service {
    icon: string,
    title: string,
}

const services: Service[] = [
    {
        icon: 'internet',
        title: 'Web Developer'
    },
    {
        icon: 'frontend',
        title: 'Fontend Developer'
    },
    {
        icon: 'backend',
        title: 'Backend Developer'
    },
    {
        icon: 'mobile',
        title: 'Native Developer'
    }
]

const About = () => {

    return (
        <Flex wrap={ 'wrap' } gap={ '10' }>
            <Box width={ 'full' }>
                <Box as={ motion.div } variants={ fadeIn('left', 'spring', 0, 0.75 ) }>
                    <Text>INTRODUCTION</Text>
                    <Heading size={ { base: '2xl', md: '3xl' } } marginTop={ '0.5rem' }>Overview.</Heading>
                </Box>
                <Text as={ motion.p } variants={ textDrop(0.5) } maxWidth={ '3xl' } marginTop={ '2rem' }>
                    Hello! I'm pumped about coding and ready to dive into some serious development work. TypeScript and JavaScript are my jam, but I also have a strong grasp of Python and Java. When it comes to frameworks, I'm your person for React, SvelteKit, Django, and many others. Let's partner up and turn those fantastic ideas into user-friendly solutions!
                </Text>
            </Box>
            { services.map((service, index) => (
                <Box as={ Tilt } width={ 'full' } maxWidth={ { base: 'full', sm: '240px', md: '240px' } } key={ index } scale={1.1} tiltReverse={ true }>
                    <Box as={ motion.div } variants={ fadeIn('right', 'spring', index * 0.5, 0.75 ) } padding={ '2px' } rounded={ '2xl' } bgGradient={ 'linear(to-b, #804dee, #0073FF)' }>
                        <Card height={ '17rem' } boxShadow={ 'dark-lg' } rounded={ '2xl' }>
                            <Center height={ 'full' } flexDirection={ 'column' } gap={ '2rem' }>
                                <Image src={ `/icons/${service.icon}-icon.png` } />
                                <Text fontWeight={ 'bold' } fontSize={ '3xl' } maxW={ '9rem' } textAlign={ 'center' }>{ service.title }</Text>
                            </Center>
                        </Card>
                    </Box>
                </Box>
            ))}
        </Flex>
    );
}

export default withSectionWrapper(About, 'm');