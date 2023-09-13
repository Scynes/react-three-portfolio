import { Box } from '@chakra-ui/react';
import { stagger } from '@utils/motion';
import { motion } from 'framer-motion';

const withSectionWrapper = ( Component: React.FC, name: string ) => (
    
    function HOC () {

        return (
            <Box as={ motion.section } variants={ stagger() } initial={ 'hidden' } whileInView={ 'show' } viewport={ { once: true, amount: 0.25 } } marginX={ 'auto' } maxWidth={ '6xl' } paddingX={ '32px' }>
                <Component />
            </Box>
        )
    }
);

export default withSectionWrapper