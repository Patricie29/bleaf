'use client'

import React, { useEffect, useRef, useState } from 'react';
import logo from '@/../public/logo.png'
import Image from 'next/image';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };



    return (
        <>
            <nav className="bg-[#96aca3] border-gray-200 w-[100vw] top-0 z-40 sticky">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between md:justify-center mx-auto">
                    <a href='/' className="flex items-center md:hidden">
                        <Image src={logo} width={100} height={40} className='self-center whitespace-nowrap pb-1 md:pb-0' />
                    </a>
                    <button
                        onClick={toggleMobileMenu}
                        type="button"
                        className="inline-flex items-center p-2 mr-3 w-10 h-10 justify-center text-sm text-zinc-200 rounded-lg md:hidden focus:outline-none focus:ring-[0.5px] focus:ring-zinc-200"
                        aria-controls="navbar-default"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`w-full md:flex md:justify-center md:items-center ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-2 md:p-0 mt-4 border border-gray-100 m-5 md:m-0 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-center md:items-center">
                            <li>
                                <a href="#services" className="block py-2 pl-3 pr-4 text-white font-light rounded md:bg-transparent md:p-0 cursor-pointer" aria-current="page">SERVICES</a>
                            </li>
                            <li>
                                <a href="#maintenance" className="block py-2 pl-3 pr-4 text-white font-light rounded md:bg-transparent md:p-0 cursor-pointer" aria-current="page">MAINTENANCE</a>
                            </li>
                            <li className='hidden md:block'>
                                <a href="#home" className="flex items-center">
                                    <Image src={logo} width={100} height={40} className='self-center whitespace-nowrap pb-1 md:pb-0' />
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="block py-2 pl-3 pr-4 text-white font-light rounded md:bg-transparent md:p-0 cursor-pointer" aria-current="page">ABOUT</a>
                            </li>
                            <li>
                                <a href="#contact" className="block py-2 pl-3 pr-4 text-white font-light rounded md:bg-transparent md:p-0 cursor-pointer" aria-current="page">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
};

export default Navbar;
