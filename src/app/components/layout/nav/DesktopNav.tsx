import { Link } from 'react-router-dom';

import { Socials } from '../../common/socials/Socials';

// import store
const DesktopNav = () => {
    return (
        <nav className='flex gap-[1rem] items-center' style={{ fontSize: 'var(--normal-font-size)' }}>
            <div className='flex gap-[1rem]'>
                <Socials />
            </div>

            {/* resume link */}
            <Link to='/resume' className='h-[3.5rem] px-[2rem] cursor-pointer bg-black text-white rounded-full grid place-items-center dark:bg-white dark:text-black' >
                <span>Resume</span>
            </Link>
        </nav>
    )
}

export default DesktopNav;