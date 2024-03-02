// import components
import Projects from "../projects/Projects";
import Stack from "../../../components/layout/stack/Stack";
import Banner from "../../../components/layout/banner/Banner";
import Career from "../../../components/layout/career/Career";
import Footer from "../../../components/layout/footer/Footer";


const Home = () => {
    return (
        <div className="home">
            <div className="banner">
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