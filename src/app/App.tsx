import { Outlet } from "react-router-dom";

// import component
import ToggleModeButton from "./components/common/button/ToggleModeButton";

const App = () => {
    return (
        <div className="min-h-screen px-[3rem] py-[2rem] dark:bg-black dark:text-white">
            <Outlet />

            <ToggleModeButton />
        </div>
    );
}

export default App;
