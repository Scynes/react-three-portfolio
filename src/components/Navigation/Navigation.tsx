import { Box, Flex, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';

import { BsBriefcase } from 'react-icons/bs';
import { BiHistory } from 'react-icons/bi';
import { FiCompass, FiSmile, FiMail } from 'react-icons/fi';

const NAVIGATION_CONTENT = [
    {
        name: 'Explore',
        to: 'explore',
        icon: <FiCompass />
    },
    {
        name: 'Intro',
        to: 'intro',
        icon: <FiSmile />
    },
    {
        name: 'Experience',
        to: 'experience',
        icon: <BiHistory />
    },
    {
        name: 'Projects',
        to: 'projects',
        icon: <BsBriefcase />
    },
    {
        name: 'Contact',
        to: 'contact',
        icon: <FiMail />
    }
]

/**
 * The Navigation component of the application. This component adheres to responsive design
 * and will auto collapse down on smaller screen sizes to display a hamburger menu and drawer.
 * 
 * @param param0 
 * @returns 
 */
const Navigation = () => {

    return (
        <Flex padding={ 4 } width={ 'full' } justifyContent={ 'center' } position={ 'fixed' } zIndex={ 1 }>
            <Flex className='nav-bg' backdropFilter={ 'auto' } backdropBlur={ '2px' } _hover={ { transform: 'scale(1.05)' } } transition={ 'ease-in-out' } transitionDuration={ '0.5s' } gap={ '1rem' } alignItems={ 'center' } justifyContent={ 'space-between' } border={ '1px' } borderColor={ 'gray.500' } borderRadius={ 'xl' } padding={ '3' }>     
                { NAVIGATION_CONTENT.map((item, index) => (
                    <Box key={ index } as={NavLink} to={ `/#${ item.to }` } borderRadius={'lg'}>
                        <Popover trigger='hover' >
                            <PopoverTrigger>
                                <Box _hover={ { bgColor: 'purple.600' } } transition={ 'ease-in-out' } transitionDuration={ '0.25s' } border={ '1px' } borderColor={ 'gray.500' } borderRadius={ 'lg' } padding={ 3 }>
                                    { item.icon }
                                </Box>
                            </PopoverTrigger>
                            <PopoverContent width={'min'} marginTop={ '1rem' }>
                                <PopoverArrow />
                                <PopoverBody>{ item.name }</PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Box>
                )) }
            </Flex>
        </Flex>
    );
}

export default Navigation;