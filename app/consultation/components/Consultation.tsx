'use client'
import InputForms from '@/components/InputForms'
import RadioGroupButtons from '@/components/RadioGroupButtons'
import ShinyText from '@/components/ShinyText'
import React from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group';



type Props = {}

const Consultation = (props: Props) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div>
                <ShinyText
                    text='Consultation'
                />
            </div>
            <div>
                <InputForms
                    valueMissingMessage={'Input is missing'}
                    typeMismatchMessage={undefined}
                    buttonText={'Submit'}
                    buttonDisplay={'hidden'}
                    userInput={undefined}
                    onUserInput={undefined}
                    label={'Full name'}
                    extraInput={undefined}
                />
                <InputForms
                    valueMissingMessage={'Input is missing'}
                    typeMismatchMessage={undefined}
                    buttonText={'Submit'}
                    buttonDisplay={'hidden'}
                    userInput={undefined}
                    onUserInput={undefined}
                    label={'Email'}
                    extraInput={undefined}
                />
                <InputForms
                    valueMissingMessage={'Input is missing'}
                    typeMismatchMessage={undefined}
                    buttonText={'Submit'}
                    buttonDisplay={'hidden'}
                    userInput={undefined}
                    onUserInput={undefined}
                    label={'Phone number'}
                    extraInput={undefined}
                />
                <InputForms
                    valueMissingMessage={'Input is missing'}
                    typeMismatchMessage={undefined}
                    buttonText={'Submit'}
                    buttonDisplay={'hidden'}
                    userInput={undefined}
                    onUserInput={undefined}
                    label={'Website format'}
                    extraInput={undefined}
                />

<RadioGroup.Root
            className="flex flex-col gap-2.5"
            defaultValue="5"
            aria-label="View density"
        >
            <div className="flex items-center">
                <RadioGroup.Item
                    className="hover:cursor-pointer bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7  focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                    value="5"
                    id="r1"
                    
                >
                    <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-blue9" />
                </RadioGroup.Item>
                <label className=" text-[15px] leading-none pl-[15px]" >
                    Static
                </label>
            </div>
            <div className="flex items-center">
                <RadioGroup.Item
                    className="hover:cursor-pointer bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7  focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                    value="4"
                    id="r2"
                    
                >
                    <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-blue9" />
                </RadioGroup.Item>
                <label className=" text-[15px] leading-none pl-[15px]" >
                    SPA
                </label>
            </div>
            <div className="flex items-center">
                <RadioGroup.Item
                    className="hover:cursor-pointer bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7  focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                    value="3"
                    id="r3"
                    
                >
                    <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-blue9" />
                </RadioGroup.Item>
                <label className=" text-[15px] leading-none pl-[15px]" >
                    E-commerce
                </label>
            </div>
            <div className="flex items-center">
                <RadioGroup.Item
                    className="hover:cursor-pointer bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7  focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                    value="2"
                    id="r2"
                    
                >
                    <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-blue9" />
                </RadioGroup.Item>
                <label className=" text-[15px] leading-none pl-[15px]" >
                    Not sure
                </label>
            </div>
            
        </RadioGroup.Root>
            </div>
        </div>
    )
}

export default Consultation