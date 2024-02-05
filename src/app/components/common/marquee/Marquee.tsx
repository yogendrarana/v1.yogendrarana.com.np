"use client";

import React from 'react'

// define prop types
type PropType = {
    children: React.ReactNode
}

const Marquee: React.FC<PropType> = ({ children }) => {
    return (
        <div className='w-full'>
            {children}
        </div>
    )
}

export default Marquee;