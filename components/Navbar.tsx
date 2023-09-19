'use client'
import React, { useState, useEffect } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon, Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import MobileNav from './MobileNav';
import ArrowButton from './ArrowButton';
import { createClientSupabase } from '@/app/supabase-client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getSession } from '@/app/supabase-client';
import SignOutButton from './ui/Navbar/SignOutButton';
// import { createServerSupabaseClient } from '@/app/supabase-server';


type Props = {
    description: string,
    children: any,
    href: string
}

const ListItem = ({ description, children, href }: Props) => {
    return (
        <li>
            <NavigationMenu.Link asChild>
                <Link target='_blank' href={`${href}`} className='hover:cursor-pointer focus:shadow-[0_0_0_2px] focus:shadow-blue7 duration-150 ease-in-out hover:opacity-70 block select-none rounded-[6px] p-3 text-sm leading-none no-underline outline-none transition'>
                    <h1 id='custom-text' className='font-medium mb-1 leading-[1.2] '>
                        {children}
                    </h1>
                    <p className='text-slate10 text-sm leading-[1.4]'>
                        {description}
                    </p>
                </Link>
            </NavigationMenu.Link>
        </li>
    )
}


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        const getUser = async () => {
            const supabase = createClientComponentClient();

            try {
                const { data: { user } } = await supabase.auth.getUser();
                // console.log(user)
                setUserData(user);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        getUser();
        // console.log(userData)
    }, []);


    return (
        <>
            <div className='lg:hidden justify-between items-center'>
                <div className='flex justify-between p-2 '>
                    <div className='flex items-center'>
                        <span className='font-semibold text-blue9'>Then</span>
                        <span className='font-semibold text-red9'>Pixels</span>
                    </div>
                    <div className='cursor-pointer '>{/** z-100 was here before */}
                        <button
                            id='stroke-color'
                            className=" rounded-full w-[35px] h-[35px] inline-flex items-center justify-center  shadow-[0_2px_10px] shadow-blackA7 outline-none transition duration-150 ease-in-out hover:opacity-80"
                            aria-label="Navbar button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                // X icon
                                <svg strokeWidth='0.5' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd">
                                    </path>
                                </svg>
                            ) : (
                                // Hamburger menu icon
                                <svg strokeWidth='0.5' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd">
                                    </path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className={``}>
                        <MobileNav
                            nav1='Home'
                            nav2='Dashboard'
                            nav3='What we do'
                            nav4='Showcase'
                            nav5='Membership'
                            nav6='Account'
                            nav7='Contact'
                            navnavnav=''
                        />
                    </div>
                )}
            </div>
            <NavigationMenu.Root className=" backdrop-blur-md hidden lg:flex fixed z-[1] w-screen justify-between items-center py-1 px-10">
                <div className='flex items-center'>
                    <span className='font-semibold text-blue9'>Then</span>
                    <span className='font-semibold text-red9'>Pixels</span>
                </div>
                <NavigationMenu.List className="center m-0 flex gap-20 list-none p-1">
                    <NavigationMenu.Item>
                        <NavigationMenu.Link
                            className="transition duration-150 ease-in-out focus:shadow-blue7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-sm font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
                            href='/'
                        >
                            <p className='transition duration-150 ease-in-out hover:opacity-80'>Home</p>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="transition duration-150 ease-in-out  focus:shadow-blue7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-sm font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                            <p className='transition duration-150 ease-in-out hover:opacity-80'>What we offer</p>{' '}
                            <CaretDownIcon
                                id='custom-text'
                                className="relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                                aria-hidden
                            />
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content id='nav-dropdown-bg' className=" rounded-lg data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto z-[999]">
                            <ul className="one relative m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                                <ListItem description='Every business needs an online presence, make it count' href='/webdevelopment'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="hsl(206 100% 50.0%)" className="w-[15px] h-[15px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                        </svg>
                                        Web Development
                                    </div>
                                </ListItem>
                                <ListItem description='Keep your website running smoothly with our reliable maintenance services' href='/pricing'>
                                    <div className='flex items-enter gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="hsl(206 100% 50.0%)" className="w-[15px] h-[15px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                        </svg>
                                        PixelCare
                                    </div>
                                </ListItem>
                                <ListItem description='Streamline your tasks with innovative software solutions' href='/softwaredevelopment'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="hsl(206 100% 50.0%)" className="w-[15px] h-[15px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                        </svg>
                                        Software Solutions
                                    </div>
                                </ListItem>
                                <ListItem description='Schedule a consultation to get started on your project' href='/consultation'>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="hsl(206 100% 50.0%)" className="w-[15px] h-[15px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                        Consultation
                                    </div>
                                </ListItem>
                            </ul>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="transition duration-150 ease-in-out focus:shadow-blue7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-sm font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                            <p className='transition duration-150 ease-in-out hover:opacity-80'>Showcase</p>{' '}
                            <CaretDownIcon
                                id='custom-text'
                                className=" relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                                aria-hidden
                            />
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content id='nav-dropdown-bg' className="absolute top-0 left-0 w-full sm:w-auto rounded-lg">
                            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                                <ListItem description='Barbershop' href='https://lictonsorial.com'>
                                    <div className='flex items-center gap-1'>
                                        LIC-tonsorial
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="hsl(206 100% 50.0%)" fill-rule="evenodd" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </ListItem>
                                <ListItem description='E-commerce' href=''>
                                    <div className='flex items-center gap-1'>
                                        ThenPixels
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="hsl(206 100% 50.0%)" fill-rule="evenodd" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </ListItem>
                                <ListItem description='Fitness' href=''>
                                    <div className='flex items-center gap-1'>
                                        FitnessFit
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="hsl(206 100% 50.0%)" fill-rule="evenodd" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </ListItem>
                                <ListItem description='description' href=''>
                                    <div className='flex items-center gap-1'>
                                        Other site
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="hsl(206 100% 50.0%)" fill-rule="evenodd" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </ListItem>
                                <ListItem description='description' href=''>
                                    <div className='flex items-center gap-1'>
                                        Other site
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="hsl(206 100% 50.0%)" fill-rule="evenodd" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </ListItem>
                                <ListItem description='Lets go' href='/showcase'>
                                    <div className='flex items-center gap-1'>
                                        Full showcase
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill='transparent' viewBox="0 0 24 24" stroke-width="1.5" stroke="hsl(206 100% 50.0%)">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                                        </svg>

                                    </div>
                                </ListItem>
                            </ul>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link
                            className="transition duration-150 ease-in-out focus:shadow-blue7 block select-none rounded-[4px] px-3 py-2 text-sm font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                            href="/contact"
                        >
                            <p className='transition duration-150 ease-in-out hover:opacity-80'>Contact</p>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
                        <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-black" />
                    </NavigationMenu.Indicator>
                </NavigationMenu.List>
                <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
                    <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
                </div>

                <div className='flex items-center justify-between gap-3'>
                    {userData ?
                        (
                            <div className='hidden lg:block'>
                                <form action="/auth/signout" method="post">
                                    <button type='submit' className='text-sm text-white bg-red9 transition duration-150 ease-in-out hover:opacity-80 rounded-full px-2 py-[3px] flex items-center w-fit' >
                                        Log out
                                    </button>
                                </form>
                            </div>
                        ) :
                        <ArrowButton
                            buttonText='Pricing'
                            href='/pricing'
                        />
                    }
                    <ArrowButton
                        buttonText={userData ? 'Dashboard' : 'Sign in'}
                        href={userData ? '/dashboard' : '/signin'}
                    />
                </div>
            </NavigationMenu.Root>
        </>
    );
};

export default Navbar;