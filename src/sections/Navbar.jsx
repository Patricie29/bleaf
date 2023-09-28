'use client'

import React, { useState } from 'react';
import leafGreenLogo from '@/../public/leafgreen.png'
import Image from 'next/image';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <>
            <nav className="bg-secondary-green border-gray-200 w-[100vw] top-0 z-40 absolute md:sticky">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between md:justify-center mx-auto">
                    <a href='/' className="flex items-center md:hidden">
                        <Image src={leafGreenLogo} alt='logo' width={65} height={17} className='self-center whitespace-nowrap pb-1 md:pb-0' />
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
                    <div className={`w-full md:flex md:justify-center md:items-center md:my-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-2 md:p-0 mt-4 border border-gray-100 m-5 md:m-0 rounded-lg md:flex-row md:space-x-20 md:mt-0 md:border-0 text-center md:items-center">
                            <li className='relative md:nav'>
                                <a href="#services" className="block py-2 pl-3 pr-4 text-white font-light rounded md:bg-transparent md:p-0 cursor-pointer transform
                                        transition duration-300 hover:scale-110" aria-current="page">SERVICES</a>
                            </li>
                            <li className='relative md:nav'>
                                <a href="#maintenance" className="block py-2 pl-3 pr-4 text-white font-light rounded md:bg-transparent md:p-0 cursor-pointer transform
                                        transition duration-300 hover:scale-110" aria-current="page">MAINTENANCE</a>
                            </li>
                            <li className='relative md:nav'>
                                <a href="#about" className="block py-2 pl-3 pr-4 text-white  font-light rounded md:bg-transparent md:p-0 cursor-pointer transform
                                        transition duration-300 hover:scale-110" aria-current="page">ABOUT</a>
                            </li>
                            <li className='relative md:nav'>
                                <a href="#contact" className="block py-2 pl-3 pr-4 text-white font-light rounded md:bg-transparent md:p-0 cursor-pointer transform
                                        transition duration-300 hover:scale-110" aria-current="page">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
};

export default Navbar;
