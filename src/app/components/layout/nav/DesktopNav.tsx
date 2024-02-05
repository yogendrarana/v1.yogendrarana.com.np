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
                            <div className='h-[3.5rem] w-[3.5rem] text-[2rem] border-none border grid place-items-center cursor-pointer'>
                                <Link to={option.url} target='_blank'>
                                    <i className={`${option.fontawesome_icon}`}> </i>
                                </Link>
                            </div>
                        </GsapMagnetic>
                    ))
                }
            </div>

            {/* resume link */}
            <Link to='/resume' className='h-[3.5rem] px-[2rem] bg-white text-black rounded-full grid place-items-center'>
                <span>Resume</span>
            </Link>
        </nav>
    )
}

export default DesktopNav;