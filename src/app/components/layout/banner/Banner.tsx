const Banner = () => {
    return (
        <div
            className='
                h-[calc(100vh-var(--header-height))] w-full px-[2rem]
                flex flex-col justify-center items-center
            '
        >
            <div>
                <p className='text-[8rem]'>Yogendra Rana</p>
                <p className='text-[3rem]'>Full Stack Developer</p>
            </div>
        </div>
    )
}

export default Banner;