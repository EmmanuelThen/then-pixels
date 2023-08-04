import React from 'react'
import ShinyText from '@/components/ShinyText'
import PopoverButton from '@/components/PopoverButton'

type Props = {}

const ChatSection = (props: Props) => {
    return (
        <div>
            <div className="p-5 lg:p-0 lg:flex lg:items-center lg:justify-between lg:ml-2 ">
                <div className='text-center lg:text-left'>
                    <ShinyText text="Live Chat" />
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

            {/* Chat Box */}
            <div className='border border-1 rounded-md w-full h-screen'>
                {/* Chat navbar */}
                <div className='flex justify-center mb-10'>
                    <p className='text-xs rounded-full bg-slate2 text-black px-2 mt-2'>
                        Today Jan 30
                    </p>
                </div>

                <div className='flex  items-center w-full'>
                    {/* Attachements */}
                    <div>
                        <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                        </svg>

                    </div>
                    {/* Type bar */}
                    <input
                        className='bg-slate2 px-4 py-1 rounded-sm w-[75%]'
                        type="text"
                        placeholder='Type a message'
                    />
                    {/* Send button */}
                    <button className='shadow-blackA9 shadow-[0_4px_7px] px-4 py-1 bg-blue9 hover:opacity-80 text-white rounded-sm cursor-pointer' type='button'>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatSection