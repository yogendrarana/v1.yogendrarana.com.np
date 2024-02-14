import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

// import componet
import Header from "../header/Header";

// import hooks
import useNavMenu from "../../../hooks/useNav";
import GsapMagnetic from "../../common/magnetic/GsapMagnetic";

const Banner = () => {
    const menu = useNavMenu();

    const resumeObject = menu.find((m) => m.label === "Resume")!;
    const bottomNav = [{ label: "Contact", href: "/contact" }, { label: "Resume", href: resumeObject.href }]

    return (
        <div className='h-[100vh] w-full flex flex-col justify-between items-center border-b relative'>
            <Header />

            <div className='lg:flex gap-[3rem] text-center text-[10rem] font-bold w-full'>
                <Marquee speed={100}>
                    <p className="tracking-[1rem] md:tracking-normal"><span className="md:ml-[5rem]">*</span> Yogendra Rana </p>
                </Marquee>
            </div>

            <div
                className='
                    w-full px-[var(--px)] md:px-[var(--md-px)] py-[3rem]
                    flex justify-between items-center 
                    text-[1.5rem] text-center
                '
            >
                <p>Full Stack Developer</p>
                <div className="flex gap-[5rem] md:gap-[3rem]">
                    {
                        bottomNav.map((nav, index) => (
                            <GsapMagnetic key={index}>

                                <div className="group">
                                    <Link
                                        to={nav.href}
                                        target={nav.label === "Resume" ? "_blank" : "_self"}
                                        className="
                                            group
                                            relative
                                            cursor-pointer 
                                            
                                            before:content-['']
                                            before:h-[0.75rem] before:w-[0.75rem]
                                            before:bg-black before:rounded-full
                                            before:absolute before:bottom-[-1rem] before:left-1/2 before:-translate-x-1/2
                                            before:scale-0 group-hover:before:scale-100
                                            before:transition-all before:ease before:duration-300
                                        "
                                    >{nav.label}</Link>
                                </div>
                            </GsapMagnetic>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default Banner;