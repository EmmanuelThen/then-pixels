'use client'
import InputForms from '@/components/InputForms'
import RadioGroupButtons from '@/components/RadioGroupButtons'
import ShinyText from '@/components/ShinyText'
import React from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group';
import ConsultationForm from './ConsultationForm'




type Props = {}

const Consultation = (props: Props) => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center p-5 md:p-20'>
                <div>
                    <ShinyText
                        text='Consultation'
                    />
                </div>
                <div className='flex flex-col md:flex-row rounded shadow-blackA9 shadow-[0px_4px_7px] w-full'>
                    <div className='color-change-5x flex justify-center items-center rounded-t p-10 md:rounded-l md:w-[60%]'>
                        ThenPixels logo here
                    </div>
                    {/* make this section hidden behind the left side and have it slide in on page load */}
                    <div className='flex justify-center items-center md:w-[40%] p-5 '>
                        <ConsultationForm
                            valueMissingMessage={undefined}
                            typeMismatchMessage={undefined}
                            buttonText={`Submit`}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Consultation