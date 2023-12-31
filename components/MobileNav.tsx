import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, EnterIcon, Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';


type Props = {
    nav1: string,
    nav2: string,
    nav3: string,
    nav4: string,
    nav5: string,
    nav6: string,
    nav7: string,
    navnavnav: any
}

const MobileNav = ({ nav1, nav2, nav3, nav4, nav5, nav6, nav7, navnavnav }: Props) => {

    return (
        <>
            <div className='absolute flex justify-center top-0 right-0 transition-all duration-75 ease-in-out backdrop-blur-md w-screen h-screen z-[9]'>
                <div id='back-ground' className='fixed flex flex-col  w-full h-screen rounded-md z-[4] bounce-in-right shadow-md p-5'>
                    <div id='loginLogo' className='flex items-center justify-between p-3'>
                        <div>
                            <span className='font-semibold text-blue9'>Then</span>
                            <span className='font-semibold text-red9'>Pixels</span>
                        </div>
                        <div className='cursor-pointer z-[100]'>
                            <button
                                className=" rounded-full w-[35px] h-[35px] inline-flex items-center justify-center shadow-[0_2px_10px] shadow-blackA7 outline-none transition duration-150 ease-in-out hover:opacity-80"
                                aria-label="Customise options"
                            // onClick={() => setDisplay('hidden')}
                            >
                                <span id='stroke-color'>
                                    <Cross1Icon />
                                </span>
                            </button>
                        </div>
                    </div>
                    {/* Content */}
                    <div className='flex flex-col justify-between h-full'>
                        <div>
                            <Link
                                className='flex justify-between items-center transition duration-150 ease-in-out hover:opacity-80 font-light border-dashed border-b-[1px] p-3 my-8 '
                                href='/'>
                                <div id='custom-text' className=' font-medium'>{nav1}</div>
                                <ChevronRightIcon />
                            </Link>
                            <Link
                                className='flex justify-between items-center transition duration-150 ease-in-out hover:opacity-80 font-light border-dashed border-b-[1px] p-3 my-8 '
                                href='/dashboard'>
                                <div id='custom-text' className=' font-medium'>{nav2}</div>
                                <ChevronRightIcon />
                            </Link>
                            <Link
                                className='flex justify-between items-center transition duration-150 ease-in-out hover:opacity-80 font-light border-dashed border-b-[1px] p-3 my-8 '
                                href='/about'>
                                <div id='custom-text' className=' font-medium'>{nav3}</div>
                                <ChevronRightIcon />
                            </Link>
                            <Link
                                className='flex justify-between items-center transition duration-150 ease-in-out hover:opacity-80 font-light border-dashed border-b-[1px] p-3 my-8 '
                                href='/showcase'>
                                <div id='custom-text' className=' font-medium'>{nav4}</div>
                                <ChevronRightIcon />
                            </Link>
                            <Link
                                className='flex justify-between items-center transition duration-150 ease-in-out hover:opacity-80 font-light border-dashed border-b-[1px] p-3 my-8'
                                href='/contact'>
                                <div id='custom-text' className=' font-medium'>{nav5}</div>
                                <ChevronRightIcon />
                            </Link>
                            <Link
                                className='flex justify-between items-center transition duration-150 ease-in-out hover:opacity-80 font-light border-dashed border-b-[1px] p-3 my-8 '
                                href='/signin'>
                                <div id='custom-text' className=' font-medium'>{nav6}</div>
                                <ChevronRightIcon />
                            </Link>
                            <Link
                                className='flex justify-between items-center transition duration-150 ease-in-out hover:opacity-80 font-light border-dashed border-b-[1px] p-3  my-8'
                                href='/contact'>
                                <div id='custom-text' className=' font-medium'>{nav7}</div>
                                <EnterIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNav