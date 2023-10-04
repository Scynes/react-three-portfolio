import SectionHeading from '@components/SectionHeading';
import withSectionWrapper from '@hoc/withSectionWrapper';
import Ball from './Ball';
import { Box, Flex } from '@chakra-ui/react';

const TECH = [
    'angular',
    'chakra',
    'css',
    'django',
    'express',
    'firebase',
    'html',
    'javascript',
    'mongo',
    'node',
    'psql',
    'python',
    'react',
    'svelte',
    'typescript',
    'vue'
]

const Technology = () => {

    return (
        <>
            <SectionHeading label={ 'WHAT I USE' } heading={ 'Technology.' } />
            <Flex justifyContent={ 'center' } marginTop={ '3rem' }>
                <Flex gap={ '2rem' } wrap={ 'wrap' } justifyContent={ 'center' } maxWidth={ '3xl' }>          
                    { TECH.map((tech, index) => (
                        <Box boxSize={20}>
                            <Ball key={ index } icon={ tech } />
                        </Box>
                    )) }
                </Flex>
            </Flex>
        </>
    );
}

export default withSectionWrapper(Technology, 'technology');