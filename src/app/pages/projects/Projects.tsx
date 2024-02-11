import { Link } from "react-router-dom";

// projects data
const projects = [
    {
        name: 'Artsy Web',
        description: 'This is a full stack project for art enthusiasts.',
        link: 'https://artsy-art-gallery.vercel.app',
        tech: ['React', 'Redux Toolkit', 'Stripe', 'Khalti'],
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Swift Chat',
        description: 'Chat application that is so simple, so elegant, just looking like a wow.',
        link: 'https://swift-web-chat.vercel.app',
        tech: ['Next.js', 'Tailwind', 'Pusher', 'Zustand'],
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Ecommerce',
        description: 'This is a ecommerce application.',
        link: 'https://react-web-ecommerce.vercel.app/',
        tech: ['React', 'TypeScript', 'Tailwind', 'Zustand'],
        image: 'https://via.placeholder.com/150'
    }
]

const Projects = () => {
    return (
        <div className="min-h-[75vh] px-[var(--padding-x)] flex flex-col justify-center">
            <h2 className='text-[5rem]'>Projects</h2>

            <div className="flex flex-col gap-[3rem]">
                {
                    projects.map((project, index) => (
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
                                    lg:flex-col
                                    md:gap-[2rem]
                                "
                        >
                            <div className="flex flex-col justify-between overflow-hidden">
                                <div className='whitespace-nowrap text-[2rem]'>{project.name}</div>
                                <div className="flex justify-between gap-[1rem] flex-wrap">
                                    {
                                        project.tech.map((tech, index) => (
                                            <span key={index} className='text-[1.5rem]'>{tech}</span>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="flex justify-between gap-[2rem] items-end">
                                <p className="text-[1.5rem]">{new URL(project.link).hostname}</p>
                                <Link to={project.link} target="_blank" className="text-[1.75rem]">
                                    <i className="fa-solid fa-square-arrow-up-right"></i>
                                </Link>
                            </div>

                            {/* <hr className="flex-grow min-w-[10rem] border-gray-400 group-hover:border-black dark:border-gray-400 dark:group-hover:border-white" /> */}
                        </div >
                    ))
                }
            </div >
        </div >
    )
}

export default Projects;