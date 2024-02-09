import { Link } from 'react-router-dom';

// import hooks
import useSocials from '../../../../hooks/useSocials'

// import component
import GsapMagnetic from '../magnetic/GsapMagnetic';

export const Socials = () => {
    const socials = useSocials();
    return (
        <div className='flex justify-center gap-[.5rem]'>
            {
                socials.map((option, index) => (
                    <GsapMagnetic key={index}>
                        <div
                            className='
                                h-[3.5rem] w-[3.5rem] 
                                text-[1.5rem] 
                                rounded-full 
                                grid place-items-center 
                                cursor-pointer 
                                duration-200
                                dark:border-none  
                            '
                        >
                            <Link to={option.url} target='_blank'>
                                <i className={`${option.fontawesome_icon}`}> </i>
                            </Link>
                        </div>
                    </GsapMagnetic>
                ))
            }
        </div>
    )
}
