import { useEffect, useState } from 'react';

/**
 * Custom React hook for monitoring and managing the state of whether the window size is considered "mobile."
 *
 * @param {number} width - The custom width threshold (default is 468 pixels).
 * @returns {Object} An object containing the `isMobile` state.
 */
const useWindowSizeMobile = ( width: number = 468 ) => {

    // Set state and initialize the value based on the current screen width.
    const [ isMobile, setIsMobile ] = useState(window.innerWidth <= width);

    // Handle updating the state if the window width is smaller than the defined width.
    const handleResize = () => setIsMobile(window.innerWidth <= width);

    useEffect(() => {

        // Setup the event listener for monitoring screen resizing.
        window.addEventListener('resize', handleResize);

        // Remove the event listener on component unmount.
        return () => window.removeEventListener('resize', handleResize);

    }, []);

    return { isMobile };
}

export default useWindowSizeMobile;