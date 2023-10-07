import { Button, Card, Flex, HStack, Heading, Image, Stack, Tag, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface Properties {

    // Represents the name of the project.
    name: string,
    // Represents the name of the image to be rendered.
    image: string,
    // Represents the tech stack used for this project.
    technology: string[],
    // Represents the github repository link for the project code.
    github: string,
    // Represents the demo link for live project showcasing.
    demo: string,
    // Represents the description of the project.
    description: string
}

const ProjectCard = ( { name, image, technology, github, demo, description }: Properties ) => {

    return (
        <Card _hover={ { transform: 'scale(1.1)' } } transition={ 'ease-in-out' } transitionDuration={ '0.3s' } maxWidth={ 'xs' }>
            <Image src={ `/images/${ image }.png` } alt={ 'project image' } borderTopRadius={ 'md' } />
            <Stack height={ 'full' } marginTop={ 6 } spacing={ 3 } padding={ '1rem' }>
                <Heading size={ 'md' }>{ name }</Heading>
                <HStack wrap={ 'wrap' }>
                    { technology?.map((tech, index) => (
                        <Tag key={ index } variant={ 'solid' } colorScheme={ 'purple' }>{ tech }</Tag>
                    )) }
                </HStack>
                <Text>{ description }</Text>
                <Flex marginTop={'auto'} justifyContent={ 'space-between' }>
                    <Link to={ demo }>
                        <Button cursor={ 'pointer' } width={ '8rem' } size={ 'md' } colorScheme={ 'purple' }>View Demo</Button>
                    </Link>
                    <Link to={ github }>
                        <Button cursor={ 'pointer' } width={ '8rem' } size={ 'md' } colorScheme={ 'purple' }>GitHub</Button>
                    </Link>
                </Flex>
            </Stack>
        </Card>
    );
}

export default ProjectCard;