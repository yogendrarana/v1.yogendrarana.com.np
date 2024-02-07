
// import components
import Projects from "../projects/Projects";
import Stack from "../../components/layout/stack/Stack";
import Header from "../../components/layout/header/Header";
import Banner from "../../components/layout/banner/Banner";
import Footer from "../../components/layout/footer/Footer";
import Career from "../../components/layout/career/Career";

const Home = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Banner />
            </div>
            <div className="mt-[5rem]">
                <Career />
            </div>
            <div className="mt-[5rem]">
                <Projects />
            </div>
            <div className="mt-[5rem]">
                <Stack />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;