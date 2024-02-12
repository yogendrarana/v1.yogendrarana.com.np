import Marquee from "react-fast-marquee";
import MenuButton from "../../common/button/MenuButton";

// import Photo from "../../../../assets/\/images/me/yogendra-nobg.png"

const Banner = () => {

    return (
        <div className='h-[calc(100vh-var(--header-height))] w-full flex flex-col justify-center items-center'>
            {/* <div className='flex gap-[3rem] text-center text-[10rem] font-bold lg:hidden'>
                <span className=''>Yogendra</span>
                <span className=''>Rana</span>
            </div> */}

            <div className='lg:flex gap-[3rem] text-center text-[10rem] font-bold w-full'>
                <Marquee>
                    <p className="tracking-[1rem] md:tracking-normal"><span className="md:ml-[5rem]">*</span> Yogendra Rana </p>
                </Marquee>
            </div>

            {/* <img src={Photo} alt="Yogendra Rana" className="w-[100px] h-[100px] rounded-full" /> */}
            <div className='text-[2.75rem] text-center mt-5'>
                Full Stack Developer <MenuButton />
            </div>
        </div>
    )
}

export default Banner;