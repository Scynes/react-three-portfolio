import SectionHeading from '@components/SectionHeading';
import withSectionWrapper from '@hoc/withSectionWrapper';
import Ball from './Ball';
import { Box, Flex, Image, Tag } from '@chakra-ui/react';
import { isAndroid } from 'react-device-detect';

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
                { !isAndroid ?
                    <Flex gap={ '2rem' } wrap={ 'wrap' } justifyContent={ 'center' } maxWidth={ '3xl' }>          
                        { TECH.map((tech, index) => (
                            <Box key={ index } boxSize={20}>
                                <Ball icon={ tech } />
                            </Box>
                        )) }
                    </Flex>
                : 
                    <Flex width={ 'full' } wrap={ 'wrap' } gap={ '1rem' } justifyContent={'center'}>
                        { TECH.map((tech, index) => (
                            <Tag padding={ '0.5rem' } key={ index } size={ 'lg' } variant={ 'solid' } colorScheme={ 'purple' }>
                                <Image boxSize={ '2rem' } src={ `/icons/technology/${ tech }.png` } />
                            </Tag>
                        )) }
                    </Flex>
                }
            </Flex>
        </>
    );
}

export default withSectionWrapper(Technology, 'technology');