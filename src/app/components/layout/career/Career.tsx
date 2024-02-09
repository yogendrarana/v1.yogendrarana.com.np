const Career = () => {
    const career = [
        {
            start_date: "July, 2023",
            end_date: "...present",
            company: "Rangin Technology",
            role: "Full Stack Developer",
            description: "I worked on the Google Search team, where I was responsible for the development of the search engine's user interface.",
            website: "https://www.google.com",
            companyLogo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        },
        {
            start_date: "May, 2023",
            end_date: "July, 2023",
            company: "Nipuna Sewa",
            role: "React JS Developer",
            description: "I worked on the Facebook Ads team, where I was responsible for the development of the ads manager.",
            website: "https://www.facebook.com",
            companyLogo: "https://www.facebook.com/images/fb_icon_325x325.png",
        },
    ];

    return (
        <div className="min-h-[75vh] px-[var(--padding-x)] flex flex-col justify-center gap-[1rem]">
            <div>
                <h2 className='text-[5rem]'>Career</h2>
            </div>
            <div className='flex flex-col gap-[2rem] text-[1.8rem]'>
                {
                    career.map((exp, index) => {
                        return (
                            <div
                                key={index}
                                className="group flex flex-col cursor-pointer text-gray-400 hover:text-black dark:hover:text-white duration-300"
                            >
                                <div className="flex justify-between">
                                    <div className='whitespace-nowrap]'>{exp.company}</div>
                                    <div className='whitespace-nowrap text-[1.25rem]'>{exp.start_date}</div>
                                </div>


                                <div className="flex justify-between">
                                    <div className='whitespace-nowrap text-[1.25rem]'>{exp.role}</div>
                                    <div className='whitespace-nowrap text-[1.25rem]'>{exp.end_date}</div>
                                </div>

                                <hr className="flex-grow min-w-[10rem] border-gray-400 group-hover:border-black dark:border-gray-400 dark:group-hover:border-white" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Career;
