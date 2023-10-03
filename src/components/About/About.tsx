import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import withSectionWrapper from '@hoc/withSectionWrapper';
import { textDrop } from '@utils/motion';
import Card from './Card';
import SectionHeading from '@components/SectionHeading';

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
                <SectionHeading label={ 'INTRODUCTION' } heading={ 'Overview.' } />
                <Text as={ motion.p } variants={ textDrop(0.5) } maxWidth={ '3xl' } marginTop={ '2rem' }>
                    Hello! I'm pumped about coding and ready to dive into some serious development work. TypeScript and JavaScript are my jam, but I also have a strong grasp of Python and Java. When it comes to frameworks, I'm your person for React, SvelteKit, Django, and many others. Let's partner up and turn those fantastic ideas into user-friendly solutions!
                </Text>
            </Box>
            { services.map((service, index) => (
                <Card key={ index } slot={ index } icon={ service.icon } title={ service.title } />
            ))}
        </Flex>
    );
}

export default withSectionWrapper(About, 'm');