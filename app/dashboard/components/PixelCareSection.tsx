'use client'
import React, { useEffect, useState } from 'react'
import ShinyText from '@/components/ShinyText'
import PopoverButton from '@/components/PopoverButton'
import { createServerSupabaseClient } from '@/app/supabase-server'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import ArrowButton from '@/components/ArrowButton'
import DialogButton from '@/components/DialogButton'
import SubTiers from '@/components/SubTiers'
import LoadingState from '@/components/LoadingState'
import InputForms from '@/components/InputForms'
import TextArea from '@/components/ui/TextArea/TextArea'


type Props = {}

const PixelCareSection = (props: Props) => {
    const [customer, setCustomer] = useState<{ stripe_customer_id: any }[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState('')

    useEffect(() => {
        const fetchCustomers = async () => {
            const supabase = createClientComponentClient();

            try {
                let { data: customers, error } = await supabase
                    .from('customers')
                    .select('stripe_customer_id');

                if (error) {
                    console.error('Error fetching customers:', error);
                    return;
                }
                setCustomer(customers);
                setLoading(false);
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        fetchCustomers();
    }, []);

    // console.log(customer)

    const handleThemeUpdate = () => {
        setValue('theme');
    }
    const handleContentUpdate = () => {
        setValue('content');
    }
    const handleAdvContentUpdate = () => {
        setValue('adv_content');
    }
    const handleAccManager = () => {
        setValue('account_manager');
    }
    // Card 5 and 6 still need functions
    return (
        <div>
            <div className="p-5 lg:p-0 lg:flex lg:items-center lg:justify-between lg:ml-2 ">
                <div className='text-center lg:text-left'>
                    <ShinyText text="PixelCare" />
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
                Select a perk below to begin
            </h1>


            {loading ?
                (
                    <div className='flex justify-center items-center h-screen'>
                        <LoadingState />
                    </div>
                )
                :
                customer ? (
                    <>

                        <div className='rounded-lg shadow-blackA9 shadow-[0_4px_7px] text-xs lg:text-base p-5 mb-10'>
                            <h1 id='text_gradient' className='font-semibold mb-5'>{'Pixelcare {tier}'}</h1>
                            <article className='grid grid-cols-4 gap-5'>
                                {/*  Card 1 */}
                                <button
                                    value={value}
                                    className='hover:opacity-80 transform transition-transform hover:scale-110 cursor-pointer p-5 bg-blue9 text-white rounded-lg shadow-blackA9 shadow-[0_4px_7px] text-xs lg:text-base'
                                    onClick={handleThemeUpdate}
                                >
                                    <h1 className='font-semibold'>Theme/template update</h1>
                                </button>
                                {/*  Card 2 */}
                                <button
                                    value={value}
                                    className='hover:opacity-80 transform transition-transform hover:scale-110 cursor-pointer p-5 bg-blue9 text-white rounded-lg shadow-blackA9 shadow-[0_4px_7px] text-xs lg:text-base'
                                    onClick={handleContentUpdate}
                                >
                                    <h1 className='font-semibold'>Content update</h1>
                                </button>
                                {/*  Card 3 */}
                                <button
                                    value={value}
                                    className='hover:opacity-80 transform transition-transform hover:scale-110 cursor-pointer p-5 bg-blue9 text-white rounded-lg shadow-blackA9 shadow-[0_4px_7px] text-xs lg:text-base'
                                    onClick={handleAdvContentUpdate}
                                >
                                    <h1 className='font-semibold'>Advanced content update</h1>
                                </button>
                                {/*  Card 4 */}
                                <button
                                    value={value}
                                    className='hover:opacity-80 transform transition-transform hover:scale-110 cursor-pointer p-5 bg-blue9 text-white rounded-lg shadow-blackA9 shadow-[0_4px_7px] text-xs lg:text-base'
                                    onClick={handleAccManager}
                                >
                                    <h1 className='font-semibold'>Contact account manager</h1>
                                </button>
                                
                            </article>
                        </div>

                        {/* Title for button press */}
                        <div>
                            {(() => {
                                switch (value) {
                                    case 'theme':
                                        return (
                                            <div>
                                                <ShinyText text={'Theme/Template Updates'} />
                                                <div className='flex items-center justify-center'>
                                                    <div className='w-[50%]'>
                                                        <InputForms
                                                            label={'Subject'}
                                                            valueMissingMessage={'Subject is missing'}
                                                            typeMismatchMessage={undefined}
                                                            buttonText={'Submit'}
                                                            buttonDisplay={''}
                                                            userInput={undefined}
                                                            // onUserInput={''}
                                                            extraInput={(<TextArea />)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    case 'content':
                                        return (
                                            <div>
                                                <ShinyText text={'Content Update'} />
                                                <div className='flex items-center justify-center'>
                                                    <div className='w-[50%]'>
                                                        <InputForms
                                                            label={'Subject'}
                                                            valueMissingMessage={'Subject is missing'}
                                                            typeMismatchMessage={undefined}
                                                            buttonText={'Submit'}
                                                            buttonDisplay={''}
                                                            userInput={undefined}
                                                            // onUserInput={''}
                                                            extraInput={(<TextArea />)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    case 'adv_content':
                                        return (
                                            <div>
                                                <ShinyText text={'Advanced Content Update'} />
                                                <div className='flex items-center justify-center'>
                                                    <div className='w-[50%]'>
                                                        <InputForms
                                                            label={'Subject'}
                                                            valueMissingMessage={'Subject is missing'}
                                                            typeMismatchMessage={undefined}
                                                            buttonText={'Submit'}
                                                            buttonDisplay={''}
                                                            userInput={undefined}
                                                            // onUserInput={''}
                                                            extraInput={(<TextArea />)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    case 'account_manager':
                                        return (
                                            <div>
                                                <ShinyText text={'Contact Account Manager'} />
                                                <div className='flex items-center justify-center'>
                                                    <div className='w-[50%]'>
                                                        <InputForms
                                                            label={'Subject'}
                                                            valueMissingMessage={'Subject is missing'}
                                                            typeMismatchMessage={undefined}
                                                            buttonText={'Submit'}
                                                            buttonDisplay={''}
                                                            userInput={undefined}
                                                            // onUserInput={''}
                                                            extraInput={(<TextArea />)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    default:
                                        return '';
                                }
                            })()}
                        </div>


                    </>
                ) :
                    (
                        <div>
                            <div className='flex flex-col gap-2 mb-10'>
                                <p className='font-light text-3xl tracking-[-0.06em] text-center'>What are you waiting for?</p>
                                <p className='text-slate10 text-xs font-medium text-center'>
                                    Maintain and secure your investment the correct way!
                                </p>
                                <div className='flex justify-center'>
                                    <ArrowButton buttonText='Learn more' href='/pixelcare' />
                                </div>
                                {/* <button onClick={handleNonMember}>click for Member</button> */}
                            </div>

                            <div className='flex justify-center'>
                                <button type='button'>
                                    <DialogButton
                                        buttonText={<p className='bg-blue9 hover:bg-[#3fcf8e] text-white  py-1 px-3 lg:px-8 lg:py-2 rounded '>
                                            Purchase
                                        </p>}
                                        dialogTitle={<>
                                            <div id='text_gradient'>PixelCare</div>
                                        </>}
                                        dialogDesc='Choose your tier'
                                        content={<SubTiers />}
                                        saveButton='Purchase'
                                        saveButtonColor='bg-blue9' buttonDisplay={''} myOwnButtonDisplay={''} myOwnButton={undefined} onClickfunction={undefined} disabled={undefined} saveButtonType={undefined} />
                                </button>
                            </div>

                        </div>
                    )
            }
        </div>
    )
}

export default PixelCareSection