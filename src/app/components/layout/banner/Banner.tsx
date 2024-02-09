// import css
import './Banner.css';

const Banner = () => {
    return (
        <div className='h-[calc(100vh-var(--header-height))] w-full px-[var(--padding-x)] relative bottom-[calc(var(--header-height)/2)] flex flex-col justify-center items-center'>
            <p className='name'>Yogendra Rana</p>
            <p className='role'>Full Stack Developer</p>
        </div>
    )
}

export default Banner;