import { useState } from "react";

// import data
import { MY_DATA } from "../../../data/my_data";

// import components
import Header from "../../../components/layout/header/Header";
import Footer from "../../../components/layout/footer/Footer";
import Accordion from "../../../components/common/accordion/Accordion";
import Transition from "../../../components/common/transition/Transition";


const AboutPage = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | false>(false);
    const summaryParts = MY_DATA.generalSummary.split('<br />');

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />

            <div className="px-[var(--px)] sm:px-[var(--md-px)] flex flex-col">

                {/* heading */}
                <div className="py-[4rem] border-b">
                    <div className="text-[5rem] font-bold uppercase">
                        <p>Learn</p>
                        <p className="">About Me!</p>
                    </div>
                </div>

                {/* About detail */}
                <div className="py-[4rem] flex gap-[2.5rem] cursor-pointers sm:flex-col-reverse">
                    <div className="mt-[1rem] text-[1.5rem] text-justify">
                        {
                            summaryParts.map((part, index) => {
                                return (
                                    <p key={index} className="last:mt-[2rem]">{part}</p>
                                )
                            })
                        }
                    </div>
                    <img src={MY_DATA.avatarUrl} alt="about" className="h-[15rem] w-[15rem] object-cover rounded-[1rem] sm:w-full sm:h-[30rem]" />
                </div>

                {/* faq */}
                <div className="flex flex-col gap-[2rem]">
                    <h1 className="text-[2rem] font-bold border-b">Want to know more?</h1>
                    <div className="flex flex-col gap-[2rem]">
                        {
                            MY_DATA.faq.map((faq, index) => {
                                return (
                                    <div key={index} onClick={() => setActiveAccordion(index)}>
                                        <Accordion question={faq.question} answer={faq.answer} activeAccordion={activeAccordion} i={index} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>

            {/* footer */}
            <Footer />
        </div>
    )
}

const About = Transition(AboutPage);
export default About