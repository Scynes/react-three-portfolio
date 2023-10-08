import { Box, Flex, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';

import { HashLink } from 'react-router-hash-link';

import { FiMail } from 'react-icons/fi';
import { FaTimeline } from 'react-icons/fa6';
import { IoPersonOutline } from 'react-icons/io5';
import { FaRegFolderOpen, FaToolbox } from 'react-icons/fa6';

const NAVIGATION_CONTENT = [
    {
        name: 'Intro',
        to: 'about',
        icon: <IoPersonOutline size={ '1.5rem' } />
    },
    {
        name: 'Experience',
        to: 'experience',
        icon: <FaTimeline size={ '1.5rem' } />
    },
    {
        name: 'Projects',
        to: 'projects',
        icon: <FaRegFolderOpen size={ '1.5rem' } />
    },
    {
        name: 'Technology',
        to: 'technology',
        icon: <FaToolbox size={ '1.5rem' } />
    },
    {
        name: 'Contact',
        to: 'contact',
        icon: <FiMail size={ '1.5rem' } />
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
                    <HashLink to={ `#${ item.to }` }>
                        <Box key={ index } borderRadius={'lg'}>
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
                    </HashLink>
                )) }
            </Flex>
        </Flex>
    );
}

export default Navigation;