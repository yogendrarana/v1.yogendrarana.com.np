// import components
import Logo from "../../common/logo/Logo";
import { Socials } from "../../common/socials/Socials";
import Nav from "./Nav";
const Header = () => {

    return (
        <>
            <div
                className='
                    h-[var(--header-height)] w-full 
                    px-[var(--padding-x)] 
                    flex items-center justify-between 
                    md:px-[calc(var(--padding-x)-20px)]
                    relative
                '
            >
                <div>
                    <Logo />
                </div>

                <div className="flex items-center">
                    <div className="sm:hidden">
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