import { Link } from 'react-router-dom';

// import hooks
import useSocials from '../../../../hooks/useSocials';

// import component
import GsapMagnetic from '../../common/magnetic/GsapMagnetic';

// import store
const DesktopNav = () => {
    const socials = useSocials();

    return (
        <nav className='flex gap-[1rem] items-center' style={{ fontSize: 'var(--normal-font-size)' }}>

            <div className='flex gap-[1rem]'>
                {
                    socials.map((option, index) => (
                        <GsapMagnetic key={index}>
                            <div className='h-[3.5rem] w-[3.5rem] text-[1.25rem] border rounded-full grid place-items-center cursor-pointer dark:border-none'>
                                <Link to={option.url} target='_blank'>
                                    <i className={`${option.fontawesome_icon}`}> </i>
                                </Link>
                            </div>
                        </GsapMagnetic>
                    ))
                }
            </div>

            {/* resume link */}
            <Link
                to='/resume'
                className='h-[3.5rem] px-[2rem] bg-black text-white rounded-full grid place-items-center dark:bg-white dark:text-black'
            >
                <span>Resume</span>
            </Link>
        </nav>
    )
}

export default DesktopNav;