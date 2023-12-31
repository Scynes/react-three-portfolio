import { BrowserRouter as Router} from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import theme from '../chakra/theme';

import Layout from '@components/Layout';
import Hero from '@components/Hero';
import About from '@components/About';
import Experience from '@components/Experience';
import Technology from '@components/Technology';
import Projects from '@components/Projects';
import Contact from '@components/Contact';

const App = () => {
    return (
        <ChakraProvider theme={ theme }>
            <Router>
                <Layout>
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <Technology />
                    <Contact />
                </Layout>
            </Router>
        </ChakraProvider>
    );
}

export default App;