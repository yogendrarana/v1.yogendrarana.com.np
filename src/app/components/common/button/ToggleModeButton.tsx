import { useEffect, useState } from "react";

const ToggleModeButton = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const handleToggleTheme = () => {
        const html = document.querySelector('html');
        if (html) {
            if (theme === 'light') {
                html.classList.add('dark');
                setTheme('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                html.classList.remove('dark');
                setTheme('light');
                localStorage.setItem('theme', 'light');
            }
        }
    }

    useEffect(() => {
        const theme = localStorage.getItem('theme') as 'light' | 'dark';
        if (theme) {
            setTheme(theme);
        }
    }, []);

    return (
        <div
            onClick={handleToggleTheme}
            className="
                h-[4rem] w-[4rem] border rounded-full
                grid place-items-center cursor-pointer
                shadow-lg bg-white
                dark:bg-white dark:text-black
            "
        >
            {
                theme === 'light' ? (
                    <i className="fas fa-sun"> </i>
                ) : (
                    <i className="fas fa-moon"> </i>
                )
            }
        </div>
    )
}

export default ToggleModeButton;