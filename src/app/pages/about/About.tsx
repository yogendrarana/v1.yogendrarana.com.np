import Transition from "../../components/common/transition/Transition";

const AboutPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-[5rem] font-bold">About</h1>
            <p className="mt-4">This is the about page.</p>
        </div>
    )
}

const About = Transition(AboutPage);
export default About;