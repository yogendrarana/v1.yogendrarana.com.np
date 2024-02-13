import BackToTopButton from "../../common/button/BackToTopButton";
import { Socials } from "../../common/socials/Socials";
import Watch from "../../common/watch/Watch";


const Footer = () => {

    return (
        <footer
            className='
                min-h-[var(--nav-height)] 
                mt-[2.5rem] px-[var(--padding-x)] py-[2.5rem] 
                flex flex-col items-center gap-[3rem]
                border-t 
                text-[1.25rem] 
                relative
                md:px-[calc(var(--padding-x)-20px)]
            '
        >
            {/* row 1 */}
            <div className="w-full flex flex-col gap-[1rem] items-center border-b pb-[1.5rem]">
                <div className="text-[2.5rem] flex items-center gap-[1.5rem] md:text-[1.5rem]">
                    <i className="fa-regular fa-envelope"></i>
                    <span>yogendrarana4321@gmail.com</span>
                </div>
                <p className="text-[4.5rem] whitespace-nowrap sm:text-[2.5rem]">Lets work together!</p>
            </div>

            {/* row 2 */}
            <div className="w-full flex justify-between items-center gap-[2rem] md:items-center">
                {/* watch */}
                <div className="w-1/3">
                    <Watch />
                </div>

                {/* socials */}
                <div className="w-1/3">
                    <Socials />
                </div>

                {/* email */}
                <div className="w-1/3 flex items-center gap-[2rem] justify-end">
                    <p>Top</p>
                    <BackToTopButton />
                </div>
            </div>
        </footer>
    )
}

export default Footer;