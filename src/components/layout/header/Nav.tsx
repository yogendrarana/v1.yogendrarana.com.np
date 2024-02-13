import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom";

// import hooks
import useNavMenu from "../../../hooks/useNav";

// import data
import { MY_DATA } from "../../../data/my_data";

// imort components
import MenuButton from "../../common/button/MenuButton";
import { useUtilStore } from "../../../store/useUtilStore";

// import store

const Nav = () => {
    const navMenu = useNavMenu();
    const navigate = useNavigate();
    const socials = MY_DATA.contact.social;
    const { isMenuOpen, toggleMenu } = useUtilStore();

    const menuVariants = {
        open: { height: "600px", width: "385px", top: "-10px", right: "-10px", transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] } },
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
                    shadow-lg
                    [--menu-height: 600px] sm:[--menu-height: 500px]
                    [--menu-width: 400px] sm:[--menu-width: 400px
                "
            >
                {/* menu list */}
                <div className="flex flex-col gap-[1rem] pt-[125px] text-[1.8rem]">
                    {
                        navMenu.map((item, index) => {
                            return (
                                <div
                                    onClick={() => {
                                        toggleMenu()
                                        if (item.label === "Resume") {
                                            window.open(item.href)
                                        } else {
                                            navigate(item.href)
                                        }
                                    }}
                                    key={index}
                                    className="group flex gap-[1rem] items-center cursor-pointer overflow-hidden"
                                >
                                    <div className="w-[2.5rem] translate-x-[-100%]  group-hover:translate-x-[0] transition-all ease-in-out duration-500">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                    <div
                                        className={`
                                            ${isMenuOpen ? "" : "opacity-0"} 
                                            h-full w-full inline-block translate-x-[-2.5rem] group-hover:translate-x-0 transition-all ease-in-out duration-700`
                                        }
                                    >{item.label}</div>
                                </div>
                            )
                        })
                    }
                </div>

                {/* footer */}
                <div className="mt-[1.5rem] py-[1.5rem] flex justify-between gap-[2rem] border-t border-black text-[1.25rem]">

                    {
                        socials.map((social, index) => {
                            return (
                                <div onClick={() => toggleMenu()} key={index} className="">
                                    <Link
                                        target="_blank"
                                        to={social.url}
                                        className="
                                            inline-block
                                            relative
                                            text-[1.5rem]
                                            before:content-['']
                                            before:py-[1rem]
                                            before:absolute before:bottom-[-0.5rem] before:left-0
                                            before:w-0
                                            before:hover:w-full
                                            before:border-b-2
                                            before:border-black


                                            before:transition-all
                                            before:ease-in-out
                                            before:duration-500
                                        "
                                    >{social.name}</Link>
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