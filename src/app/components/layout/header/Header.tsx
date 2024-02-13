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
                    px-[var(--padding-x)] 
                    flex items-center justify-between 
                    md:px-[calc(var(--padding-x)-3.5rem)]
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