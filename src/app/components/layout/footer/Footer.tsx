import { Link } from "react-router-dom";

// import logo
import Logo from "../../common/logo/Logo";

const Footer = () => {

    return (
        <footer className='h-[var(--nav-height)] w-[100%] mt-[5rem] px-[var(--padding-x)] py-[2rem] flex justify-between items-center border-t'>
            <div className='flex items-center gap-[2rem]'>
                <Logo />
            </div>
            <Link to="#" className='text-[1.25rem]'>Privacy Policy</Link>
            <Link to="#" className='text-[1.25rem]'>Cookie Policy</Link>
            <Link to="#" className='text-[1.25rem]'>Terms & Conditions</Link>

            {/* attribute */}
            <a className='text-[1.25rem]' target='_blank' href="https://www.flaticon.com/" title="chat box icons">Icons Credit - Flaticon</a>
        </footer>
    )
}

export default Footer;