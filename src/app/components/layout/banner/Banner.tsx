import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

// import componet
import Header from "../header/Header";

// import hooks
import useNavMenu from "../../../../hooks/useNav";

const Banner = () => {
    const menu = useNavMenu();
    const resumeObject = menu.find((m) => m.label === "Resume")!;

    return (
        <div className='h-[100vh] w-full flex flex-col justify-between items-center border-b relative'>
            <Header />

            <div className='lg:flex gap-[3rem] text-center text-[10rem] font-bold w-full'>
                <Marquee>
                    <p className="tracking-[1rem] md:tracking-normal"><span className="md:ml-[5rem]">*</span> Yogendra Rana </p>
                </Marquee>
            </div>

            <div
                className='
                    w-full px-[var(--padding-x)] py-[3rem]
                    flex justify-between items-center 
                    text-[1.5rem] text-center
                    sm:px-[1rem]
                '
            >
                <p>Full Stack Developer</p>
                <div className="flex gap-[2rem]">
                    <Link to="/contact" className="cursor-pointer border-b border-black transition-all ease duration-300">Contact</Link>
                    <Link to={resumeObject.href} target="_blank" className="cursor-pointer border-b border-black transition-all ease duration-300">Resume</Link>
                </div>
            </div>
        </div >
    )
}

export default Banner;