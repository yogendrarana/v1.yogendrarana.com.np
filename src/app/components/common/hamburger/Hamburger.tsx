import React from 'react'

// import store
import { useUtilStore } from '../../../../store/useUtilStore';

const Hamburger: React.FC = () => {
    const { isMenuOpen } = useUtilStore();

    return (
        <button className='h-[20px] flex flex-col justify-center gap-[10px] z-10' >
            <span
                className={`
                    w-[30px] h-[2px] bg-white rounded-full 
                    transition-all ease-in-out origin-center duration-500 
                    ${isMenuOpen ? "translate-y-[6px] rotate-45" : "rotate-0"}
                `}
            />

            <span
                className={`
                    w-[30px] h-[2px] bg-white rounded-full 
                    transition-all ease-in-out origin-center duration-500 
                    ${isMenuOpen ? "-translate-y-[6px] -rotate-45" : "rotate-0"}
                `}
            />
        </button>
    )
}

export default Hamburger;