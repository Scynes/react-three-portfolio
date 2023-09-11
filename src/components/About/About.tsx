import { Box, Card, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

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
        <>
            <Box as={ motion.div }>
                <Text>INTRODUCTION</Text>
                <Heading size={ { base: '2xl', md: '3xl' } }>Overview.</Heading>
            </Box>
            <Text as={ motion.p }>
                Hey there! I'm absolutely stoked about coding and I'm on the lookout for a place where I can dive into some serious development action. TypeScript and JavaScript are like music to my ears, though I've also got a solid grasp of Python and Java. When it comes to frameworks, I'm your go-to person for React, SvelteKit, Django, and Node. Let's team up and start turning those brilliant ideas into functional, user-friendly solutions!
            </Text>
            <Flex wrap={ 'wrap' } gap={ '10' } justifyContent={ 'center' }>
            { services.map((service, index) => (
                <Tilt key={ index }>
                    <Box padding={ '2px' } rounded={ '2xl' } bgGradient={ 'linear(to-b, #804dee, #0073FF)' }>
                        <Card width={ '14rem' } height={ '17rem' } boxShadow={ 'dark-lg' } rounded={ '2xl' }>
                            <Center height={ 'full' } flexDirection={ 'column' } gap={ '2rem' }>
                                    <Image src={ `/icons/${service.icon}-icon.png` } />
                                    <Text fontWeight={ 'bold' } fontSize={ '2xl' } maxW={ '8rem' } textAlign={ 'center' }>{ service.title }</Text>
                            </Center>
                        </Card>
                    </Box>
                </Tilt>
            ))}
            </Flex>
        </>
    );
}

export default About;