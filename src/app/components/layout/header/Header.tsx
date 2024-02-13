// import components
import Nav from "./Nav";
import Logo from "./Logo";
import { Socials } from "../../common/socials/Socials";

const Header = () => {
    return (
        <>
            <div
                className='
                    h-[var(--header-height)] w-full 
                    px-[var(--px)] sm:px-[var(--md-px)]
                    flex items-center justify-between 
                    relative
                '
            >
                <div>
                    <Logo />
                </div>

                <div className="flex items-center">
                    <div className="sm:hidden mr-[2rem]">
                        <Socials />
                    </div>

                    <div>
                        <Nav />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;