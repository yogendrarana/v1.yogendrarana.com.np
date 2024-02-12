import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'


// import hooks
import useMenu from '@/hooks/useMenu'

// import store
import { useUtilStore } from '@/store/useUtilStore'

// import components
import Curve from '@/components/util/curve/Curve'


export default function NavMenu2() {
    const { toggleHamburgerMenu } = useUtilStore();

    // nav menu 
    const menu_items = useMenu();

    const menuSlide = {
        initial: { x: "calc(100% + 100px)" },
        enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
        exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
    }

    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="h-screen bg-black fixed top-0 right-0 text-white"
        >
            <div className="h-full p-[100px] flex flex-col justify-between">
                <div
                    // onMouseLeave={() => { setSelectedIndicator(pathname) }}
                    className="mt-[80px] flex flex-col text-[56px] gap-[12px]"
                >
                    <div className="mt-[40px] text-[#999999] border-b uppercase text-[12px]">
                        <p>Navigation</p>
                    </div>
                    {
                        menu_items.map((menu, index) => (
                            <div key={index}>
                                <Link href={menu.href} className='block text-[3rem]' > {menu.label} </Link>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* curve */}
            <Curve />
        </motion.div>
    )
}