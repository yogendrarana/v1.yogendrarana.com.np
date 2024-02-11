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

// define rows
const first_row = [
    { name: "JavaScript", icon: JS },
    { name: "TypeScript", icon: TS },
    { name: "Go", icon: GO },
    { name: "React", icon: React },
    { name: "Next", icon: Next },
    { name: "Node", icon: Node },
    { name: "Express", icon: Express },
    { name: "Nest", icon: Nest },
    { name: "Gin", icon: Gin },
]
const second_row = [
    { name: "PostgreSQL", icon: Postgres },
    { name: "MongoDB", icon: Mongo },
    { name: "MySQL", icon: Mysql },
    { name: "Redis", icon: Redis },
    { name: "Prisma", icon: Prisma },
    { name: "Drizzle", icon: Drizzle },
    { name: "Git", icon: Git },
    { name: "Docker", icon: Docker },
    { name: "Nginx", icon: Nginx }
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
        <div className='min-h-[75vh] px-[var(--padding-x)] flex flex-col justify-center text-center md:px-[calc(var(--padding-x)-20px)]'>
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

