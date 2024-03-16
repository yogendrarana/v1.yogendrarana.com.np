import { MY_DATA } from "../../../data/my_data";

const Career = () => {
    const career = MY_DATA.work;

    return (
        <div className="min-h-[75vh] px-[var(--px)] sm:px-[var(--md-px)] flex flex-col justify-center gap-[1rem]">
            {/* heading */}
            <h2 className='mb-[1rem] font-bold text-[5rem]'>Career</h2>

            {/* content */}
            <div className='flex flex-col gap-[3rem]'>
                {
                    career.map((exp, index) => {
                        return (
                            <div
                                key={index}
                                className="
                                    group 
                                    pb-4
                                    border-b
                                    border-gray-400 hover:border-black dark:border-gray-400 dark:group-hover:border-white
                                    flex justify-between gap-[1rem] 
                                    cursor-pointer 
                                    text-gray-500 hover:text-black 
                                    dark:hover:text-white duration-300
                                    md:flex-col
                                    md:gap-[2rem]
                                "
                            >
                                <div className="flex flex-col gap-[1.5rem] justify-between">
                                    <div className='whitespace-nowrap text-[2rem] text-black'>{exp.company}</div>
                                    <div className='whitespace-nowrap text-[1.25rem]'>{exp.role}</div>
                                </div>


                                <div className="flex flex-col justify-between text-end md:flex-row md:just md:text-start">
                                    <div className='whitespace-nowrap text-[1.5rem]'>{exp.start}</div>
                                    <div className='whitespace-nowrap text-[1.5rem]'>{exp.end}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Career;
