import ShinyText from '@/components/ShinyText'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ShowcaseBox from './ShowcaseBox'
import CompanyLogo from './CompanyLogo'

type Props = {}

const Showcase = (props: Props) => {
    return (
        <>
            <div className='text-sm lg:text-base p-10 lg:p-20 w-full'>
                <section className='flex'>
                    <div className='focus-in-contract-bck text-center lg:text-left'>
                        <ShinyText text={
                            <div className='text-[45px] md:text-[61.9px] lg:text-[90px]'>
                                Where <span className='text-blue9'>vision <br /></span> becomes <span className='text-red9'>reality,</span> welcome to our showcase.
                            </div>
                        }
                        />
                    </div>
                    <div className='hidden lg:flex flex-col gap-20  w-full'>
                        <div className='flex justify-between w-full'>
                            <CompanyLogo
                                svg={
                                    <svg className='slide-in-out' xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 512 512" id="snapchat">
                                        <rect width="512" height="512" fill="none">
                                        </rect>
                                        <polygon fill="#fffc01" points="256 106 321 143 386 181 386 256 386 331 321 369 256 406 191 369 126 331 126 256 126 181 191 143">
                                        </polygon>
                                        <polygon fill="#ffdd01" points="256 406 191 369 126 331 126 256 126 181 191 143 256 106">
                                        </polygon>
                                        <polygon fill="#fffc01" points="256 131 310 162 364 193 364 256 364 319 310 350 256 381 202 350 148 319 148 256 148 193 202 162">
                                        </polygon>
                                        <path fill="#030200" d="M218 289c2,3 -1,8 7,6 4,0 8,-1 12,1 3,2 5,4 8,5 3,2 6,3 11,3 10,1 12,-4 19,-8 3,-1 8,-1 12,-1 7,2 5,-1 7,-6 3,-1 13,-2 13,-6 1,-6 -8,0 -19,-15 -8,-12 0,-10 6,-13 4,-3 4,-7 1,-8 -5,-3 -7,1 -11,0 0,-10 2,-18 -3,-26 -4,-6 -9,-11 -18,-13 -10,-2 -19,1 -25,5 -11,8 -11,18 -10,31 0,1 0,3 0,3 -2,2 -8,-4 -12,1 -3,4 2,7 5,8 5,1 8,2 5,8 -7,15 -20,15 -21,17 -2,1 0,4 2,5 3,2 10,2 11,3z">
                                        </path>
                                        <path fill="#fefefe" d="M207 282c2,5 12,3 14,6 0,1 1,4 1,5 3,0 6,-1 10,-1 11,1 12,10 24,10 12,0 13,-9 24,-10 4,0 7,1 10,1 2,-6 1,-6 6,-7 3,0 8,-1 9,-4 -3,-1 -6,0 -12,-5 -4,-3 -15,-15 -9,-21 3,-2 11,-3 11,-6 -3,-5 -8,3 -14,-1 0,-8 2,-18 -1,-25 -3,-6 -8,-10 -14,-12 -7,-3 -17,-2 -23,1 -5,3 -11,8 -12,15 -1,4 -1,8 -1,12 0,3 1,5 1,7 0,1 0,3 -4,3 -2,0 -4,0 -5,-1 -2,-1 -5,0 -5,1 1,3 7,4 9,5 8,4 2,12 -2,17 -2,3 -4,5 -7,6 -5,4 -7,3 -10,4z">
                                        </path>
                                    </svg>
                                }
                            />
                            <CompanyLogo
                                svg={
                                    <svg className='slide-in-out' xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 512 512" id="snapchat">
                                        <rect width="512" height="512" fill="none">
                                        </rect>
                                        <polygon fill="#fffc01" points="256 106 321 143 386 181 386 256 386 331 321 369 256 406 191 369 126 331 126 256 126 181 191 143">
                                        </polygon>
                                        <polygon fill="#ffdd01" points="256 406 191 369 126 331 126 256 126 181 191 143 256 106">
                                        </polygon>
                                        <polygon fill="#fffc01" points="256 131 310 162 364 193 364 256 364 319 310 350 256 381 202 350 148 319 148 256 148 193 202 162">
                                        </polygon>
                                        <path fill="#030200" d="M218 289c2,3 -1,8 7,6 4,0 8,-1 12,1 3,2 5,4 8,5 3,2 6,3 11,3 10,1 12,-4 19,-8 3,-1 8,-1 12,-1 7,2 5,-1 7,-6 3,-1 13,-2 13,-6 1,-6 -8,0 -19,-15 -8,-12 0,-10 6,-13 4,-3 4,-7 1,-8 -5,-3 -7,1 -11,0 0,-10 2,-18 -3,-26 -4,-6 -9,-11 -18,-13 -10,-2 -19,1 -25,5 -11,8 -11,18 -10,31 0,1 0,3 0,3 -2,2 -8,-4 -12,1 -3,4 2,7 5,8 5,1 8,2 5,8 -7,15 -20,15 -21,17 -2,1 0,4 2,5 3,2 10,2 11,3z">
                                        </path>
                                        <path fill="#fefefe" d="M207 282c2,5 12,3 14,6 0,1 1,4 1,5 3,0 6,-1 10,-1 11,1 12,10 24,10 12,0 13,-9 24,-10 4,0 7,1 10,1 2,-6 1,-6 6,-7 3,0 8,-1 9,-4 -3,-1 -6,0 -12,-5 -4,-3 -15,-15 -9,-21 3,-2 11,-3 11,-6 -3,-5 -8,3 -14,-1 0,-8 2,-18 -1,-25 -3,-6 -8,-10 -14,-12 -7,-3 -17,-2 -23,1 -5,3 -11,8 -12,15 -1,4 -1,8 -1,12 0,3 1,5 1,7 0,1 0,3 -4,3 -2,0 -4,0 -5,-1 -2,-1 -5,0 -5,1 1,3 7,4 9,5 8,4 2,12 -2,17 -2,3 -4,5 -7,6 -5,4 -7,3 -10,4z">
                                        </path>
                                    </svg>
                                }
                            />
                            <CompanyLogo
                                svg={
                                    <svg className='slide-in-out' xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 512 512" id="snapchat">
                                        <rect width="512" height="512" fill="none">
                                        </rect>
                                        <polygon fill="#fffc01" points="256 106 321 143 386 181 386 256 386 331 321 369 256 406 191 369 126 331 126 256 126 181 191 143">
                                        </polygon>
                                        <polygon fill="#ffdd01" points="256 406 191 369 126 331 126 256 126 181 191 143 256 106">
                                        </polygon>
                                        <polygon fill="#fffc01" points="256 131 310 162 364 193 364 256 364 319 310 350 256 381 202 350 148 319 148 256 148 193 202 162">
                                        </polygon>
                                        <path fill="#030200" d="M218 289c2,3 -1,8 7,6 4,0 8,-1 12,1 3,2 5,4 8,5 3,2 6,3 11,3 10,1 12,-4 19,-8 3,-1 8,-1 12,-1 7,2 5,-1 7,-6 3,-1 13,-2 13,-6 1,-6 -8,0 -19,-15 -8,-12 0,-10 6,-13 4,-3 4,-7 1,-8 -5,-3 -7,1 -11,0 0,-10 2,-18 -3,-26 -4,-6 -9,-11 -18,-13 -10,-2 -19,1 -25,5 -11,8 -11,18 -10,31 0,1 0,3 0,3 -2,2 -8,-4 -12,1 -3,4 2,7 5,8 5,1 8,2 5,8 -7,15 -20,15 -21,17 -2,1 0,4 2,5 3,2 10,2 11,3z">
                                        </path>
                                        <path fill="#fefefe" d="M207 282c2,5 12,3 14,6 0,1 1,4 1,5 3,0 6,-1 10,-1 11,1 12,10 24,10 12,0 13,-9 24,-10 4,0 7,1 10,1 2,-6 1,-6 6,-7 3,0 8,-1 9,-4 -3,-1 -6,0 -12,-5 -4,-3 -15,-15 -9,-21 3,-2 11,-3 11,-6 -3,-5 -8,3 -14,-1 0,-8 2,-18 -1,-25 -3,-6 -8,-10 -14,-12 -7,-3 -17,-2 -23,1 -5,3 -11,8 -12,15 -1,4 -1,8 -1,12 0,3 1,5 1,7 0,1 0,3 -4,3 -2,0 -4,0 -5,-1 -2,-1 -5,0 -5,1 1,3 7,4 9,5 8,4 2,12 -2,17 -2,3 -4,5 -7,6 -5,4 -7,3 -10,4z">
                                        </path>
                                    </svg>
                                }
                            />
                            <CompanyLogo
                                svg={
                                    <svg className='slide-in-out' xmlns="http://www.w3.org/2000/svg"
                                        fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 512 512" id="facebook">
                                        <rect width="512" height="512" fill="none">
                                        </rect>
                                        <polygon fill="#2a5297" points="256 106 321 143 386 181 386 256 386 331 321 369 256 406 191 369 126 331 126 256 126 181 191 143">
                                        </polygon>
                                        <polygon fill="#19377a" points="256 406 191 369 126 331 126 256 126 181 191 143 256 106">
                                        </polygon>
                                        <polygon fill="#2a5297" points="256 131 310 162 364 193 364 256 364 319 310 350 256 381 202 350 148 319 148 256 148 193 202 162">
                                        </polygon>
                                        <path fill="#fefefe" d="M237 228l-13 0 -1 28 14 0 0 70 28 0 0 -70 21 0 3 -28 -23 0c0,-25 2,-16 22,-18l0 -24c-5,0 -17,0 -23,0 -7,0 -13,2 -17,6 -11,8 -11,20 -11,36z">
                                        </path>
                                    </svg>
                                }
                            />
                        </div>
                        <div className='flex justify-around w-full'>
                            <CompanyLogo
                                svg={
                                    <svg className='slide-in-out' xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 512 512" id="snapchat">
                                        <rect width="512" height="512" fill="none">
                                        </rect>
                                        <polygon fill="#fffc01" points="256 106 321 143 386 181 386 256 386 331 321 369 256 406 191 369 126 331 126 256 126 181 191 143">
                                        </polygon>
                                        <polygon fill="#ffdd01" points="256 406 191 369 126 331 126 256 126 181 191 143 256 106">
                                        </polygon>
                                        <polygon fill="#fffc01" points="256 131 310 162 364 193 364 256 364 319 310 350 256 381 202 350 148 319 148 256 148 193 202 162">
                                        </polygon>
                                        <path fill="#030200" d="M218 289c2,3 -1,8 7,6 4,0 8,-1 12,1 3,2 5,4 8,5 3,2 6,3 11,3 10,1 12,-4 19,-8 3,-1 8,-1 12,-1 7,2 5,-1 7,-6 3,-1 13,-2 13,-6 1,-6 -8,0 -19,-15 -8,-12 0,-10 6,-13 4,-3 4,-7 1,-8 -5,-3 -7,1 -11,0 0,-10 2,-18 -3,-26 -4,-6 -9,-11 -18,-13 -10,-2 -19,1 -25,5 -11,8 -11,18 -10,31 0,1 0,3 0,3 -2,2 -8,-4 -12,1 -3,4 2,7 5,8 5,1 8,2 5,8 -7,15 -20,15 -21,17 -2,1 0,4 2,5 3,2 10,2 11,3z">
                                        </path>
                                        <path fill="#fefefe" d="M207 282c2,5 12,3 14,6 0,1 1,4 1,5 3,0 6,-1 10,-1 11,1 12,10 24,10 12,0 13,-9 24,-10 4,0 7,1 10,1 2,-6 1,-6 6,-7 3,0 8,-1 9,-4 -3,-1 -6,0 -12,-5 -4,-3 -15,-15 -9,-21 3,-2 11,-3 11,-6 -3,-5 -8,3 -14,-1 0,-8 2,-18 -1,-25 -3,-6 -8,-10 -14,-12 -7,-3 -17,-2 -23,1 -5,3 -11,8 -12,15 -1,4 -1,8 -1,12 0,3 1,5 1,7 0,1 0,3 -4,3 -2,0 -4,0 -5,-1 -2,-1 -5,0 -5,1 1,3 7,4 9,5 8,4 2,12 -2,17 -2,3 -4,5 -7,6 -5,4 -7,3 -10,4z">
                                        </path>
                                    </svg>
                                }
                            />
                            <CompanyLogo
                                svg={
                                    <svg className='slide-in-out' xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 512 512" id="snapchat">
                                        <rect width="512" height="512" fill="none">
                                        </rect>
                                        <polygon fill="#fffc01" points="256 106 321 143 386 181 386 256 386 331 321 369 256 406 191 369 126 331 126 256 126 181 191 143">
                                        </polygon>
                                        <polygon fill="#ffdd01" points="256 406 191 369 126 331 126 256 126 181 191 143 256 106">
                                        </polygon>
                                        <polygon fill="#fffc01" points="256 131 310 162 364 193 364 256 364 319 310 350 256 381 202 350 148 319 148 256 148 193 202 162">
                                        </polygon>
                                        <path fill="#030200" d="M218 289c2,3 -1,8 7,6 4,0 8,-1 12,1 3,2 5,4 8,5 3,2 6,3 11,3 10,1 12,-4 19,-8 3,-1 8,-1 12,-1 7,2 5,-1 7,-6 3,-1 13,-2 13,-6 1,-6 -8,0 -19,-15 -8,-12 0,-10 6,-13 4,-3 4,-7 1,-8 -5,-3 -7,1 -11,0 0,-10 2,-18 -3,-26 -4,-6 -9,-11 -18,-13 -10,-2 -19,1 -25,5 -11,8 -11,18 -10,31 0,1 0,3 0,3 -2,2 -8,-4 -12,1 -3,4 2,7 5,8 5,1 8,2 5,8 -7,15 -20,15 -21,17 -2,1 0,4 2,5 3,2 10,2 11,3z">
                                        </path>
                                        <path fill="#fefefe" d="M207 282c2,5 12,3 14,6 0,1 1,4 1,5 3,0 6,-1 10,-1 11,1 12,10 24,10 12,0 13,-9 24,-10 4,0 7,1 10,1 2,-6 1,-6 6,-7 3,0 8,-1 9,-4 -3,-1 -6,0 -12,-5 -4,-3 -15,-15 -9,-21 3,-2 11,-3 11,-6 -3,-5 -8,3 -14,-1 0,-8 2,-18 -1,-25 -3,-6 -8,-10 -14,-12 -7,-3 -17,-2 -23,1 -5,3 -11,8 -12,15 -1,4 -1,8 -1,12 0,3 1,5 1,7 0,1 0,3 -4,3 -2,0 -4,0 -5,-1 -2,-1 -5,0 -5,1 1,3 7,4 9,5 8,4 2,12 -2,17 -2,3 -4,5 -7,6 -5,4 -7,3 -10,4z">
                                        </path>
                                    </svg>
                                }
                            />
                            <CompanyLogo
                                svg={
                                    <svg className='slide-in-out' xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 512 512" id="snapchat">
                                        <rect width="512" height="512" fill="none">
                                        </rect>
                                        <polygon fill="#fffc01" points="256 106 321 143 386 181 386 256 386 331 321 369 256 406 191 369 126 331 126 256 126 181 191 143">
                                        </polygon>
                                        <polygon fill="#ffdd01" points="256 406 191 369 126 331 126 256 126 181 191 143 256 106">
                                        </polygon>
                                        <polygon fill="#fffc01" points="256 131 310 162 364 193 364 256 364 319 310 350 256 381 202 350 148 319 148 256 148 193 202 162">
                                        </polygon>
                                        <path fill="#030200" d="M218 289c2,3 -1,8 7,6 4,0 8,-1 12,1 3,2 5,4 8,5 3,2 6,3 11,3 10,1 12,-4 19,-8 3,-1 8,-1 12,-1 7,2 5,-1 7,-6 3,-1 13,-2 13,-6 1,-6 -8,0 -19,-15 -8,-12 0,-10 6,-13 4,-3 4,-7 1,-8 -5,-3 -7,1 -11,0 0,-10 2,-18 -3,-26 -4,-6 -9,-11 -18,-13 -10,-2 -19,1 -25,5 -11,8 -11,18 -10,31 0,1 0,3 0,3 -2,2 -8,-4 -12,1 -3,4 2,7 5,8 5,1 8,2 5,8 -7,15 -20,15 -21,17 -2,1 0,4 2,5 3,2 10,2 11,3z">
                                        </path>
                                        <path fill="#fefefe" d="M207 282c2,5 12,3 14,6 0,1 1,4 1,5 3,0 6,-1 10,-1 11,1 12,10 24,10 12,0 13,-9 24,-10 4,0 7,1 10,1 2,-6 1,-6 6,-7 3,0 8,-1 9,-4 -3,-1 -6,0 -12,-5 -4,-3 -15,-15 -9,-21 3,-2 11,-3 11,-6 -3,-5 -8,3 -14,-1 0,-8 2,-18 -1,-25 -3,-6 -8,-10 -14,-12 -7,-3 -17,-2 -23,1 -5,3 -11,8 -12,15 -1,4 -1,8 -1,12 0,3 1,5 1,7 0,1 0,3 -4,3 -2,0 -4,0 -5,-1 -2,-1 -5,0 -5,1 1,3 7,4 9,5 8,4 2,12 -2,17 -2,3 -4,5 -7,6 -5,4 -7,3 -10,4z">
                                        </path>
                                    </svg>
                                }
                            />
                            <CompanyLogo
                                svg={
                                    <svg className='slide-in-out' xmlns="http://www.w3.org/2000/svg"
                                        fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 512 512" id="facebook">
                                        <rect width="512" height="512" fill="none">
                                        </rect>
                                        <polygon fill="#2a5297" points="256 106 321 143 386 181 386 256 386 331 321 369 256 406 191 369 126 331 126 256 126 181 191 143">
                                        </polygon>
                                        <polygon fill="#19377a" points="256 406 191 369 126 331 126 256 126 181 191 143 256 106">
                                        </polygon>
                                        <polygon fill="#2a5297" points="256 131 310 162 364 193 364 256 364 319 310 350 256 381 202 350 148 319 148 256 148 193 202 162">
                                        </polygon>
                                        <path fill="#fefefe" d="M237 228l-13 0 -1 28 14 0 0 70 28 0 0 -70 21 0 3 -28 -23 0c0,-25 2,-16 22,-18l0 -24c-5,0 -17,0 -23,0 -7,0 -13,2 -17,6 -11,8 -11,20 -11,36z">
                                        </path>
                                    </svg>
                                }
                            />
                        </div>
                        <div className='flex justify-evenly w-full'>
                            <CompanyLogo
                                svg={
                                    <svg className='slide-in-out' xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 512 512" id="reddit">
                                        <rect width="512" height="512" fill="none">
                                        </rect>
                                        <polygon fill="#ff3f18" points="256 106 321 143 386 181 386 256 386 331 321 369 256 406 191 369 126 331 126 256 126 181 191 143">
                                        </polygon>
                                        <polygon fill="#ff2f10" points="256 406 191 369 126 331 126 256 126 181 191 143 256 106">
                                        </polygon>
                                        <polygon fill="#ff3f18" points="256 131 310 162 364 193 364 256 364 319 310 350 256 381 202 350 148 319 148 256 148 193 202 162">
                                        </polygon>
                                        <path fill="#fff" d="M255 227c-12,1 -21,3 -31,8 -3,1 -6,3 -9,5 -1,-1 -3,-2 -5,-3 -16,-7 -29,13 -15,25 1,1 2,1 2,2 -1,10 0,15 4,23 10,18 34,27 55,27 17,0 32,-5 42,-13 5,-4 10,-8 13,-14 3,-6 4,-11 4,-17 0,-3 0,-4 0,-6 13,-7 9,-27 -5,-29 -7,0 -10,3 -13,4 -1,0 -2,-1 -3,-2 -1,0 -2,-1 -4,-2 -2,-1 -5,-2 -8,-3 -6,-2 -12,-3 -19,-4 0,-1 6,-21 7,-22l19 4c2,2 2,9 11,10 12,2 18,-16 6,-21 -2,-1 -5,-1 -8,0 -4,1 -4,2 -6,4 -3,0 -18,-3 -22,-4 -6,-2 -6,1 -8,8 -1,3 -6,19 -7,20zm-20 58c-2,0 -4,2 -2,5 1,1 3,3 5,4 12,6 30,5 39,-2 6,-4 1,-9 -3,-7 -8,6 -18,7 -27,5 -7,-3 -9,-6 -12,-5zm40 -31c-5,1 -9,6 -7,11 1,4 5,9 11,7 4,-1 8,-5 7,-11 -1,-4 -5,-8 -11,-7zm-41 0c-5,1 -9,5 -8,11 1,4 6,8 11,7 4,-1 9,-5 7,-11 0,-4 -5,-8 -10,-7z">
                                        </path>
                                    </svg>
                                }
                            />
                        </div>
                    </div>
                </section>
            </div>
            {/* Showcase Boxes */}
            <div className='grid md:grid-cols-3 gap-10 p-10'>
                <ShowcaseBox
                    href={''}
                    imageSrc={
                        <CompanyLogo
                            svg={'Company logo here'}
                        />
                    }
                    companyName={'Tuple'}
                />
                <ShowcaseBox
                    href={''}
                    imageSrc={
                        <CompanyLogo
                            svg={'Company logo here'}
                        />
                    }
                    companyName={'Reform'}
                />
                <ShowcaseBox
                    href={''}
                    imageSrc={
                        <CompanyLogo
                            svg={'Company logo here'}
                        />
                    }
                    companyName={'Statamic'}
                />
                <ShowcaseBox
                    href={''}
                    imageSrc={
                        <CompanyLogo
                            svg={'Company logo here'}
                        />
                    }
                    companyName={'Savvycal'}
                />
            </div>
        </>
    )
}

export default Showcase