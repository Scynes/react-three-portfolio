import { Box, Circle, Flex, Heading, Highlight, Text, VStack } from '@chakra-ui/react';

import BackgroundImage from '@assets/images/hero-bg.svg';

const Hero = () => {
    return (
        <Box height={ 'calc(100vh)' } position={ 'relative' } bgImage={ BackgroundImage } bgSize={ 'cover' } bgRepeat={ 'no-repeat' }>
            <Flex justifyContent={ 'center' } alignItems={ 'center' } height={ 'full' } padding={ '1rem' } >
                <Flex gap={ '1rem' }>
                    <VStack gap={0}>
                        <Circle size={ 5 } bg={ '#804dee' } />
                        <Box width={ 1 } height={ { base: 60, md: '18rem' } } bgGradient={ 'linear(to-b, #804dee 0%, rgba(60, 51, 80, 0) 100%)' }/>
                    </VStack>
                    <VStack gap={ '2rem' } alignItems={ 'flex-start' }>
                        <Heading as={ 'h1' } fontSize={ 'clamp(2.5rem, 6rem, 8vw)' }>
                            <Highlight query={ 'Dustin' } styles={ { color: 'white', rounded: 'full', paddingX: '1rem', paddingY: '0.5rem', bg: '#804dee'} }>
                                Sup, I'm Dustin
                            </Highlight>
                        </Heading>
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