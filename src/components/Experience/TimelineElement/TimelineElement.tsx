import { Button, HStack, Heading, ListItem, Tag, Text, UnorderedList } from '@chakra-ui/react';
import { VerticalTimelineElement, VerticalTimelineElementProps } from 'react-vertical-timeline-component';

import { FaReact } from 'react-icons/fa6';
import { IoLogoIonic, IoSchool } from 'react-icons/io5';
import { SiSvelte } from 'react-icons/si';
import { BsBriefcaseFill } from 'react-icons/bs';

import 'react-vertical-timeline-component/style.min.css';
import { Link } from 'react-router-dom';

const ICONS: { [ key: string] : JSX.Element } = {
    react: <FaReact />,
    ionic: <IoLogoIonic />,
    svelte: <SiSvelte />,
    education: <IoSchool />,
    work: <BsBriefcaseFill />
}

interface TimelineProperties extends VerticalTimelineElementProps {

    // Represents the title of the timeline section.
    title: string

    // Represents the icon name.
    icon: string

    iconColor: string

    // Represents the background color of the icon badge.
    iconBGColor: string

    // Represents the technology stack names.
    technology?: string[]

    // Represents the general description.
    description: string

    // Represents the details of the timeline event.
    details?: string[],

    // Represents the link to the website.
    link: string
}

const TimelineElement: React.FC<TimelineProperties> = ({title, technology, iconColor, iconBGColor, description, details, link, icon, ...VTProps }) => {
    
    return (
        <VerticalTimelineElement { ...VTProps } icon={ ICONS[ icon ] } iconStyle={ { backgroundColor: iconBGColor, color: iconColor } } contentStyle={ { backgroundColor: '#452380' } }>
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
            <Link to={ link }>
                <Button colorScheme={ 'purple' } variant={ 'outline' } marginTop={ '1rem' }>Visit Website</Button>
            </Link>
        </VerticalTimelineElement>
    );
}

export default TimelineElement;