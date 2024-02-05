import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div className="min-h-screen px-[3rem] py-[2rem]">
            <Outlet />
        </div>
    );
}

export default App;
