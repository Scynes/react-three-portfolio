import { Box, Circle, Flex, Heading, Highlight, Text, VStack } from '@chakra-ui/react';

const Hero = () => {
    return (
        <Box height={ 'calc(100vh)' } padding={ { base: '7rem 0 0 2rem', md: '9rem 0 0 4rem' } }>
            <Flex gap={ '1rem' } bgSize={ 'cover' } bgPosition={ 'center' } bgRepeat={ 'no-repeat' }>
                <VStack gap={0}>
                    <Circle size={ 5 } bg={ '#804dee' } />
                    <Box width={ 1 } height={ { base: 60, md: '18rem' } } bgGradient={ 'linear(to-b, #804dee 0%, rgba(60, 51, 80, 0) 100%)' }/>
                </VStack>
                <VStack gap={ '2rem' } alignItems={ 'flex-start' }>
                    <Heading as={ 'h1' } size={ { base: '2xl', md: '3xl' } }>
                        <Highlight query={ 'Dustin' } styles={ { color: 'white', rounded: 'full', paddingX: '1rem', paddingY: '0.5rem', bg: '#804dee'} }>
                            Sup, I'm Dustin
                        </Highlight>
                    </Heading>
                    <Text maxWidth={ 'sm' } fontSize={ '2xl' }>
                        I craft exceptional digital experiences with a focus on innovative creativity.
                    </Text>
                </VStack>
            </Flex>
        </Box>
    );
}

export default Hero;