import { Link } from "react-router-dom";
import { MY_DATA } from "../../../data/my_data";

const Projects = () => {
    const projects = MY_DATA.projects;

    return (
        <div className="min-h-[75vh] px-[var(--px)] sm:px-[var(--md-px)] flex flex-col justify-center">
            <h2 className='mb-[1rem] font-bold text-[5rem]'>Projects</h2>

            <div className="flex flex-col gap-[3rem]">
                {
                    projects.map((project, index) => (
                        <div
                            key={index}
                            className="
                                    group
                                    pb-4
                                    border-b border-gray-400 hover:border-black dark:border-gray-400 dark:group-hover:border-white
                                    flex justify-between gap-[1rem] 
                                    cursor-pointer 
                                    text-gray-500 hover:text-black 
                                    dark:hover:text-white duration-300
                                    lg:flex-col
                                    md:gap-[2rem]
                                "
                        >
                            <div className="flex flex-col justify-between overflow-hidden">
                                <div className='whitespace-nowrap text-[2rem]'>{project.title}</div>
                                <div className="flex justify-between gap-x-[2rem] flex-wrap">
                                    {
                                        project.techStack.map((tech, index) => (
                                            <span key={index} className='text-[1.25rem]'>{tech}</span>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="flex justify-between gap-[2rem] items-end">
                                <p className="text-[1.5rem]">{project.link.label}</p>
                                <Link to={project.link.href} target="_blank" className="text-[1.75rem]">
                                    <i className="fa-solid fa-square-arrow-up-right"></i>
                                </Link>
                            </div>
                        </div >
                    ))
                }
            </div >
        </div >
    )
}

export default Projects;