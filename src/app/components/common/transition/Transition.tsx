import React from "react";
import { motion } from "framer-motion"



const Transition = (OriginalComponent: React.ComponentType) => {
    return () => (
        <>
            {/* slide up */}
            <motion.div
                className="h-[100vh] w-1/2 fixed top-0 left-0 bg-[#0f0f0f] origin-bottom"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0, }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* slide out */}
            <motion.div
                className="h-[100vh] w-1/2 fixed top-0 right-0 bg-[#0f0f0f] origin-top"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0, }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], easings: "easeInOut" }}
            />

            {/* original component */}
            <OriginalComponent />
        </>
    )
}

export default Transition;