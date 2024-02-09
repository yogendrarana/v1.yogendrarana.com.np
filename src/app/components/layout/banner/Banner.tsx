// import css
import './Banner.css';

const Banner = () => {
    return (
        <div className='h-[calc(100vh-var(--header-height))] w-full px-[var(--padding-x)] flex flex-col justify-center items-center'>
            <div className='name'>Yogendra <span>Rana</span></div>
            <div className='role'>
                <p>Full Stack Developer</p>
            </div>
        </div>
    )
}

export default Banner;