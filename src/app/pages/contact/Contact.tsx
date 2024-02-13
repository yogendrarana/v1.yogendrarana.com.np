import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import Transition from "../../components/common/transition/Transition";
import { Link } from "react-router-dom";

const ContactPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <div className="px-[var(--px)] sm:px-[var(--md-px)] flex flex-col">
                <div className="py-[4rem] border-b">
                    <div className="text-[5rem] uppercase">
                        <p>Lets's Work</p>
                        <p className="">Together!</p>
                    </div>
                </div>

                <div className="py-[4rem] cursor-pointer border-b">
                    <p className="text-[1.75rem]">Get in touch by email:</p>
                    <button className="
                            mt-[1rem]
                            inline-block
                            relative 
                            font-bold
                            text-[1.5rem] 
                            before:content-['']
                            before:py-[1rem]
                            before:absolute before:bottom-[-0.5rem] before:left-0
                            before:w-0
                            before:hover:w-full
                            before:border-b-2
                            before:border-black

                            
                            before:transition-all
                            before:ease-in-out
                            before:duration-500
                        "
                    >yogendrarana4321@gmail.com</button>
                </div>

                <div className="py-[4rem]">
                    <p className="text-[1.75rem]">Or you can follow me on:</p>
                    <div className="mt-[1rem] text-[1.5rem] font-bold flex flex-wrap gap-[3rem] sm:flex-col sm:gap-[1rem]">
                        <Link to="#" className="">GitHub</Link>
                        <Link to="#" className="">LinkedIn</Link>
                        <Link to="#" className="">Instagram</Link>
                        <Link to="#" className="">Twitter</Link>
                    </div>
                </div>
            </div>

            {/* footer */}
            <Footer />

        </div>



    )
}

const Contact = Transition(ContactPage);
export default Contact