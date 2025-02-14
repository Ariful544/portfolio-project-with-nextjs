'use client'
import { BtnList } from '@/app/data';
import React from 'react';
import NavButton from './NavButton';

const Nav = () => {
    const angleIncrement = 360 / BtnList.length;

    return (
        <div className='w-full fixed h-screen flex items-center justify-center overflow-hidden'>
            <div className=' w-max hover:pause  relative flex justify-center items-center group animate-spin-slow'>
                {
                    BtnList.map((btn, index) => {
                        const angleRed = (index * angleIncrement * Math.PI) / 180;
                        const radius = 'calc(20vw - 1rem)';
                        const x = `calc(${radius}*${Math.cos(angleRed)})`;
                        const y = `calc(${radius}*${Math.sin(angleRed)})`;
                        return <NavButton key={btn.label} x={x} y={y} {...btn}/>
                    })
                }
            </div>
        </div>
    );
};

export default Nav;