import { VerticalTimeline }  from 'react-vertical-timeline-component';
import { Box } from '@chakra-ui/react';

import SectionHeading from '@components/SectionHeading';
import withSectionWrapper from '@hoc/withSectionWrapper';
import TimelineElement from './TimelineElement';
import ExperienceData from '@assets/experience.json';

const Experience = () => {


    return (
        <>
            <SectionHeading label={ "WHAT I'VE DONE" } heading={ 'Experience.' } />
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