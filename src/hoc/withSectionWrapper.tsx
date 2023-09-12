import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const withSectionWrapper = ( Component: React.FC, name: string ) => (
    
    function HOC () {

        return (
            <Box as={ motion.section }>
                <Component />
            </Box>
        )
    }
);

export default withSectionWrapper