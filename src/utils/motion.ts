/**
 * Defines a framer-motion variant that handles staggering animations. 
 */
export const stagger = (staggerChildren: number = 0, delayChildren: number = 0) => {

    return {
        // Define the motion for hidden.
        hidden: { },
        // Define the motion for showing.
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren
            }
        }
    }
}

/**
 * Define a framer-motion variant that handles text appearing to drop.
 * 
 * @param delay The delay before triggering.
 */
export const textDrop = (delay: number = 0) => {

    return {
        // Define the motion for hidden.
        hidden: {
            y: -50,
            opacity: 0
        },
        // Define the motion for showing.
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay: delay,
            },
        }
    }
}

export const fadeIn = (direction: 'left' | 'right' | 'up' | 'down', type: string, delay: number = 0, duration: number = 0) => {

    return {

        hidden: { 
            x: (direction === 'left' ? 100 : direction === 'right' ? -100 : 0),
            y: (direction === 'up' ? 100 : direction === 'down' ? -100 : 0),
            opacity: 0
        },

        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: 'easeOut'
            }
        }
    }
}