// stack component
const Tech = ({ tech }: { tech: { name: string }[] }) => {
    return (
        <div className='flex gap-[1rem] justify-center'>
            {
                tech.map((item, index) => (
                    <div key={index} className='w-[30rem] flex justify-center items-center border'>
                        <p className='text-[2rem]'>{item.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default function Stack() {
    const language = [{ name: "JavaScript" }, { name: "TypeScript" }, { name: "Go" }]
    const frontend = [{ name: "React" }, { name: "Next" }, { name: "Node" }, { name: "Express" }, { name: "Nest" }, { name: "Gin" }]
    const database = [{ name: "MongoDB" }, { name: "MySQL" }, { name: "PostgreSQL" }, { name: "Redis" }, { name: "Drizzle ORM" }]
    const other = [{ name: "Git" }, { name: "Docker" }, { name: "Nginx" }, { name: "Linux" }]

    return (
        <div className='my-[5rem] px-[var(--padding-x)] py-[5rem] bg-black text-white flex flex-col text-center'>
            <h2 className='text-[5rem]'>My Stack</h2>
            <p className='text-[2rem] text-gray-400'>These are the technologies I am familiar with.</p>

            <div className='mt-[2rem] flex flex-col gap-[1rem]'>
                {/* language */}
                <Tech tech={language} />

                {/* frontend */}
                <Tech tech={frontend} />

                {/* database */}
                <Tech tech={database} />

                {/* other */}
                <Tech tech={other} />
            </div>
        </div>
    )
}

