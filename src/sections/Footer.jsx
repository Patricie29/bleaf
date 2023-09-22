import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { AiOutlineInstagram } from 'react-icons/ai'
import { SlLocationPin } from 'react-icons/sl'
import { BsTelephone } from 'react-icons/bs'
import Image from 'next/image';
import bLeafLogo from '../../public/logo.png'

const Footer = () => {


    return (
        <>
            <footer className='relative w-[100%] min-h-[100px] pt-3 bg-secondary-green text-zinc-100'>
                <div className='flex justify-between mx-auto max-w-screen-lg'>
                    <Image src={bLeafLogo} className='h-[110px] w-[130px] pb-3' alt='logo' />

                    <ul className="flex justify-center items-center my-2 flex-wrap">
                        <div>
                            <li className="text-2xl mx-4 flex justify-center items-center gap-3 pb-3">
                                <BsTelephone />
                                <p>029 393 9392</p>
                            </li>
                            <li className="text-2xl mx-4 flex justify-center items-center gap-3">
                                <SlLocationPin />
                                <p>Queenstown</p>
                            </li>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <li className="text-3xl mx-4 inline-block transition-transform hover:-translate-y-[7px]">
                                <a href="https://www.facebook.com/b.leafQT" target='blank'><CiFacebook /></a>
                            </li>
                            <li className="text-3xl mx-4 inline-block transition-transform hover:-translate-y-[7px]">
                                <a href="#" target='blank'><AiOutlineInstagram /></a>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className='border-zinc-100 border-opacity-20 border-t-[1px] border-dotted'>
                    <a href="https://patricieb.com/" target='blank' className="text-xs flex justify-center py-1">© 2023 Created by Patricie Bakosova</a>
                </div>
            </footer >
        </>
    )
}

export default Footer;