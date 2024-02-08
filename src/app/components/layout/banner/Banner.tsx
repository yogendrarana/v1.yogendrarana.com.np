// import css
import './Banner.css';

const Banner = () => {
    return (
        <div className='relative bottom-[calc(var(--header-height)/2)] h-[calc(100vh-var(--header-height))] w-full px-[var(--padding-x)] flex flex-col justify-center items-center'>
            <div className='name'>
                <p className='first_name'>Yogendra</p>
                <p className='last_name'>Rana Magar</p>
            </div>
        </div>
    )
}

export default Banner;