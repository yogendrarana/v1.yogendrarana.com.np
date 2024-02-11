import BackToTopButton from "../../common/button/BackToTopButton";
import { Socials } from "../../common/socials/Socials";
import Watch from "../../common/watch/Watch";


const Footer = () => {

    return (
        <footer className='min-h-[var(--nav-height)] mt-[5rem] px-[var(--padding-x)] py-[2rem] flex flex-col items-center border-t text-[1.25rem] relative' >
            <div className="w-full flex justify-between items-center">
                {/* watch */}
                <div className="w-1/3">
                    <Watch />
                </div>

                {/* socials */}
                <div className="w-1/3">
                    <Socials />
                </div>

                {/* email */}
                <div className="w-1/3 text-right">
                    <p>yogendrarana.mail@gmail.com</p>
                </div>
            </div>

            {/* button to top */}
            <div className="absolute right-[2rem] top-[-2rem]">
                <BackToTopButton />
            </div>
        </footer>
    )
}

export default Footer;