import { Box, Flex } from '@chakra-ui/react';
import SectionHeading from '@components/SectionHeading';
import withSectionWrapper from '@hoc/withSectionWrapper';
import { stagger } from '@utils/motion';
import { motion } from 'framer-motion';

import ProjectsData from '@assets/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {

    return (
        <>
            <Box as={ motion.section } variants={ stagger() } initial={ 'hidden' } whileInView={ 'show' } viewport={ { once: true, amount: 0.25 } } marginX={ 'auto' } maxWidth={ '6xl' } overflow={ 'hidden' }>
                <SectionHeading label={ "WHAT I'VE MADE" } heading={ 'Projects.' } />
            </Box>
            <Flex wrap={ 'wrap' } justifyContent={ 'space-between' } gap={ 10 } marginTop={ '3rem' }>
                { ProjectsData.map((project, index) => (
                    <ProjectCard key={ index } { ...project } />
                )) }
            </Flex>
        </>
    );
}

export default withSectionWrapper(Projects, 'projects');