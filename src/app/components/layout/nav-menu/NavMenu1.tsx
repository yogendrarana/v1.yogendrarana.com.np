import React from 'react'
import { motion } from 'framer-motion'


// import hooks
import useMenu from '@/hooks/useMenu'


// import store
import { useUtilStore } from '@/store/useUtilStore'


// import components
import Link from 'next/link'


export default function NavMenu1() {
    const { toggleHamburgerMenu } = useUtilStore();

    // nav menu 
    const menu = useMenu();

    // menu variants
    const menuVariants = {
        initial: { scaleY: 0, },
        animate: { scaleY: 1, transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0], }, },
        exit: { scaleY: 0, transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1], }, },
    }

    // menu container variants
    const staggerVariants = {
        initial: { transition: { staggerChildren: 0.1, staggerDirection: -1, }, },
        open: { transition: { staggerChildren: 0.1, staggerDirection: 1, }, },
    }

    return (
        <motion.div
            variants={menuVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className={`
                h-screen w-full
                bg-[#24252a] text-white 
                fixed top-0 left-0 z-10 origin-top
            `}
        >
            <div className='h-full w-full relative'>
                <motion.div
                    variants={staggerVariants}
                    initial='initial'
                    animate='open'
                    exit='initial'
                    className='h-full w-full flex flex-col justify-center items-center gap-[1rem]'
                >
                    {
                        menu.map((menu_item, index) => (
                            <div onClick={toggleHamburgerMenu} key={index} className='overflow-hidden'>
                                <NavMenuItem label={menu_item.label} href={menu_item.href} />
                            </div>
                        ))
                    }
                </motion.div>
            </div >
        </motion.div >
    )
}


// nav menu item component
const NavMenuItem = ({ label, href }: { label: string, href: string }) => {

    // menu item variants
    const menuItemVariants = {
        initial: { y: "30vh", transition: { ease: [0.37, 0, 0.63, 1], }, },
        open: { y: 0, transition: { duration: 1.5, ease: [0, 0.55, 0.45, 1] }, },
    }

    return (
        <motion.div variants={menuItemVariants} >
            <Link href={href} className='block text-[3rem]' >
                {label}
            </Link>
        </motion.div>
    )
}