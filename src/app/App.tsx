import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

// import components
import Home from "../app/pages/home/Home";
import About from "../app/pages/about/About";
import Error from "../app/pages/error/Error";
import Works from "../app/pages/projects/Projects";
import Contact from "../app/pages/contact/Contact";

const App = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/works" element={<Works />} />

                {/* error page */}
                <Route path="*" element={<Error />} />
            </Routes>
        </AnimatePresence>
    );
}

export default App;