const Banner = () => {
    return (
        <div className='h-[calc(100vh-var(--header-height))] w-full px-[var(--padding-x)] flex flex-col justify-center items-center'>
            <div className='text-[10rem] font-bold'>
                Yogendra
                <span className='ml-[3rem]'>Rana</span>
            </div>

            <div className='text-[1.5rem] mt-5'>
                Full Stack Developer
            </div>
        </div>
    )
}

export default Banner;