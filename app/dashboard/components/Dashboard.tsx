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
import PixelCareSection from './PixelCareSection'
import SupportTicketsSections from './SupportTicketsSections'
import Tooltips from '@/components/Tooltips'
import DashboardButton from './DashboardButton'

// All dashboard menu icons in an object
const DashboardIcons = {
    dashboard: (
        <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
    ),
    messages: (
        <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
    ),
    documents: (
        <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
    ),
    uploads: (
        <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
        </svg>
    ),
    feedback: (
        <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
    ),
    insights: (
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
    ),
    pixelcare: (
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
            <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
    ),
    supporttickets: (
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
    ),
    account: (
        <svg id='stroke-color' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
    ),
}


type Props = {}

const Dashboard = (props: Props) => {
    const [value, setValue] = useState('dashboard');

    const handleSectionClick = (sectionName: any) => {
        setValue(sectionName);
    }

    const sectionButtons = [
        { name: 'dashboard', tooltip: 'Dashboard' },
        { name: 'messages', tooltip: 'Messages' },
        { name: 'documents', tooltip: 'Documents & Invoices' },
        { name: 'uploads', tooltip: 'File Sharing' },
        { name: 'feedback', tooltip: 'Feedback' },
        { name: 'insights', tooltip: 'Insights' },
        { name: 'pixelcare', tooltip: 'Pixelcare' },
        { name: 'supporttickets', tooltip: 'Support Tickets' },
        { name: 'account', tooltip: 'Account' },
    ]

    const buttons = sectionButtons.map(({ name, tooltip }) => (
        <DashboardButton
            key={name}
            onClick={() => handleSectionClick(name)}
            tooltipContent={tooltip}
            icon={DashboardIcons[name]}
        />
    ));

    const sectionComponents = {
        dashboard: <DashGridSection />,
        messages: <InboxSection />,
        documents: <InsightsSection />,
        uploads: <UploadsSection />,
        feedback: <FeedbackSection />,
        insights: <InsightsSection />,
        pixelcare: <PixelCareSection />,
        supporttickets: <SupportTicketsSections />,
        account: <AccountSection />,
    };

    const selectedSection = sectionComponents[value] || null;


    return (
        <div className='flex w-full max-h-screen overflow-y-auto' id='full-dash'>
            <div className='flex lg:h-screen'>
                <div className='lg:w-1/5'>
                    <div className='hidden lg:flex lg:flex-col items-center justify-between border-r-[1px] p-1 w-fit  h-screen'>
                        <div id='loginTabs' className='hidden lg:flex flex-col justify-around h-full mt-10 '>
                            {buttons}
                        </div>
                    </div>
                </div>
                <div className='lg:hidden w-[100vw] h-screen'>
                    <MobileFullDashboard />
                </div>
            </div>
            <section className='p-5 hidden lg:block flex-1 overflow-y-scroll' id='grid-section'>
                {selectedSection}
            </section>
        </div>
    )
}

export default Dashboard