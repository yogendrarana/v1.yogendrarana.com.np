import React from 'react';
import { motion } from 'framer-motion';

// prop type
type PropType = {
    children: React.ReactNode;
};

const FramerMagnetic: React.FC<PropType> = ({ children }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });


    // mouse move event
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const rect = ref.current?.getBoundingClientRect();

        if (rect) {
            setPosition({
                x: clientX - (rect.left + rect.width / 2),
                y: clientY - (rect.top + rect.height / 2)
            });
        }
    };

    // mouse leave event
    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
};

export default FramerMagnetic;
