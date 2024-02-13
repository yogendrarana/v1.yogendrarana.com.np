import { Link } from 'react-router-dom';

// import data
import { MY_DATA } from '../../../data/my_data';

// import component
import GsapMagnetic from '../magnetic/GsapMagnetic';

const Socials = () => {
    const socials = MY_DATA.contact.social;
    return (
        <div className='flex justify-center gap-[.5rem]'>
            {
                socials.map((option, index) => (
                    <GsapMagnetic key={index}>
                        <Link
                            to={option.url}
                            target='_blank'
                            className='h-[3.5rem] w-[3.5rem] text-[1.5rem] grid place-items-center rounded-full'
                        >
                            <i className={`${option.logo.src}`}> </i>
                        </Link>
                    </GsapMagnetic>
                ))
            }
        </div>
    )
}

export default Socials;
