import { motion } from 'framer-motion'
// import { Link } from "react-router-dom";

// import hooks
import useNav from "../../../../hooks/useNav";

// import animations

const FloatingMenu = () => {
    const navMenu = useNav();

    // define variants
    const menuContainerVariant = { hover: { scale: 1.1, transition: { type: 'spring', duration: 0.1 } } };

    return (
        <div className="fixed top-1/2 -translate-y-1/2 right-[var(--padding-x)] text-[1.8rem] flex flex-col gap-[1rem]">
            {
                navMenu.map((menu, index) => {
                    return (
                        <motion.div
                            key={index}
                            variants={menuContainerVariant}
                            whileHover="hover"
                            className="group h-[4rem] flex justify-between items-center cursor-pointer text-gray-400 hover:text-black dark:hover:text-white duration-300"
                        >
                            <span className="px-[1rem]">0{index + 1}</span>
                            <hr className="flex-grow min-w-[10rem] border-gray-400 group-hover:border-black dark:border-gray-400 dark:group-hover:border-white" />
                            <div>
                                <motion.div>

                                </motion.div>
                            </div>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}

export default FloatingMenu;
