import { Outlet } from "react-router-dom";

// import component
// import BackToTopButton from "./components/common/button/BackToTopButton";
// import ToggleModeButton from "./components/common/button/ToggleModeButton";

const App = () => {
    return (
        <div className="min-h-screen dark:bg-black dark:text-white">
            <Outlet />

            {/* <FloatingMenu /> */}
            {/* <div className=" flex flex-col gap-[0.5rem] fixed bottom-[var(--padding-x)] right-[var(--padding-x)] " >
                <BackToTopButton />
                <ToggleModeButton />
            </div> */}
        </div>
    );
}

export default App;
