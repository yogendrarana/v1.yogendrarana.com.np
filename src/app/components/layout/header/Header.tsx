// import components
import Logo from "../../common/logo/Logo";
import DesktopNav from "../nav/DesktopNav";

// import store

const Header = () => {
    return (
        <>
            <div className='h-[var(--header-height)] w-full px-[var(--padding-x)] flex items-center justify-between'>
                <div>
                    <Logo />
                </div>

                <div>
                    <DesktopNav />
                </div>
            </div>
        </>
    )
}

export default Header;