import React from 'react'
import ShinyText from '@/components/ShinyText'
import PopoverButton from '@/components/PopoverButton'
import Tooltips from '@/components/Tooltips'
import RadioGroupButtons from '@/components/RadioGroupButtons'
import Star from '@/components/icons/Star'
import FeedbackStarOptions from './FeedbackStarOptions'
import FeedbackTextOptions from './FeedbackTextOptions'

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
                <h1 className='text-blue9 font-semibold'>Overall Experience</h1>
                <form action="" className='flex justify-between mt-5'>
                    <div>
                        <h1 className='text-slate10'>
                            How was your overall experience?
                        </h1>
                        <div className='mt-5'>
                            <FeedbackStarOptions />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-slate10'>
                            How likely are you to recommend ThenPixels?
                        </h1>
                        <div className='mt-5'>
                            <FeedbackStarOptions />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-slate10'>
                            Would you consider us again for future projects?
                        </h1>
                        <div className='mt-5'>
                            <FeedbackStarOptions />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-slate10'>
                            How was your overall experience?
                        </h1>
                        <div className='mt-5'>
                            <FeedbackStarOptions />
                        </div>
                    </div>

                </form>
            </div>

            {/* Second card */}
            <div className='rounded-lg shadow-blackA9 shadow-[0_4px_7px] text-xs lg:text-base p-5'>
                <h1 className='text-blue9 font-semibold'>Development Experience</h1>
                <form action="" className='flex justify-between mt-5'>
                    <div>
                        <h1 className='text-slate10'>
                            How was your overall experience?
                        </h1>
                        <div className='mt-5'>
                            <FeedbackTextOptions />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-slate10'>
                            How likely are you to recommend ThenPixels?
                        </h1>
                        <div className='mt-5'>
                            <FeedbackTextOptions />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-slate10'>
                            How was your overall experience?
                        </h1>
                        <div className='mt-5'>
                            <FeedbackTextOptions />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-slate10'>
                            How was your overall experience?
                        </h1>
                        <div className='mt-5'>
                            <FeedbackTextOptions />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default FeedbackSection