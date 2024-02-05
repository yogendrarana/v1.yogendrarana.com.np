"use client";

import React from 'react'

// import store
import { useUtilStore } from '../../../../store/useUtilStore';

const Hamburger: React.FC = () => {
    const { isHamburgerMenuClicked } = useUtilStore();

    return (
        <div className='h-[20px] w-[20px] flex flex-col justify-center gap-[10px] z-50 border' >
            <span
                className={`
                    w-[30px] h-[2px] bg-black rounded-full 
                    transition-all ease-in-out origin-center duration-500 
                    ${isHamburgerMenuClicked ? "translate-y-[6px] rotate-45" : "rotate-0"}
                `}
            />

            <span
                className={`
                    w-[30px] h-[2px] bg-black rounded-full 
                    transition-all ease-in-out origin-center duration-500 
                    ${isHamburgerMenuClicked ? "-translate-y-[6px] -rotate-45" : "rotate-0"}
                `}
            />
        </div>
    )
}

export default Hamburger;