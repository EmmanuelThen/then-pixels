import React from 'react'
import DashMobileNavbar from './DashMobileNavbar'
import DashAccordion from './DashAccordion'
import ShinyText from '@/components/ShinyText'
import DashFileUpload from './DashFileUpload'
import * as Tabs from '@radix-ui/react-tabs';
import InboxSection from './InboxSection'

import AccountSection from './AccountSection'

import InsightsSection from './InsightsSection'
type Props = {}

const MobileFullDashboard = (props: Props) => {
    return (
        <div className='' id='mobile-grid-section'>
            {/* <div className=' overflow-hidden'>
                <DashMobileNavbar />
            </div> */}
            <Tabs.Root defaultValue="tab1" orientation="vertical">
                <Tabs.List aria-label="tabs example" className='flex justify-between p-5 mt-5'>
                    <Tabs.Trigger
                        value="tab1"
                        className='uppercase tracking-[3px] text-gray-500 text-[10px] data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current'
                    >
                        Dashboard
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        value="tab2"
                        className='uppercase tracking-[3px] text-gray-500 text-[10px] data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current'
                    >
                        Messages
                    </Tabs.Trigger>
                    {/* <Tabs.Trigger
                        value="tab3"
                        className='uppercase tracking-[3px] text-gray-500 text-[10px] data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current'
                    >
                        <span id='text_gradient'>Insights</span>
                    </Tabs.Trigger> */}
                    <Tabs.Trigger
                        value="tab4"
                        className='uppercase tracking-[3px] text-gray-500 text-[10px] data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current'
                    >
                        Account
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="tab1">
                    <div>
                        {/** Mobile screen nav */}
                        <div id='greeting' className='p-5'>
                            <div className='text-center'>
                                <ShinyText text='Dashboard' />
                            </div>
                        </div>
                        <div className='flex flex-col justify-between gap-10 p-2'>
                            <DashAccordion
                                title1='production tracker'
                                title2='documents & invoices'
                                title3='file sharing'
                                title4='feedback'
                                title5={
                                    <span className='capitalize' id='text_gradient'>
                                        insights
                                    </span>
                                }
                                title6={
                                    <span id='text_gradient'>
                                        PixelCare
                                    </span>
                                }
                                title7={
                                    <span className='capitalize' id='text_gradient'>
                                        support tickets
                                    </span>
                                }
                                
                            />

                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content value="tab2">
                    <InboxSection />
                </Tabs.Content>
                <Tabs.Content value="tab3">
                    <InsightsSection />
                </Tabs.Content>
                <Tabs.Content value="tab4">
                    <AccountSection />
                </Tabs.Content>
            </Tabs.Root>
        </div>
    )
}

export default MobileFullDashboard