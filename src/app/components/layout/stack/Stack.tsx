// import Marquee from "react-fast-marquee"

// import language icons
import JS from "../../../../assets/images/logo/js.png"
import TS from "../../../../assets/images/logo/ts.png"
import GO from "../../../../assets/images/logo/go.png"

// import framework icons
import Gin from "../../../../assets/images/logo/gin.png"
import Next from "../../../../assets/images/logo/next.png"
import Node from "../../../../assets/images/logo/node.png"
import Nest from "../../../../assets/images/logo/nest.svg"
import React from "../../../../assets/images/logo/react.png"
import Express from "../../../../assets/images/logo/express.png"

// import datbase icons
import Redis from "../../../../assets/images/logo/redis.png"
import Mysql from "../../../../assets/images/logo/mysql.png"
import Mongo from "../../../../assets/images/logo/mongo.png"
import Prisma from "../../../../assets/images/logo/prisma.png"
import Drizzle from "../../../../assets/images/logo/drizzle.png"
import Postgres from "../../../../assets/images/logo/postgres.png"

// import images
import Git from "../../../../assets/images/logo/git.png"
import Docker from "../../../../assets/images/logo/docker.png"
import Nginx from "../../../../assets/images/logo/nginx.png"


// stack component
const Tech = ({ tech }: { tech: { name: string, icon?: string }[] }) => {
    return (
        <div className='flex gap-[1rem] justify-center cursor-pointer'>
            {
                tech.map((item, index) => (
                    <div key={index} className='w-[25rem] flex justify-center items-center gap-[1rem] border p-[0.5rem] '>
                        {item.icon && <img src={item?.icon} alt={item.name} className="h-[3.5rem] w-[3.5rem] rounded-[0.5rem] object-cover" />}
                        <p className='text-[2rem]'>{item.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default function Stack() {
    const first_row = [
        { name: "JavaScript", icon: JS },
        { name: "TypeScript", icon: TS },
        { name: "Go", icon: GO },
        { name: "Git", icon: Git },
        { name: "Docker", icon: Docker },
        { name: "Nginx", icon: Nginx }
    ]
    const second_row = [
        { name: "React", icon: React },
        { name: "Next", icon: Next },
        { name: "Node", icon: Node },
        { name: "Express", icon: Express },
        { name: "Nest", icon: Nest },
        { name: "Gin", icon: Gin }
    ]
    const third_row = [
        { name: "MongoDB", icon: Mongo },
        { name: "MySQL", icon: Mysql },
        { name: "PostgreSQL", icon: Postgres },
        { name: "Redis", icon: Redis },
        { name: "Prisma", icon: Prisma },
        { name: "Drizzle", icon: Drizzle }
    ]

    return (
        <div className='my-[5rem] px-[var(--padding-x)] py-[5rem] flex flex-col text-center'>
            <h2 className='text-[5rem]'>My Stack</h2>
            <p className='text-[2rem] text-gray-400'>These are the technologies I am familiar with.</p>

            <div className='mt-[2rem] flex flex-col gap-[1rem]'>
                {/* first_row */}
                {/* <Marquee autoFill pauseOnClick gradient gradientWidth={50}> */}
                <Tech tech={first_row} />
                {/* </Marquee> */}

                {/* second_row */}
                {/* <Marquee autoFill pauseOnClick gradient gradientWidth={50}> */}
                <Tech tech={second_row} />
                {/* </Marquee> */}

                {/* third_row */}
                {/* <Marquee autoFill pauseOnClick gradient gradientWidth={50}> */}
                <Tech tech={third_row} />
                {/* </Marquee> */}

            </div>
        </div>
    )
}

