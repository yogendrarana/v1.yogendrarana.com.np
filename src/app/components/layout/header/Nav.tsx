import { motion } from "framer-motion"

// imort components
import MenuButton from "../../common/button/MenuButton";

// import store
import { useUtilStore } from '../../../../store/useUtilStore';
import { Link } from "react-router-dom";
import useNavMenu from "../../../../hooks/useNav";
import useSocials from "../../../../hooks/useSocials";

const Nav = () => {
    const { isMenuOpen, toggleMenu } = useUtilStore();

    const navMenu = useNavMenu();
    const socials = useSocials();

    const menuVariants = {
        open: { height: "600px", width: "400px", top: "-10px", right: "-10px", transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] } },
        closed: { height: "45px", width: "130px", top: "0px", right: "0px", transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] } }
    }

    return (
        <nav
            style={{ fontSize: 'var(--normal-font-size)' }}
            className={` flex justify-center gap-[1rem] items-center relative z-50`}
        >
            {/* menu */}
            <motion.div
                variants={menuVariants}
                animate={isMenuOpen ? "open" : "closed"}
                initial="closed"
                className="
                    px-[2rem]
                    absolute right-0 
                    bg-[#c9fd74] 
                    rounded-[25px]
                    overflow-hidden 
                    flex flex-col justify-between
                "
            >
                {/* menu list */}
                <ul className="flex flex-col gap-[1rem] pt-[125px] text-[1.8rem]">
                    {
                        navMenu.map((item, index) => {
                            return (
                                <li key={index} className="group flex gap-[1rem] items-center overflow-hidden" onClick={() => toggleMenu()}>
                                    <div className="w-[2.5rem] translate-x-[-100%]  group-hover:translate-x-[0] transition-all ease-in-out duration-700">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                    <Link
                                        to={item.href}
                                        className={`${isMenuOpen ? "" : "opacity-0"} h-full w-full inline-block translate-x-[-2.5rem] group-hover:translate-x-0 transition-all ease-in-out duration-700`}
                                    >{item.label}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

                {/* footer */}
                <div className="py-[1.5rem] flex gap-[2rem] border-t border-black text-[1.25rem]">

                    {
                        socials.map((social, index) => {
                            return (
                                <div onClick={() => toggleMenu()} key={index} className="border-b border-transparent hover:border-b hover:border-black transition-all ease-in-out duration-500">
                                    <Link target="_blank" to={social.url} className="h-full w-full inline-block text-center">{social.title}</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </motion.div>

            {/* menu button */}
            <MenuButton />
        </nav>
    )
}

export default Nav;