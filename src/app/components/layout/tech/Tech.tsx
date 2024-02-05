export default function Tech() {
    const frontend = [{ name: "React" }, { name: "Next" }, { name: "TailwindCSS" }]
    const backend = [{ name: "Node" }, { name: "Express" }, { name: "Nest" },]
    const database = [{ name: "MongoDB" }, { name: "MySQL" }, { name: "PostgreSQL" }, { name: "Redis" }, { name: "Drizzle ORM" }]
    const other = [{ name: "Git" }, { name: "Docker" }, { name: "Nginx" }, { name: "Linux" }]

    return (
        <div className='px-[2rem] flex flex-col text-center'>
            <h2 className='text-[2rem]'>My Stack</h2>
            <p className='text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className='mt-[2rem] flex flex-col gap-[1rem]'>
                {/* frontend */}
                <Stack stack={frontend} />

                {/* backend */}
                <Stack stack={backend} />

                {/* database */}
                <Stack stack={database} />

                {/* other */}
                <Stack stack={other} />
            </div>
        </div>
    )
}

// stack component
const Stack = ({ stack }: { stack: { name: string }[] }) => {
    return (
        <div className='flex gap-[1rem] justify-center'>
            {
                stack.map((item, index) => (
                    <div key={index} className='w-[300px] flex justify-center items-center border'>
                        <p className='text-[1.2rem]'>{item.name}</p>
                    </div>
                ))
            }
        </div>
    )
}