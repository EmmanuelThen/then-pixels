'use client'
import React from 'react';
import * as Form from '@radix-ui/react-form';

interface InputFormInterface {
    valueMissingMessage: any
    typeMismatchMessage: any
    buttonText: any
    buttonDisplay: string
    userInput: any
    onUserInput: (value: any) => void
    label: any
    extraInput: any
}

const InputForms = ({
    valueMissingMessage,
    typeMismatchMessage,
    buttonText,
    buttonDisplay,
    userInput,
    label,
    extraInput,
    onUserInput }: InputFormInterface) => {

    return (
        <Form.Root className="w-full p-2">
            <Form.Field className="grid mb-[10px]" name="email">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-slate10">{label}</Form.Label>
                    <Form.Message className="text-[13px] text-red9" match="valueMissing">
                        {valueMissingMessage}
                    </Form.Message>
                    <Form.Message className="text-[13px] text-red9" match="typeMismatch">
                        {typeMismatchMessage}
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <input
                        className="mb-5 box-border w-full bg-slate4 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type='text'
                        required
                        // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        onChange={onUserInput}
                        value={userInput}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field name='textarea'>
                <div className="flex items-baseline justify-between">
                    <Form.Message className="text-[13px] text-red9" match="valueMissing">
                        {valueMissingMessage}
                    </Form.Message>
                    <Form.Message className="text-[13px] text-red9" match="typeMismatch">
                        {typeMismatchMessage}
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    {extraInput}
                </Form.Control>
            </Form.Field>

            <Form.Submit asChild>
                <div className='flex justify-center'>
                    <button className={`${buttonDisplay} box-border w-[50%] text-white shadow-blackA7 hover:bg-blue9/80 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-blue9 px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]`}>
                        {buttonText}
                    </button>
                </div>
            </Form.Submit>
        </Form.Root>
    )
};

export default InputForms;