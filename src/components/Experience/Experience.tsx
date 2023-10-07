import { VerticalTimeline }  from 'react-vertical-timeline-component';
import { Box } from '@chakra-ui/react';

import SectionHeading from '@components/SectionHeading';
import withSectionWrapper from '@hoc/withSectionWrapper';
import TimelineElement from './TimelineElement';
import ExperienceData from '@assets/experience.json';
import { motion } from 'framer-motion';
import { stagger } from '@utils/motion';

const Experience = () => {

    return (
        <>
            <Box as={ motion.section } variants={ stagger() } initial={ 'hidden' } whileInView={ 'show' } viewport={ { once: true, amount: 0.25 } } marginX={ 'auto' } maxWidth={ '6xl' } overflow={ 'hidden' }>
                <SectionHeading label={ "WHAT I'VE DONE" } heading={ 'Experience.' } />
            </Box>
            <Box marginTop={ '2rem' }>
                <VerticalTimeline>
                    { ExperienceData.map((experience, index) => (
                        <TimelineElement key={ index } {...experience} />
                    )) }
                </VerticalTimeline>
            </Box>
        </>
    );
}

export default withSectionWrapper(Experience, 'experience');