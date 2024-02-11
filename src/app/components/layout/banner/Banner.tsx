import Marquee from "react-fast-marquee";

// import store
import { useUtilStore } from "../../../../store/useUtilStore";

const Banner = () => {

    const { isMobileMenuClicked } = useUtilStore();
    return (
        <div className='h-[calc(100vh-var(--header-height))] w-full flex flex-col justify-center items-center'>
            <div className='flex gap-[3rem] text-center text-[10rem] font-bold lg:hidden'>
                <span className=''>Yogendra</span>
                <span className=''>Rana</span>
            </div>

            {
                isMobileMenuClicked &&
                <div className='lg:hidden text-[1.5rem] mt-5'>
                    Full Stack Developer
                </div>

            }

            <div className='hidden lg:flex gap-[3rem] text-center text-[10rem] font-bold w-full'>
                <Marquee>
                    <p>- Yogendra Rana -</p>
                </Marquee>
            </div>

            <div className='text-[2.5rem] mt-5'>
                Full Stack Developer
            </div>
        </div>
    )
}

export default Banner;