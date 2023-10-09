import { Box, Circle, Flex, Heading, Highlight, Text, VStack } from '@chakra-ui/react';

import BackgroundImage from '@assets/images/hero-bg.svg';
import { useEffect, useState } from 'react';
import TextRoll from '@components/About/TextRoll';

const Hero = () => {

    const GREETINGS = [ 'Hello!', 'Ciao!', 'Hola!', '你好!', 'नमस्ते!' ];

    const [ currentGreetingIndex, setCurrentGreetingIndex ] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentGreetingIndex((previousIndex) => ( previousIndex + 1 ) % GREETINGS.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box height={ 'calc(100vh)' } position={ 'relative' } bgImage={ BackgroundImage } bgSize={ 'cover' } bgRepeat={ 'no-repeat' }>
            <Flex justifyContent={ 'center' } alignItems={ 'center' } height={ 'full' } padding={ '1rem' } >
                <Flex gap={ '1rem' }>
                    <VStack gap={0}>
                        <Circle size={ 5 } bg={ '#804dee' } />
                        <Box width={ 1 } height={ { base: 60, md: '18rem' } } bgGradient={ 'linear(to-b, #804dee 0%, rgba(60, 51, 80, 0) 100%)' }/>
                    </VStack>
                    <VStack gap={ '2rem' } alignItems={ 'flex-start' }>
                        <Flex wrap={ 'wrap' }>
                            <Heading as={ 'h1' } fontSize={ 'clamp(2.5rem, 5rem, 8vw)' } width={ { base: '6rem', md: '15rem' } }>
                                <TextRoll greeting={ GREETINGS[currentGreetingIndex] } />
                            </Heading>
                            <Heading as={ 'h1' } fontSize={ 'clamp(2.5rem, 5rem, 8vw)' }>
                                <Highlight query={ 'Dustin' } styles={ { color: 'white', rounded: 'full', paddingX: '1rem', paddingY: '0.5rem', bg: '#804dee'} }>
                                    I'm Dustin.
                                </Highlight>
                            </Heading>
                        </Flex>
                        <Text maxWidth={ 'lg' } fontSize={ 'clamp(1.5rem, 2rem, 4vw)' }>
                            I craft exceptional digital experiences with a focus on innovative creativity.
                        </Text>
                    </VStack>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Hero;