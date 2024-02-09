const BackToTopButton = () => {
    return (
        <button
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="
                h-[4rem] w-[4rem] border rounded-full
                grid place-items-center cursor-pointer
                shadow-lg bg-white
                dark:bg-white dark:text-black
            "
        >
            <i className="fas fa-arrow-up"> </i>
        </button>
    )
}

export default BackToTopButton