// import Picture from '../../../../assets/images/me/smiley.png';

const Banner = () => {
    return (
        <div className='relative bottom-[calc(var(--header-height)/2)] h-[calc(100vh-var(--header-height))] w-full px-[var(--padding-x)] flex flex-col justify-center items-center'>
            <p className="text-[15rem] font-bold">Yogendra Rana</p>
            <p className="text-[3rem]">Full stack web developer</p>
        </div>
    )
}

export default Banner;