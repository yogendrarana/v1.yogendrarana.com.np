import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// import components
import App from "../app/App";
import Home from "../app/pages/home/Home";
import About from "../app/pages/about/About";
import Works from "../app/pages/projects/Projects";
import Contact from "../app/pages/contact/Contact";
import Error from "../app/pages/error/Error";

// create routes
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/works" element={<Works />} />

            {/* error page */}
            <Route path="*" element={<Error />} />
        </Route>
    )
);