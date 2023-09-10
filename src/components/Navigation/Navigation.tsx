import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, HStack, IconButton, Image, Stack, Text, useColorMode, useDisclosure } from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { BiMenuAltLeft } from 'react-icons/bi';

import Logo from '@assets/logo.svg';

/**
 * Properties for the Navigation component.
 */
interface Properties {
    // Represents the routes to be rendered as {@Navlink}'s
    routes: string[]
}

/**
 * The Navigation component of the application. This component adheres to responsive design
 * and will auto collapse down on smaller screen sizes to display a hamburger menu and drawer.
 * 
 * @param param0 
 * @returns 
 */
const Navigation = ({ routes }: Properties) => {
    
    // ChakraUI hook for detecting user selected color mode.
    const { colorMode, toggleColorMode } = useColorMode();
    // ChakraUI hook for managing the state of the hamburger menu / drawer
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg={ 'gray.900' } px={ 4 }>
            <Flex height={ 16 } alignItems={ 'center' } justifyContent={ 'space-between' }>
                <Box display={ { md: 'none' } } onClick={ isOpen ? onClose : onOpen }>
                    <BiMenuAltLeft size={30} />
                </Box>
                <HStack spacing={ 4 } alignItems={ 'center' }>
                    <Image boxSize={ 55 } src={ Logo } />
                    <HStack fontWeight={ 'extrabold' } fontSize={ '1.3rem' }>
                        <Text>Dustin</Text>
                        <Text display={ { base: 'none', lg: 'flex' } }>| Full Stack Developer</Text>
                    </HStack>
                </HStack>
                <HStack spacing={ '16rem' } alignItems={ 'center' }>
                    <HStack as={ 'nav' } spacing={ 4 } color={ 'white' } display={ { base: 'none', md: 'flex' } }>
                        { routes.map(route => (
                            <Box _hover={ { color: 'red' } }>
                                <NavLink key={ route } to={ '/' }>
                                    { route }
                                </NavLink>
                            </Box>
                        ))}
                    </HStack>
                    <Button onClick={ toggleColorMode } variant={ 'unstyled' }>
                        { colorMode == 'light' ? <BsFillMoonFill size={ 30 } /> : <BsFillSunFill size={ 30 } /> }
                    </Button>
                </HStack>
            </Flex>
            { isOpen &&
                <Drawer placement={ 'top' } onClose={ onClose } isOpen={ isOpen }>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerBody padding={ 0 }>
                            <Stack as={ 'nav' } spacing={ 4 }>
                                { routes.map(route => (
                                    <Flex _hover={ { bg: 'red' } } alignItems={ 'center' } justifyContent={ 'center' } padding={ 2.5 }>
                                        <NavLink key={ route } to={ '/' }>
                                            { route }
                                        </NavLink>
                                    </Flex>
                                ))}
                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            }
        </Box>
    );
}

export default Navigation;