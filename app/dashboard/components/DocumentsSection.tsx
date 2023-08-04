import React from 'react'
import ShinyText from '@/components/ShinyText'
import PopoverButton from '@/components/PopoverButton'
import DialogButton from '@/components/DialogButton'
import BillingHistoryTable from './BillingHistoryTable'

type Props = {}

const DocumentsSection = (props: Props) => {
    return (
        <div className=''>
            <div className="p-5 lg:p-0 lg:flex lg:items-center lg:justify-between lg:ml-2 ">
                <div className='text-center lg:text-left'>
                    <ShinyText text="Documents & Invoices" />
                </div>
                <div className='hidden lg:block notificationBell relative'>
                    <div id='notificationDot' className='absolute h-[12px] w-[12px] bg-red9 rounded-full right-0 top-0' />
                    <PopoverButton icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    }
                    />
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                {/** First Card */}
                <div className='rounded-lg shadow-blackA9 shadow-[0_4px_7px] text-xs lg:text-base p-5'>
                    <div className='flex justify-between mb-10'>
                        <h1 className='text-blue9 font-semibold'>Terms & Conditions</h1>
                        <div className=''>
                            <DialogButton
                                onClickfunction=''
                                disabled=''
                                saveButton='Continue'
                                saveButtonColor='bg-blue9'
                                buttonText={
                                    <>
                                        <div className='hover:cursor-pointer bg-blue9 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-1 px-2 text-xs lg:py-0 lg:px-[15px] lg:h-[35px] font-light leading-none focus:outline-none'>
                                            View all
                                        </div>
                                    </>
                                }
                                dialogTitle='Standard Contracts'
                                dialogDesc={`Click on each contract to view`}
                                content={undefined}
                                buttonDisplay={''}
                                myOwnButtonDisplay={''}
                                myOwnButton={undefined}
                                saveButtonType={undefined}
                            />
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center justify-center hover:opacity-80 cursor-pointer'>
                            <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <p className='text-sm font-light'>Terms & Conditions</p>
                        </div>
                        <div className='flex flex-col items-center justify-center hover:opacity-80 cursor-pointer'>
                            <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <p className='text-sm font-light'>PixelCare Terms & Conditions</p>
                        </div>
                        <div className='flex flex-col items-center justify-center hover:opacity-80 cursor-pointer'>
                            <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <p className='text-sm font-light'>ThenPixels Terms of use</p>
                        </div>
                    </div>
                </div>
                {/** Second Card */}
                <div className='rounded-lg shadow-blackA9 shadow-[0_4px_7px] text-xs lg:text-base p-5'>
                    <div className='flex justify-between mb-10'>
                        <h1 className='text-blue9 font-semibold'>Development Contracts</h1>
                        <div className=''>
                            <DialogButton
                                onClickfunction=''
                                disabled=''
                                saveButton='Continue'
                                saveButtonColor='bg-blue9'
                                buttonText={
                                    <>
                                        <div className='hover:cursor-pointer bg-blue9 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-1 px-2 text-xs lg:py-0 lg:px-[15px] lg:h-[35px] font-light leading-none focus:outline-none'>
                                            View all
                                        </div>
                                    </>
                                }
                                dialogTitle='Custom Contracts'
                                dialogDesc={`Click on each contract to view`}
                                content={undefined}
                                buttonDisplay={''}
                                myOwnButtonDisplay={''}
                                myOwnButton={undefined}
                                saveButtonType={undefined}
                            />
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div className='flex flex-col items-center justify-center hover:opacity-80 cursor-pointer'>
                            <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <p className='text-sm font-light'>Custom</p>
                        </div>
                        <div className='flex flex-col items-center justify-center hover:opacity-80 cursor-pointer'>
                            <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <p className='text-sm font-light'>Custom</p>
                        </div>
                        <div className='flex flex-col items-center justify-center hover:opacity-80 cursor-pointer'>
                            <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <p className='text-sm font-light'>Custom</p>
                        </div>
                    </div>
                </div>
                {/* Third Card */}
                <div className='rounded-lg shadow-blackA9 shadow-[0_4px_7px] text-xs lg:text-base p-5'>
                    <h1 className='text-blue9 font-semibold'>Invoices</h1>
                    <BillingHistoryTable />
                </div>
            </div>
        </div>
    )
}

export default DocumentsSection