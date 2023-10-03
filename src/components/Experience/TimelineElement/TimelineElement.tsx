import { Button, HStack, Heading, ListItem, Tag, Text, UnorderedList } from '@chakra-ui/react';
import { VerticalTimelineElement, VerticalTimelineElementProps } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

interface TimelineProperties extends VerticalTimelineElementProps {

    // Represents the title of the timeline section.
    title: string

    // Represents the background color of the icon badge.
    iconBGColor: string

    // Represents the technology stack names.
    technology?: string[]

    // Represents the general description.
    description: string

    // Represents the details of the timeline event.
    details?: string[]
}

const TimelineElement: React.FC<TimelineProperties> = ({title, technology, iconBGColor, description, details, ...VTProps }) => {
    
    return (
        <VerticalTimelineElement { ...VTProps } iconStyle={ { backgroundColor: iconBGColor } } contentStyle={ { backgroundColor: '#452380' } }>
            <Heading as={ 'h1' } size={ 'xl' } textColor={ 'white' } marginBottom={ '0.5rem' }>{ title }</Heading>
            <HStack wrap={ 'wrap' }>
                { technology?.map((tech, index) => (
                    <Tag key={ index } variant={ 'solid' } colorScheme={ 'purple' }>{ tech }</Tag>
                )) }
            </HStack>
            <Text color={ 'whiteAlpha.700' }>{ description }</Text>
            <UnorderedList>
                { details?.map((detail, index) => (
                    <ListItem key={ index }>{ detail }</ListItem>
                )) }
            </UnorderedList>
            <Button colorScheme={ 'purple' } variant={ 'outline' } marginTop={ '1rem' }>Visit Website</Button>
        </VerticalTimelineElement>
    );
}

export default TimelineElement;