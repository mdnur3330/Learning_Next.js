"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()
    console.log(pathName);
     if (pathName.includes("login")) {
        return null;
    }

    return (
        <div>
            <ul className='text-center flex gap-5 justify-center bg-gray-500 py-4'>
                <Link href='/'>
                <li>home</li>
                </Link>
               
                <Link href="/manue">
                 <li>manue</li>
                </Link>
                <Link href='/servises'>
                <li>servises</li>
                </Link>
                <Link href='/about'>
                <li>about</li>
                </Link>
            </ul>
        </div>
    )  
};

export default Navbar;