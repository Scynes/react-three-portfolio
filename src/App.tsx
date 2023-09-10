import { BrowserRouter as Router} from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import Layout from '@components/Layout';

const App = () => {
    return (
        <ChakraProvider>
            <Router>
                <Layout>
                    
                </Layout>
            </Router>
        </ChakraProvider>
    );
}

export default App;