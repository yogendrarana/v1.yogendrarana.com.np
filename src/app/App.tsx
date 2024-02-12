import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div className="min-h-screen dark:bg-black dark:text-white">
            <Outlet />
        </div>
    );
}

export default App;
