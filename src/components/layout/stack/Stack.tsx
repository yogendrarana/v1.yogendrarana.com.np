// import logos
import Marquee from "react-fast-marquee"
import {
    DockerLogo,
    DrizzleLogo,
    ExpressLogo,
    // GinLogo,
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
    // { name: "Gin", icon: GinLogo },
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
        <div className='w-auto flex flex-wrap gap-[2rem] justify-center cursor-pointer'>
            {
                tech.map((item, index) => (
                    <div key={index} className='group p-[1.25rem] flex flex-col justify-center items-center gap-[1rem]'>
                        <img src={item?.icon} alt={item.name} className="h-[4rem] w-[4rem] object-cover" />
                        <p className='text-xl dark:text-gray-200'>{item.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default function Stack() {
    return (
        <div className="min-h-[75vh] w-full flex flex-col justify-center items-center text-center">

            <h2 className='text-[5rem]'>My Stack</h2>
            <p className='text-[1.8rem] text-gray-400'>These are my tech stack as of now.</p>

            <div className='mt-[2rem] grid gap-[1rem]'>
                {/* first_row */}
                <Marquee autoFill={true} speed={30} pauseOnClick={true} gradient={true} gradientWidth={50} gradientColor="rgb(248, 251, 253)">
                    <Tech tech={first_row} />
                </Marquee>

                {/* second_row */}
                <Marquee autoFill={true} speed={40} pauseOnClick={true} gradient={true} gradientWidth={50} gradientColor="rgb(248, 251, 253)">
                    <Tech tech={second_row} />
                </Marquee>
            </div>
        </div>
    )
}

