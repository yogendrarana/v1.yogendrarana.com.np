interface Social {
    title: string;
    fontawesome_icon: string;
    url: string;
}

const useSocials = (): Social[] => {
    const socials: Social[] = [
        {
            title: "GitHub",
            fontawesome_icon: "fa-brands fa-github",
            url: "https://github.com/yogendrarana"
        },
        {
            title: "LinkedIn",
            fontawesome_icon: "fa-brands fa-linkedin-in",
            url: "https://www.linkedin.com/in/yogendra-rana"
        },
        {
            title: "Twitter",
            fontawesome_icon: "fa-brands fa-twitter",
            url: "https://twitter.com/yoogendra_rana"
        },
    ];

    return socials;
}

export default useSocials;
