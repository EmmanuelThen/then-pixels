import React from 'react'
import ShinyText from '@/components/ShinyText'
import PopoverButton from '@/components/PopoverButton'
import Tooltips from '@/components/Tooltips'

type Props = {}

const FeedbackSection = (props: Props) => {
    return (
        <div>
            <div className="p-5 lg:p-0 lg:flex lg:items-center lg:justify-between lg:ml-2 ">
                <div className='text-center lg:text-left'>
                    <ShinyText text="Feedback" />
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

            <h1 className='text-slate10 p-3'>
                We're thrilled to have you here! Please answer the following questions below, your feedback is greatly appreciated!
            </h1>

            {/* First card */}
            <div className='rounded-lg shadow-blackA9 shadow-[0_4px_7px] text-xs lg:text-base p-5'>
                <div>
                    <Tooltips
                        button={
                        
                                <button
                                    className='focus-selector p-1 flex items-center gap-2 hover:bg-slate10 hover:rounded-md '
                                >
                                    <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </button>
                            
                        }
                        tooltipContent={
                        
                            <span>hi</span>
                            
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default FeedbackSection