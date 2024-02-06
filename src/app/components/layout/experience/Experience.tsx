// import { motion } from 'framer-motion'
// import { Link } from "react-router-dom";

// import hooks
import useExperience from '../../../../hooks/useExperience';

// import animations

const Experience = () => {
    const experience = useExperience();

    return (
        <div className="px-[var(--padding-x)] text-[1.8rem] flex flex-col gap-[1rem]">
            <div>
                <h2 className='text-[5rem]'>Experience</h2>
            </div>
            <div className='flex flex-col gap-[2rem]'>
                {
                    experience.map((exp, index) => {
                        return (
                            <div
                                key={index}
                                className="group flex justify-between items-center cursor-pointer text-gray-400 hover:text-black dark:hover:text-white duration-300"
                            >
                                <div className="w-[25rem] pr-[1rem] whitespace-nowrap">{exp.date}</div>
                                <hr className="flex-grow min-w-[10rem] border-gray-400 group-hover:border-black dark:border-gray-400 dark:group-hover:border-white" />
                                <div className='w-[20rem] pl-[1rem] flex flex-col text-right'>
                                    <div className='whitespace-nowrap'>{exp.company}</div>
                                    <div className='whitespace-nowrap'>{exp.role}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Experience;
