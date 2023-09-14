import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import ShinyText from '@/components/ShinyText';
import DialogButton from '@/components/DialogButton';
import PopoverButton from '@/components/PopoverButton';
import Link from 'next/link';

const InboxSection = () => {
    const [selectedMessageIndex, setSelectedMessageIndex] = useState<any>(-1);
    const [messageFullDisplay, setMessageFullDisplay] = useState<any>('No message selected');
    const [inboxMessage, setInboxMessage] = useState<any>([
        {
            message: `Welcome to ThenPixels! We're thrilled to have you join the ThenPixels family.`,
            fullDisplayMessage: (
                <div className='h-screen scale-in-center flex flex-col gap-2'>
                    <h1 id='custom-text' className='text-center text-3xl font-bold '>
                        Welcome To ThenPixels!
                    </h1>
                    <section className='border-b-[0.8px] border-slate4 rounded-md'>
                        <p className='text-slate10 mb-5 text-center'>
                            We're thrilled to have you join the ThenPixels family! 🚀 As you step into the world of limitless digital possibilities with us,
                            we want to extend a warm welcome and guide you through the exciting journey of crafting your dream website. <br />
                            {/* At ThenPixels, we're passionate about turning your vision into a stunning reality.
                            Your ideas and aspirations drive us, and we're committed to building websites that uniquely reflect your brand and purpose. */}
                        </p>
                        <h1 id='custom-text' className='border-b-[0.8px] border-slate4 rounded-md text-center text-xl font-semibold mb-5'>
                            Here's how we'll collaborate to create a website that stands out:
                        </h1>
                        <ul id='custom-text' className='flex flex-col gap-2 mb-5'>
                            <li>
                                <span className='font-bold text-blue9'>Discovery:</span> We'll start by understanding your business, goals, and design preferences.
                                Your input is invaluable as we tailor every element to resonate with your target audience.
                            </li>
                            <li>
                                <span className='font-bold text-blue9'>Design & Development:</span> Our team of skilled web developers and designers will work their magic to translate your ideas into an engaging,
                                user-friendly website. Expect sleek designs, smooth functionality, and responsive layouts.
                            </li>
                            <li>
                                <span className='font-bold text-blue9'>Customization:</span> Your website is an extension of your brand's identity. We'll customize every detail to align with your branding guidelines,
                                ensuring a cohesive and professional online presence.
                            </li>

                            <li>
                                <span className='font-bold text-blue9'>Collaboration:</span> Throughout the process, we'll keep you in the loop, seeking your feedback and insights at every stage.
                                Your satisfaction is our top priority.
                            </li>

                            <li>
                                <span className='font-bold text-blue9'>Launch & Beyond:</span> Once your website is polished to perfection, we'll assist you in launching it to the digital world.
                                But our partnership doesn't end there – we're here for any updates, enhancements, or maintenance you need down the road.
                            </li>
                        </ul>
                    </section>
                    <footer className='flex flex-col gap-5'>
                        <p className='text-slate10'>
                            We're excited to embark on this creative journey with you. Your success is our motivation,
                            and we're dedicated to making your online presence shine. <br />
                            Feel free to reach out if you have any questions, ideas,
                            or even if you just want to say hello. Let's make your website dreams come true! <br />
                        </p>
                        <p>
                            Best regards, <br />
                            The ThenPixels Team 🥳
                        </p>
                    </footer>
                </div>
            )
        },
        {
            message: 'Get to know your personalized dashboard, full of features to make your process a breeze',
            fullDisplayMessage: (
                <div className='h-screen scale-in-center flex flex-col gap-2'>
                    <h1 id='custom-text' className='text-center text-3xl font-bold '>
                        Get to know your dashboard
                    </h1>
                    <section className='border-b-[0.8px] border-slate4 rounded-md'>
                        <p className='text-slate10 mb-5 text-center'>

                        </p>
                        <h1 id='custom-text' className='border-b-[0.8px] border-slate4 rounded-md text-center text-xl font-semibold mb-5'>
                            Here's a quick guide to getting familiar with your dashboard:
                        </h1>
                        <ul id='custom-text' className='flex flex-col gap-5 mb-5'>
                            <li>
                                <span className='font-bold text-blue9 capitalize'>Dashboard overview:</span> The dashboard is your command center.
                                From here, you can access all the tools and features you need to track your website progress, check order history,
                                track analytics, request updates etc. <span className='text-red9'>**</span>
                            </li>
                            <li>
                                <span className='font-bold text-blue9 capitalize'>Documents & invoices:</span> All of your documents/contracts
                                and invoices all in one place.
                            </li>
                            <li>
                                <span className='font-bold text-blue9 capitalize'>File Sharing:</span> Need to share any files with us?
                                You can do so in the File Sharing section of your dashboard.
                            </li>

                            <li>
                                <span className='font-bold text-blue9 capitalize'>Feedback:</span> Your feedback is optional but it is always appreciated,
                                feel free to rate us in the Feedback section and let us know how your web development experience was!
                            </li>

                            <li>
                                <span id='text_gradient' className='font-bold capitalize'>Insights, pixelCare, & support tickets:</span> Only our PixelCare members
                                have access to the <strong>Insights</strong>, <strong>PixelCare</strong>, and <strong>Support Tickets</strong> section of the dashboard. Where you can see your websites insights, request content updates,
                                manage your PixelCare settings, contact your account manager and so much more! <br />
                                <Link href='/pricing' className='text-blue9 hover-opacity-80 hover:underline'>
                                    Learn more
                                </Link>
                            </li>
                            <li>
                                <span className='font-bold text-blue9 capitalize'>Account:</span> Manage everything in your account here
                                such as notifications, billing details etc.
                            </li>
                        </ul>
                    </section>
                    <footer className='flex flex-col gap-2'>
                        <p className='text-slate10'>
                            We're excited to have you on board at ThenPixels! <br />
                            Enjoy your dashboard & Happy exploring!
                        </p>
                        <p>
                            Best regards, <br />
                            The ThenPixels Team 🥳
                        </p>
                        <p className='font-[100] text-slate10 text-[10px]'>
                            <span className='text-red9'>**</span> Certain features are available to PixelCare members only.
                        </p>
                    </footer>
                </div>
            )
        },
    ]);
    const [trashMessageFullDisplay, setTrashMessageFullDisplay] = useState('No message selected');
    const [inboxTrash, setInboxTrash] = useState<any>([]);
    const [greenDotDisplay, setGreenDotDisplay] = useState('')

    // To view Inbox message in full display
    const handleMessageClick = (i: any) => {
        const clickedMessage = inboxMessage[i].fullDisplayMessage;
        setMessageFullDisplay(clickedMessage);
        //To make red border on messaged currently clicked
        setSelectedMessageIndex(i);

        // Mark the message as read
        const updatedInboxMessage = [...inboxMessage];
        updatedInboxMessage[i].read = true;
        setInboxMessage(updatedInboxMessage);
    };

    // To view trash message in full display
    const handleMessagInTrashClick = (i: any) => {
        const clickedMessageInTrash = inboxTrash[i].fullDisplayMessage;
        setTrashMessageFullDisplay(clickedMessageInTrash);
        setSelectedMessageIndex(i);
    }

    // When a trash can is clicked in Inbox
    const handleTrashCanClick = (i: any) => {
        const trashedMessage = inboxMessage[i];

        // Mark the message as read
        const updatedInboxTrashMessage = [...inboxMessage];
        updatedInboxTrashMessage[i].read = true;
        setInboxMessage(updatedInboxTrashMessage);

        // To remove from previous array (inbox)
        setInboxTrash((prevTrash: any) => [...prevTrash, trashedMessage]);
        setInboxMessage((prevMessages: any) => prevMessages.filter((_: any, index: any) => index !== i));

        // Check if the deleted message is the last one
        if (i === inboxMessage.length - 1) {
            setMessageFullDisplay('No message selected');
        } else {
            // Set the Full display message to the message right under the deleted message since it's deleted now.
            const clickedMessage = inboxMessage[i + 1].fullDisplayMessage;
            setMessageFullDisplay(clickedMessage);
        }
    };

    //When right arrow is clicked to show next message
    const handleRightArrowClick = () => {
        if (selectedMessageIndex < inboxMessage.length - 1) {
            const nextMessage = inboxMessage[selectedMessageIndex + 1].fullDisplayMessage;
            setMessageFullDisplay(nextMessage);
            setSelectedMessageIndex(selectedMessageIndex + 1);
        }
    };
    //When left arrow is clicked to show prev message but can loop around after reaching the last message
    const handleLeftArrowClick = () => {
        const nextIndex = (selectedMessageIndex - 1 + inboxMessage.length) % inboxMessage.length;
        const nextMessage = inboxMessage[nextIndex].fullDisplayMessage;
        setMessageFullDisplay(nextMessage);
        setSelectedMessageIndex(nextIndex);
    };

    // Button to permanently delete all trashed messages
    const handleEmptyTrashClick = () => {
        setInboxTrash([]);
        setTrashMessageFullDisplay('No message selected')
    }

    // Button in fullDisplay view that deletes the current message that is being seen
    const handleDeleteButtonWithMessageInView = () => {
        const currentIndex = selectedMessageIndex;
        const updatedInboxMessage = [...inboxMessage];
        const deletedMessage = updatedInboxMessage[currentIndex];

        // Add the deleted message to the inboxTrash array
        const updatedInboxTrash = [...inboxTrash, deletedMessage];

        // Remove the current message from the inboxMessage array
        updatedInboxMessage.splice(currentIndex, 1);

        setInboxMessage(updatedInboxMessage);
        setInboxTrash(updatedInboxTrash);

        // Fix this function becuase when you delete the last message left in inbox with the DeleteButtonWhileMessageIsInView the message display is blank when it should say 'No message selected
        if (updatedInboxMessage.length === 0) {
            setSelectedMessageIndex(null);
            setMessageFullDisplay('');
        } else if (currentIndex === updatedInboxMessage.length) {
            setSelectedMessageIndex(0);
            setMessageFullDisplay(updatedInboxMessage[0].fullDisplayMessage);
        } else {
            setSelectedMessageIndex(currentIndex);
            setMessageFullDisplay(updatedInboxMessage[currentIndex].fullDisplayMessage);
        }
    };

    const handleDeleteNotificationButtonClick = () => {
        setGreenDotDisplay('hidden');
    }

    const handleDeleteAllInboxButton = () => {
        setInboxMessage([]);
        setInboxTrash([...inboxMessage, ...inboxTrash])
        setMessageFullDisplay('No message selected')
    }

    // To disable delete current message in display button while there is no message in display
    const isButtonDisabled = messageFullDisplay === 'No message selected';
    // To disble clear notification button when there are no new messages
    const isNotificationButtonDisabled = inboxMessage.length < 0

    return (
        <div className="">
            <div className="p-5 lg:p-0 lg:flex lg:items-center lg:justify-between lg:ml-2 ">
                <div className='text-center lg:text-left'>
                    <ShinyText text="Messages" />
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
            <div>
                <Tabs.Root defaultValue="tab1" orientation="vertical">
                    <div className="">
                        <div className="lg:ml-1 border border-slate4  rounded-lg">
                            <Tabs.List className="shrink-0 flex border-b border-slate4 w-full rounded-lg hover:cursor-pointer bg-white" aria-label="">
                                <Tabs.Trigger
                                    id='back-ground'
                                    className="uppercase tracking-[5px] w-[50%]  px-5 h-[45px] flex-1 flex items-center justify-center text-xs lg:text-[15px] leading-none text-gray-500 select-none first:rounded-tl-md last:rounded-tr-md hover:text-blue9 data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none hover:cursor-pointer"
                                    value="tab1"
                                >
                                    Inbox
                                </Tabs.Trigger>
                                <Tabs.Trigger
                                    id='back-ground'
                                    className="uppercase tracking-[5px] w-[50%] px-5 h-[45px] flex-1 flex items-center justify-center text-xs lg:text-[15px] leading-none text-gray-500 select-none first:rounded-tl-md last:rounded-tr-md hover:text-blue9 data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none hover:cursor-pointer"
                                    value="tab2"
                                >
                                    Trash
                                </Tabs.Trigger>
                            </Tabs.List>
                            {/** Inbox section */}
                            <Tabs.Content value="tab1">
                                <div id='back-ground' className="rounded-lg lg:flex w-full h-screen lg:p-2 lg:w-full lg:h-[75vh] " >
                                    <div className="lg:w-[35%] w-full overflow-y-scroll">
                                        {inboxMessage.length > 0 ? (
                                            inboxMessage.map((message: any, i: any) => (
                                                <div className='flex items-center w-[93vw] lg:w-[90%] ' key={i}>
                                                    <div className="p-2 w-full">
                                                        <div
                                                            className={
                                                                `${selectedMessageIndex === i ? 'outline outline-1 outline-blue9' : ''
                                                                } ml-2 lg:ml-0 scale-in-center lg:max-w-[385px] shadow-blackA9 shadow-[0_4px_7px] rounded-lg mb-1 flex justify-between items-center hover:cursor-pointer hover:bg-slate4 p-3 max-w-[848px] lg:p-5`
                                                            }
                                                            id='back-ground'
                                                            onClick={() => handleMessageClick(i)}
                                                        >
                                                            {message.read ? (
                                                                ''
                                                            ) : (
                                                                <p className={`${greenDotDisplay} text-blue9`}>•</p>
                                                            )}
                                                            <p className="truncate text-xs lg:text-sm ml-2">{message.message}</p>
                                                        </div>
                                                    </div>
                                                    <div onClick={() => handleTrashCanClick(i)} className='transform transition-transform hover:scale-125 p-1 hover:cursor-pointer'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="hsl(358 75% 59%)" className="w-4 h-4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div id='back-ground' className="flex flex-col justify-center items-center h-full p-5 lg:p-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.7" stroke="hsl(205 10.7% 78.0%)" className="w-10 h-10">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                                                </svg>
                                                <h1 className="font-light uppercase tracking-[5px] text-slate8">Inbox is empty</h1>
                                            </div>
                                        )}
                                    </div>
                                    <div id='back-ground' className=" p-3 lg:p-5 lg:ml-3 shadow-blackA9 shadow-[0_4px_7px]  lg:w-[65%] 2xl:w-[90%] h-full overflow-y-hidden rounded-lg">
                                        <div className='lg:w-full flex justify-between items-center mb-1'>
                                            {/** Double arrows */}
                                            <div className='hidden lg:flex'>
                                                {inboxMessage.length > 0 ?
                                                    <div className='flex gap-2'>
                                                        <div id='back-ground' onClick={handleLeftArrowClick} className=' hover:cursor-pointer'>
                                                            <svg id='custom-text' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="transform transition-transform hover:scale-125 w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                                            </svg>
                                                        </div>
                                                        <div id='back-ground' onClick={handleRightArrowClick} className=' hover:cursor-pointer'>
                                                            <svg id='custom-text' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="transform transition-transform hover:scale-125 w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    :
                                                    ''
                                                }
                                            </div>
                                            {/** clearNotifications and Delete button */}
                                            <div className='flex items-center lg:gap-5 lg:mb-2' id='threeInboxButtons'>
                                                {inboxMessage.length > 0 ? //Button will only show when there is a message in the trash inbox
                                                    <button onClick={handleDeleteNotificationButtonClick}
                                                        disabled={isNotificationButtonDisabled}
                                                        type='button'
                                                        className=' bg-slate8 transition duration-150 ease-in-out hover:opacity-80 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-1 px-2 text-xs lg:text-base lg:py-0 lg:px-[15px] lg:h-[35px] font-light leading-none focus:outline-none'
                                                    >
                                                        Notifications
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="hsl(206 100% 50.0%)" className="w-4 lg:w-5 h-4 lg:h-5">
                                                            <path fill='hsl(206 100% 50.0%)' strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    </button>
                                                    :
                                                    ''
                                                }

                                                <DialogButton
                                                    onClickfunction={handleDeleteButtonWithMessageInView}
                                                    disabled={isButtonDisabled}
                                                    saveButton='Continue'
                                                    saveButtonColor='bg-red9'
                                                    buttonText={<>
                                                        {inboxMessage.length > 0 ? //Button will only show when there is a message in the trash inbox
                                                            <div className=' hover:cursor-pointer bg-red9 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-1 px-2 text-xs lg:text-base lg:py-0 lg:px-[15px] lg:h-[35px] font-light leading-none focus:outline-none'>
                                                                Delete
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 lg:w-5 h-4 lg:h-5">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                </svg>
                                                            </div>
                                                            :
                                                            ''}
                                                    </>}
                                                    dialogTitle='Delete message'
                                                    dialogDesc={`Are you sure you want to delete this message?`} content={undefined} buttonDisplay={''} myOwnButtonDisplay={''} myOwnButton={undefined} saveButtonType={undefined} />
                                                <DialogButton
                                                    onClickfunction={handleDeleteAllInboxButton}
                                                    disabled=''
                                                    saveButton='Continue'
                                                    saveButtonColor='bg-red9'
                                                    buttonText={<>
                                                        {inboxMessage.length > 0 ? //Button will only show when there is a message in the trash inbox
                                                            <div className=' hover:cursor-pointer bg-blue9 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-1 px-2 text-xs lg:text-base lg:py-0 lg:px-[15px] lg:h-[35px] font-light leading-none focus:outline-none'>
                                                                Delete All
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 lg:w-5 lg:h-5">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                                                </svg>

                                                            </div>
                                                            :
                                                            ''}
                                                    </>}
                                                    dialogTitle='Delete message'
                                                    dialogDesc={<p>Are you sure you want to delete all of your messages?<br></br> This can't be reversed.</p>} content={undefined} buttonDisplay={''} myOwnButtonDisplay={''} myOwnButton={undefined} saveButtonType={undefined} />
                                            </div>
                                        </div>
                                        <div className="sticky h-full mt-5 lg:mt-0 overflow-y-scroll">
                                            <div className={
                                                messageFullDisplay === 'No message selected' ?
                                                    `font-light flex justify-center items-center text-xs lg:text-base lg:h-[500px] uppercase tracking-[5px] text-slate8` :
                                                    `font-light`
                                            }

                                            >
                                                {messageFullDisplay}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tabs.Content>
                            {/** Trash section */}
                            <Tabs.Content value="tab2" className="w-full">
                                <div id='back-ground' className="lg:flex lg:p-2 w-full h-screen lg:h-[75vh] rounded-lg">
                                    <div className="lg:w-[35%] w-full overflow-y-scroll">
                                        {inboxTrash.length > 0 ? (
                                            inboxTrash.map((message: any, i: any) => (
                                                <div className='flex items-center w-[98vw] lg:w-full' key={i}>
                                                    <div className="p-2 w-full">
                                                        <div
                                                            className={
                                                                `${selectedMessageIndex === i ? 'outline outline-1 outline-blue9' : ''
                                                                } ml-2 scale-in-center lg:max-w-[385px] shadow-blackA9 shadow-[0_4px_7px] bg-slate2 rounded-lg mb-1 flex justify-between items-center hover:cursor-pointer hover:bg-slate4 max-w-[848px] p-3 lg:p-5`
                                                            }
                                                            id='back-ground'
                                                            onClick={() => handleMessagInTrashClick(i)}
                                                        >
                                                            {message.read
                                                                ?
                                                                // Check icon
                                                                ''
                                                                :
                                                                <p className={`${greenDotDisplay} text-blue9`}>•</p>
                                                            }
                                                            <p className="truncate text-xs lg:text-sm ml-2">{message.message}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div id='back-ground' className="flex flex-col justify-center items-center h-full bg-slate4 p-5 lg:p-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.7" stroke="hsl(205 10.7% 78.0%)" className="w-10 h-10">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                                                </svg>
                                                <h1 className="font-light  uppercase tracking-[5px] text-slate8">Trash is empty</h1>
                                            </div>
                                        )}
                                    </div>
                                    <div id='back-ground' className="p-3 lg:p-5 lg:ml-3 shadow-blackA9 shadow-[0_4px_7px] lg:w-[65%] 2xl:w-[90%] h-full overflow-y-hidden rounded-lg">
                                        <div className='flex justify-end pb-2'>
                                            <DialogButton
                                                onClickfunction={handleEmptyTrashClick}
                                                saveButton='Continue'
                                                saveButtonColor='bg-red9'
                                                buttonText={<>
                                                    {inboxTrash.length > 0 ? //Button will only show when there is a message in the trash inbox
                                                        <div className=' bg-red9 text-white inline-flex items-center justify-center rounded-[4px] gap-1 lg:gap-2 py-1 px-2 text-xs lg:text-base lg:py-0 lg:px-[15px] lg:h-[35px] font-light leading-none focus:outline-none'>
                                                            Empty trash
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 lg:w-5 lg:h-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                        :
                                                        ''}
                                                </>}
                                                dialogTitle='Empty trash'
                                                dialogDesc={<p>Are you sure you want to delete all of your messages?<br></br> This can't be reversed.</p>}
                                                content=''
                                                buttonDisplay=''
                                                myOwnButtonDisplay=''
                                                myOwnButton=''
                                                disabled='' saveButtonType={undefined} />
                                        </div>
                                        <div className="sticky h-full p-2 mt-5 lg:mt-0 overflow-y-scroll">
                                            <div className={
                                                trashMessageFullDisplay === 'No message selected' ?
                                                    `font-light flex justify-center items-center text-xs lg:text-base lg:h-[500px] uppercase tracking-[5px] text-slate8` :
                                                    `font-light`}
                                            >
                                                {trashMessageFullDisplay}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tabs.Content>
                        </div>
                    </div>
                </Tabs.Root>
            </div>
        </div>
    );
};

export default InboxSection;