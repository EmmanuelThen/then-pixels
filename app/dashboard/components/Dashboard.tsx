'use client'
import React, { useState } from 'react'
import DashNavbar from './DashNavbar'
import DashGridSection from './DashGridSection'

import Toggle from '@/components/Toggle'
import DialogButton from '@/components/DialogButton'
import InboxSection from './InboxSection'

import AccountSection from './AccountSection'
import MobileFullDashboard from './MobileFullDashboard'
import InsightsSection from './InsightsSection'
import DocumentsSection from './DocumentsSection'
import UploadsSection from './UploadsSection'
import FeedbackSection from './FeedbackSection'
import ChatSection from './ChatSection'
import SupportTicketsSections from './SupportTicketsSections'
import Tooltips from '@/components/Tooltips'



type Props = {}

const Dashboard = (props: Props) => {
    const [value, setValue] = useState('dashboard');

    const handleDashboardClick = () => {
        setValue('dashboard');
    }
    const handleInboxClick = () => {
        setValue('inbox');
    }
    const handleInsightsClick = () => {
        setValue('insights');
    }
    const handleAccountClick = () => {
        setValue('account')
    }

    const handleDocumentsClick = () => {
        setValue('documents')
    }

    const handleUploadsClick = () => {
        setValue('uploads')
    }

    const handleFeedbackClick = () => {
        setValue('feedback')
    }

    const handleChatClick = () => {
        setValue('chat')
    }

    const handleSupportTicketClick = () => {
        setValue('supporttickets')
    }

    return (
        <div className='flex w-full max-h-screen overflow-y-auto' id='full-dash'>
            <div className='flex lg:h-screen'>
                <div className='lg:w-1/5'>
                    <div className='hidden lg:flex lg:flex-col items-center justify-between border-r-[1px] p-1 w-fit  h-screen'>
                        {/*<div id='loginLogo' className='hidden lg:block'>
                            <span className='font-semibold text-blue9'>Then</span>
                            <span className='font-semibold text-red9'>Pixels</span>
    </div>*/}
                        {/*<div id='loginName' className='hidden lg:flex lg:flex-col items-center font-semibold text-sm'>
                            <div id='loginAvatar' className='mb-5'>
                                <DashAvatar iconHeight='h-[65px]' iconWidth='w-[65px]' />
                            </div>
                            <p className='hidden lg:block'>client.name</p>
                            <div className='hidden lg:flex justify-center mt-3'>
                                <div className='px-1 rounded-md w-fit text-[9px]'>
                                    <DialogButton
                                        buttonText='Edit'
                                        dialogTitle='Edit Profile'
                                        dialogDesc='Make changes to your profile here. Click save when youre done.'
                                        content={<AccountForm  />}
                                        saveButton='Save changes'
                                        saveButtonColor='bg-blue9'
                                        buttonDisplay=''
                                        myOwnButton=''
                                        myOwnButtonDisplay=''

                                    />
                                </div>
                            </div>
    </div>*/}

                        <div id='loginTabs' className='hidden lg:flex flex-col justify-around h-full mt-10 '>

                            <Tooltips
                                button={
                                    <button
                                        value={value}
                                        className='focus-selector p-1 flex items-center gap-2 hover:bg-slate10 hover:rounded-md'
                                        onClick={handleDashboardClick}
                                    >
                                        <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                        </svg>
                                    </button>
                                }
                                tooltipContent={'Dashboard'}
                            />

                            <Tooltips
                                button={
                                    <button
                                        value={value}
                                        className='focus-selector p-1 flex items-center gap-2 hover:bg-slate10 hover:rounded-md '
                                        onClick={handleInboxClick}
                                    >
                                        <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </button>
                                }
                                tooltipContent={'Messages'}
                            />

                            <Tooltips
                                button={
                                    <button
                                        value={value}
                                        className='focus-selector p-1 flex items-center gap-2 hover:bg-slate10 hover:rounded-md '
                                        onClick={handleDocumentsClick}
                                    >
                                        <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                        </svg>
                                    </button>
                                }
                                tooltipContent={'Documents & Invoices'}
                            />

                            <Tooltips
                                button={
                                    <button
                                        value={value}
                                        className='focus-selector p-1 flex items-center gap-2 hover:bg-slate10 hover:rounded-md '
                                        onClick={handleUploadsClick}
                                    >
                                        <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                                        </svg>
                                    </button>
                                }
                                tooltipContent={'File Sharing'}
                            />

                            <Tooltips button={
                                <button
                                    value={value}
                                    className='focus-selector p-1 flex items-center gap-2 hover:bg-slate10 hover:rounded-md '
                                    onClick={handleFeedbackClick}
                                >
                                    <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>

                                </button>
                            }
                                tooltipContent={'Feedback'}
                            />

                            <Tooltips button={
                                <button
                                    value={value}
                                    className='focus-selector p-1 flex items-center gap-2 hover:bg-slate10 hover:rounded-md '
                                    onClick={handleInsightsClick}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6">
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                                                <stop offset="25%" stopColor="purple" />
                                                <stop offset="50%" stopColor="pink" />
                                                <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                                                <stop offset="100%" stopColor="#3b82f6" />
                                            </linearGradient>
                                        </defs>
                                        <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                    </svg>

                                </button>
                            }
                                tooltipContent={
                                    <span id='text_gradient'>Insights</span>
                                }
                            />

                            <Tooltips button={
                                <button
                                    value={value}
                                    className='focus-selector p-1 flex items-center gap-2 hover:bg-slate10 hover:rounded-md '
                                    onClick={handleChatClick}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6">
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                                                <stop offset="25%" stopColor="purple" />
                                                <stop offset="50%" stopColor="pink" />
                                                <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                                                <stop offset="100%" stopColor="#3b82f6" />
                                            </linearGradient>
                                        </defs>
                                        <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                    </svg>

                                </button>
                            }
                                tooltipContent={
                                    <span id='text_gradient'>Live Chat</span>
                                }
                            />

                            <Tooltips
                                button={
                                    <button
                                        value={value}
                                        className='focus-selector p-1 flex items-center gap-2 hover:bg-slate10 hover:rounded-md '
                                        onClick={handleSupportTicketClick}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6">
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                                                    <stop offset="25%" stopColor="purple" />
                                                    <stop offset="50%" stopColor="pink" />
                                                    <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                                                    <stop offset="100%" stopColor="#3b82f6" />
                                                </linearGradient>
                                            </defs>
                                            <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                                        </svg>

                                    </button>
                                }
                                tooltipContent={
                                    <span id='text_gradient'>Support Tickets</span>
                                }
                            />




                            <Tooltips
                                button={
                                    <button
                                        value={value}
                                        className='focus-selector p-1 flex items-center gap-2 hover:bg-slate2 hover:rounded-md '
                                        onClick={handleAccountClick}
                                    >
                                        <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </button>
                                }
                                tooltipContent={'Account'}
                            />




                        </div>
                        {/* <div className='hidden lg:block'>
                            <form action="/auth/signout" method="post">
                                <button type='submit' className='mb-5 hover:cursor-pointer hover:bg-slate2 hover:rounded-md  inline-flex h-[35px] items-center justify-center gap-2 rounded-[4px] p-1 font-light leading-none focus:outline-none' >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="hsl(358 75% 59%)" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                    </svg>
                                </button>
                            </form>
                        </div> */}
                    </div>
                </div>
                <div className='lg:hidden w-[100vw] h-screen'>
                    <MobileFullDashboard />
                </div>
            </div>
            <section className='p-5 hidden lg:block flex-1 overflow-y-scroll' id='grid-section'>
                {(() => {
                    switch (value) {
                        case 'dashboard':
                            return <DashGridSection />;
                        case 'inbox':
                            return <InboxSection />;
                        case 'insights':
                            return <InsightsSection />
                        case 'account':
                            return <AccountSection />;
                        case 'documents':
                            return <DocumentsSection />
                        case 'uploads':
                            return <UploadsSection />
                        case 'feedback':
                            return <FeedbackSection />
                        case 'chat':
                            return <ChatSection />
                        case 'supporttickets':
                            return <SupportTicketsSections />
                        default:
                            return null; // Render nothing or fallback UI
                    }
                })()}
            </section>
        </div>
    )
}

export default Dashboard