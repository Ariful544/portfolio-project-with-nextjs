'use client'
import { Github, Home, Linkedin, Notebook, Palette, Phone, Twitter, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const getIcon = (icon) => {
    switch (icon) {
        case 'home':
            return <Home className='w-full h-auto' strokeWidth={1.5} />
        case 'about':
            return <User className='w-full h-auto' strokeWidth={1.5} />
        case 'projects':
            return <Palette className='w-full h-auto' strokeWidth={1.5} />
        case 'contact':
            return <Phone className='w-full h-auto' strokeWidth={1.5} />
        case 'github':
            return <Github className='w-full h-auto' strokeWidth={1.5} />
        case 'LinkedIn':
            return <Linkedin className='w-full h-auto' strokeWidth={1.5} />
        case 'twitter':
            return <Twitter className='w-full h-auto' strokeWidth={1.5} />
        case 'resume':
            return <Notebook className='w-full h-auto' strokeWidth={1.5} />
        default:
            return <Home className='w-full h-auto' strokeWidth={1.5} />
    }
}
const NavButton = ({ x, y, label, link, icon, newTab }) => {
    return (
        <div className='absolute  !cursor-pointer z-50' style={{ transform: `translate(${x},${y})` }}>
            <Link href={link} target={newTab ? '_blank' : '_self'} className='text-foreground rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm' aria-label={label} name={label}>
                <span className='relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:text-accent group-hover:pause'>
                    {getIcon(icon)}
                    <span className='bg-transparent peer absolute top-0 left-0 w-full h-full'></span>
                    <span  className='peer-hover:block px-2 py-1 left-full mx-2 top-1/2  hidden absolute bg-background text-foreground text-sm shadow-lg whitespace-nowrap -translate-y-1/2'>
                        {label}
                    </span>
                </span>
            </Link>
        </div>
    );
};

export default NavButton;