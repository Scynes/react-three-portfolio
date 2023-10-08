import { ReactNode } from 'react';

import Navigation from './Navigation';
import Static from './Static';

/**
 * Properties for the Layout component.
 */
interface Properties {
    // The children components to be rendered within the layout.
    children: ReactNode
}

/**
 * A layout component that wraps around the content passed as children and serves as 
 * the outermost container for the application.
 */
const Layout = ({ children }: Properties) => {
    return (
        <>
            <Static />
            <Navigation />
            { children }
        </>
    );
}

export default Layout;