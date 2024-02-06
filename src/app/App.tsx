import { Outlet } from "react-router-dom";

// import component
// import FloatingMenu from "./components/layout/nav/FloatingMenu";
import ToggleModeButton from "./components/common/button/ToggleModeButton";

const App = () => {
    return (
        <div className="min-h-screen dark:bg-black dark:text-white">
            <Outlet />

            {/* <FloatingMenu /> */}

            <ToggleModeButton />
        </div>
    );
}

export default App;
