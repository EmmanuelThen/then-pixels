import React from 'react'
import ShinyText from '@/components/ShinyText'
import PopoverButton from '@/components/PopoverButton'
import DialogButton from '@/components/DialogButton'

type Props = {}

const DocumentsSection = (props: Props) => {
    return (
        <div>
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
            {/** First Card */}
            <div id='back-ground' className='flex justify-between items-center rounded-lg shadow-blackA9 shadow-[0_4px_7px]'>
                <div className='flex'>
                    <div className=' p-5'>
                        avatar
                    </div>
                    <div className='flex flex-col justify-center p-2 text-xs lg:text-base lg:p-5'>
                        <h1 className='font-medium'>Client Name</h1>
                        <h2 className='text-slate10 font-light'>Member</h2>
                        <h3 id='text_gradient'>Pixelcare Tier</h3>{/** Only if they are a member */}
                    </div>
                </div>
                <div className='mr-5'>
                    <DialogButton
                        onClickfunction=''
                        disabled=''
                        content='hi'
                        saveButton='Save changes'
                        saveButtonColor='bg-blue9'
                        buttonText={
                            <>
                                <div className='hover:cursor-pointer bg-blue9 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-1 px-2 text-xs lg:py-0 lg:px-[15px] lg:h-[35px] font-light leading-none focus:outline-none'>
                                    View
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </div>
                            </>}
                        dialogTitle='Edit Profile'
                        dialogDesc={`Edit your profile below.`} buttonDisplay={''} myOwnButtonDisplay={''} myOwnButton={undefined} saveButtonType={undefined} />
                </div>
            </div>
        </div>
    )
}

export default DocumentsSection