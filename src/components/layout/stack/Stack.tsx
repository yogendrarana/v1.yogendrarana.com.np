// import logos
import {
    DockerLogo,
    DrizzleLogo,
    ExpressLogo,
    GinLogo,
    GitLogo,
    GoLogo,
    JavaScriptLogo,
    MongoDBLogo,
    MySQLLogo,
    NestLogo,
    NextLogo,
    NginxLogo,
    NodeLogo,
    PostgreSLogo,
    PrismaLogo,
    ReactLogo,
    RedisLogo,
    TypeScriptLogo
} from "../../../images"


// define rows
const first_row = [
    { name: "JavaScript", icon: JavaScriptLogo },
    { name: "TypeScript", icon: TypeScriptLogo },
    { name: "Go", icon: GoLogo },
    { name: "React", icon: ReactLogo },
    { name: "Next", icon: NextLogo },
    { name: "Node", icon: NodeLogo },
    { name: "Express", icon: ExpressLogo },
    { name: "Nest", icon: NestLogo },
    { name: "Gin", icon: GinLogo },
]
const second_row = [
    { name: "PostgreSQL", icon: PostgreSLogo },
    { name: "MongoDB", icon: MongoDBLogo },
    { name: "MySQL", icon: MySQLLogo },
    { name: "Redis", icon: RedisLogo },
    { name: "Prisma", icon: PrismaLogo },
    { name: "Drizzle", icon: DrizzleLogo },
    { name: "Git", icon: GitLogo },
    { name: "Docker", icon: DockerLogo },
    { name: "Nginx", icon: NginxLogo }
]

// stack component
const Tech = ({ tech }: { tech: { name: string, icon?: string }[] }) => {
    return (
        <div className='flex flex-wrap gap-[1rem] justify-center cursor-pointer'>
            {
                tech.map((item, index) => (
                    <div key={index} className='group p-[1.25rem] bg-white shadow-sm border dark:border-gray-600 dark:bg-black flex items-center gap-[1rem]'>
                        <img src={item?.icon} alt={item.name} className="h-[4rem] w-[4rem] object-cover" />
                    </div>
                ))
            }
        </div>
    )
}

export default function Stack() {
    return (
        <div className='min-h-[75vh] px-[var(--px)] sm:px-[var(--md-px)] flex flex-col justify-center text-center'>
            <h2 className='text-[5rem]'>My Stack</h2>
            <p className='text-[1.8rem] text-gray-400'>These are my thech stack as of now.</p>

            <div className='mt-[2rem] grid gap-[1rem]'>
                {/* first_row */}
                <Tech tech={first_row} />

                {/* second_row */}
                <Tech tech={second_row} />
            </div>
        </div >
    )
}

