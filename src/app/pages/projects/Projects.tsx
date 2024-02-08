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
        <div className="px-[var(--padding-x)]">
            <h2 className='text-[5rem]'>Projects</h2>

            <div className="flex flex-col gap-[2rem] text-[1.8rem]">
                {
                    projects.map((project, index) => (
                        <div
                            key={index}
                            className="group flex flex-col cursor-pointer text-gray-400 hover:text-black dark:hover:text-white duration-300"
                        >
                            <div className="flex justify-between">
                                <div className='whitespace-nowrap'>{project.name}</div>
                            </div>

                            <div className="flex justify-between">
                                <div className='whitespace-nowrap flex justify-between gap-[2rem]'>
                                    {
                                        project.tech.map((tech, index) => (
                                            <span key={index} className='text-[1.25rem]'>{tech}</span>
                                        ))
                                    }
                                </div>

                                <div className='flex items-center gap-[1rem] text-[1.25rem]'>
                                    <p className="text-[1.5rem]">{new URL(project.link).hostname}</p>
                                    <Link to={project.link} target="_blank" className="text-[1.5rem]">
                                        <i className="fa-solid fa-square-arrow-up-right"></i>
                                    </Link>
                                </div>
                            </div>

                            <hr className="flex-grow min-w-[10rem] border-gray-400 group-hover:border-black dark:border-gray-400 dark:group-hover:border-white" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;