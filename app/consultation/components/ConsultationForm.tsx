import React from 'react'
import * as Form from '@radix-ui/react-form';
import * as RadioGroup from '@radix-ui/react-radio-group';


type Props = {
    valueMissingMessage: any
    typeMismatchMessage: any
    buttonText: any
}

const ConsultationForm = ({ valueMissingMessage, typeMismatchMessage, buttonText, }: Props) => {
    return (
        <Form.Root className="w-full p-2">
            {/* Field 1 */}
            <Form.Field className="grid" name="full_name">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-slate10">Full name</Form.Label>
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
                    />
                </Form.Control>
            </Form.Field>
            {/* Field 2 */}
            <Form.Field name='email'>
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-slate10">Email</Form.Label>
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
                    />
                </Form.Control>
            </Form.Field>
            {/* Field 3 */}
            <Form.Field name='email'>
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-slate10">Phone number</Form.Label>
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
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field name='website_format'>
                <RadioGroup.Root
                    className="flex flex-col gap-2.5 mb-5"
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
            </Form.Field>
            <Form.Submit asChild>
                <button
                    type='submit'
                    disabled={true}
                    className={`w-full box-border text-white hover:opacity-80 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-blue9 px-[15px] font-medium leading-none mt-[10px] cursor-pointer`}
                >
                    {buttonText}
                </button>
            </Form.Submit>
        </Form.Root>
    )
}

export default ConsultationForm