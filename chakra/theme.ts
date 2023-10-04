import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: (props: { colorMode: string; }) => ({
            body: {
                color: props.colorMode === 'dark' ? 'white' : 'black' 
            }
        })
    }
});

export default theme;