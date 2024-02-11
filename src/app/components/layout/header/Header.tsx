// import components
import Logo from "../../common/logo/Logo";
import DesktopNav from "../nav/DesktopNav";
import Hamburger from "../../common/hamburger/Hamburger";

// import zustand store
import { useUtilStore } from "../../../../store/useUtilStore";

const Header = () => {
    const { toggleMobileMenu } = useUtilStore();

    return (
        <>
            <div className='h-[var(--header-height)] w-full px-[var(--padding-x)] flex items-center justify-between md:px-[calc(var(--padding-x)-20px)]'>
                <div>
                    <Logo />
                </div>

                <div className="md:hidden">
                    <DesktopNav />
                </div>

                <div onClick={() => toggleMobileMenu()} className="hidden md:flex">
                    <Hamburger />
                </div>
            </div>
        </>
    )
}

export default Header;