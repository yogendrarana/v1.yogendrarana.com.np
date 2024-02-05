// import images
import GitHub from "../assets/images/github.png";
import Twitter from "../assets/images/twitter.png";
import LinkedIn from "../assets/images/linkedin.png";

interface Social {
    title: string;
    icon: string;
    fontawesome_icon: string;
    url: string;
}

const useSocials = (): Social[] => {
    const socials: Social[] = [
        {
            title: "GitHub",
            icon: GitHub,
            fontawesome_icon: "fa-brands fa-github",
            url: "https://github.com/yogendrarana"
        },
        {
            title: "LinkedIn",
            icon: LinkedIn,
            fontawesome_icon: "fa-brands fa-linkedin-in",
            url: "https://www.linkedin.com/in/yogendra-rana"
        },
        {
            title: "Twitter",
            icon: Twitter,
            fontawesome_icon: "fa-brands fa-twitter",
            url: "https://twitter.com/yoogendra_rana"
        },
    ];

    return socials;
}

export default useSocials;
