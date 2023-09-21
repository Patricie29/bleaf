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
                <div className='flex flex-row justify-evenly items-center'>
                    <Image src={bLeafLogo} className='h-[110px] w-[130px] pb-3' alt='logo' />

                    <div>
                        <div className='waves'>
                            <div className='wave' id='wave1'></div>
                            <div className='wave' id='wave2'></div>
                            <div className='wave' id='wave3'></div>
                            <div className='wave' id='wave4'></div>
                        </div>

                    </div>
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
                            <li className="text-2xl mx-4 inline-block transition-transform hover:-translate-y-[7px]">
                                <a href="#"><CiFacebook /></a>
                            </li>
                            <li className="text-2xl mx-4 inline-block transition-transform hover:-translate-y-[7px]">
                                <a href="#"><AiOutlineInstagram /></a>
                            </li>
                        </div>

                    </ul>

                </div>
                <div className='border-zinc-100 border-opacity-20 border-t-[1px] border-dotted'>
                    <p className="text-xs flex justify-center py-1"> © 2023 All Rights Reserved </p>
                </div>
            </footer >
        </>
    )
}

export default Footer;