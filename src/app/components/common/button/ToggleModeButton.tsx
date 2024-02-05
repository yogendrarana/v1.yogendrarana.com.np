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
                h-[3rem] w-[3rem] border rounded-full
                grid place-items-center cursor-pointer
                fixed bottom-[2rem] right-[2rem]
                dark:bg-white dark:text-black
            "
        >
            {
                theme === 'light' ? (
                    <i className="fas fa-moon"> </i>
                ) : (
                    <i className="fas fa-sun"> </i>
                )
            }
        </div>
    )
}

export default ToggleModeButton