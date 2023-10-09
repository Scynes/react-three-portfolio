import { Box, Flex, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
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
            <Tabs position={ 'relative' } variant={ 'unstyled' }>
                <TabList>
                    <Tab>⭐</Tab>
                    <Tab>All</Tab>
                    <Tab>React</Tab>
                    <Tab>Other</Tab>
                </TabList>
                <TabIndicator marginTop={ '-1.5px' } height={ '2px' } bg={ 'purple.500' } borderRadius={ '1px' } />
                <TabPanels>
                    <TabPanel>
                        <Flex wrap={ 'wrap' } justifyContent={ 'space-between' } gap={ 10 } marginTop={ '3rem' }>
                            { ProjectsData.filter((filter) => filter.technology.includes('⭐')).map((project, index) => (
                                <ProjectCard key={ index } { ...project } />
                            )) }
                        </Flex> 
                    </TabPanel>
                    <TabPanel>
                        <Flex wrap={ 'wrap' } justifyContent={ 'space-between' } gap={ 10 } marginTop={ '3rem' }>
                            { ProjectsData.map((project, index) => (
                                <ProjectCard key={ index } { ...project } />
                            )) }
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex wrap={ 'wrap' } justifyContent={ 'space-between' } gap={ 10 } marginTop={ '3rem' }>
                            { ProjectsData.filter((filter) => filter.technology.includes('React')).map((project, index) => (
                                <ProjectCard key={ index } { ...project } />
                            )) }
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex wrap={ 'wrap' } justifyContent={ 'space-between' } gap={ 10 } marginTop={ '3rem' }>
                            { ProjectsData.filter((filter) => filter.technology.includes('Other')).map((project, index) => (
                                <ProjectCard key={ index } { ...project } />
                            )) }
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
}

export default withSectionWrapper(Projects, 'projects');