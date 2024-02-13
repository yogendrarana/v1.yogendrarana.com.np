import { motion } from 'framer-motion';

// import components
import Hamburger from '../hamburger/Hamburger';

// import store
import { useUtilStore } from '../../../store/useUtilStore';

export default function MenuButton() {
    const { isMenuOpen, toggleMenu } = useUtilStore();
    return (
        <div
            onClick={toggleMenu}
            className="h-[45px] w-[130px] cursor-pointer rounded-[25px] overflow-hidden"
        >
            <motion.div
                className={`
                    relative 
                    h-full w-full 
                    text-[1.3rem] 
                    flex items-center justify-center gap-[0.75rem]
                    bg-black text-white 
                    transition-all ease-in-out duration-500
                    ${isMenuOpen ? "" : ""}
                `}
                transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
            >
                <p>Menu</p>
                <Hamburger bg="white" />
            </motion.div>
        </div>
    )
}