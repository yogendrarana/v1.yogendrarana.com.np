import { Outlet } from "react-router-dom";

// import component
import FloatingButtons from "./components/common/button/FloatingButtons";

const App = () => {
    return (
        <div className="min-h-screen dark:bg-black dark:text-white">
            <Outlet />

            {/* <FloatingMenu /> */}
            <FloatingButtons />
        </div>
    );
}

export default App;
