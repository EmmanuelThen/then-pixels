import React from 'react'
import * as Form from '@radix-ui/react-form';
import * as RadioGroup from '@radix-ui/react-radio-group';
import TextArea from '@/components/ui/TextArea/TextArea';


type Props = {
    valueMissingMessage: any
    typeMismatchMessage: any
    buttonText: any
}

const ConsultationForm = ({ valueMissingMessage, typeMismatchMessage, buttonText, }: Props) => {
    return (
        <Form.Root className="w-full p-2 md:h-full">
            {/* Field 1 */}
            <h1 className='text-blue9 font-semibold mb-5'>
                Contact Information:
            </h1>
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
            <Form.Field name='business_industry'>
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-slate10">Company name</Form.Label>
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
            <h1 className='text-blue9 font-semibold mb-5'>
                Project overview:
            </h1>
            <Form.Field name='website_format'>
                <RadioGroup.Root
                    className="flex flex-col gap-2.5 mb-5"
                    defaultValue="5"
                    aria-label="View density"
                >
                    <h1 className='text-slate10 font-medium'>
                        What type of website are you looking to create?
                    </h1>
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
            <Form.Field name='text_area'>
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-slate10">
                        Who is your target audience or customer base?
                    </Form.Label>
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
            <Form.Field name='text_area'>
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[25px] mb-2 text-slate10">
                        Are there any websites or designs that you admire and would like to use as inspiration?
                        If so list the website
                    </Form.Label>
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
            <Form.Field name='text_area'>
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[25px] mb-2 text-slate10">
                        Do you have a brand style guide or existing branding elements (logo, color scheme)
                        that should be incorporated into the website?
                    </Form.Label>
                    <Form.Message className="text-[13px] text-red9" match="valueMissing">
                        {valueMissingMessage}
                    </Form.Message>
                    <Form.Message className="text-[13px] text-red9" match="typeMismatch">
                        {typeMismatchMessage}
                    </Form.Message>
                </div>
                <RadioGroup.Root
                    className='flex justify-around mb-5'
                    defaultValue='yes'
                >
                    <div className="flex items-center">
                        <RadioGroup.Item
                            className="hover:cursor-pointer bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7  focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                            value="1"
                            id="yes"
                        >
                            <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-blue9" />
                        </RadioGroup.Item>
                        <label className=" text-[15px] leading-none pl-[15px]" >
                            Yes
                        </label>
                    </div>
                    <div className="flex items-center">
                        <RadioGroup.Item
                            className="hover:cursor-pointer bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7  focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                            value="2"
                            id="no"
                        >
                            <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-blue9" />
                        </RadioGroup.Item>
                        <label className=" text-[15px] leading-none pl-[15px]" >
                            No
                        </label>
                    </div>
                </RadioGroup.Root>
            </Form.Field>
            <Form.Field name='text_area'>
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[25px] mb-2 text-slate10">
                        Do you have existing content (text, images, videos) that you want to include on the website?
                    </Form.Label>
                    <Form.Message className="text-[13px] text-red9" match="valueMissing">
                        {valueMissingMessage}
                    </Form.Message>
                    <Form.Message className="text-[13px] text-red9" match="typeMismatch">
                        {typeMismatchMessage}
                    </Form.Message>
                </div>
                <RadioGroup.Root
                    className='flex justify-around mb-5'
                    defaultValue='yes'
                >
                    <div className="flex items-center">
                        <RadioGroup.Item
                            className="hover:cursor-pointer bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7  focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                            value="1"
                            id="yes"
                        >
                            <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-blue9" />
                        </RadioGroup.Item>
                        <label className=" text-[15px] leading-none pl-[15px]" >
                            Yes
                        </label>
                    </div>
                    <div className="flex items-center">
                        <RadioGroup.Item
                            className="hover:cursor-pointer bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7  focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                            value="2"
                            id="no"
                        >
                            <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-blue9" />
                        </RadioGroup.Item>
                        <label className=" text-[15px] leading-none pl-[15px]" >
                            No
                        </label>
                    </div>
                </RadioGroup.Root>
            </Form.Field>
            <Form.Field name='text_area' className='mb-5'>
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[25px] mb-2 text-slate10">
                        Briefly describe your project & what specific goals or objectives you are looking to achieve with this project?
                    </Form.Label>
                    <Form.Message className="text-[13px] text-red9" match="valueMissing">
                        {valueMissingMessage}
                    </Form.Message>
                    <Form.Message className="text-[13px] text-red9" match="typeMismatch">
                        {typeMismatchMessage}
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <TextArea />
                </Form.Control>
            </Form.Field>

            <Form.Field className="grid" name="full_name">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[25px] mb-2 text-slate10">
                        What specific features or third-party integrations do you want on your website (e.g., contact forms,
                        e-commerce functionality, blog, user registration, payment gateways, CRM)?
                    </Form.Label>
                    <Form.Message className="text-[13px] text-red9" match="valueMissing">
                        {valueMissingMessage}
                    </Form.Message>
                    <Form.Message className="text-[13px] text-red9" match="typeMismatch">
                        {typeMismatchMessage}
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <TextArea />
                </Form.Control>
            </Form.Field>
            <h1 className='text-blue9 font-semibold mt-5 mb-5'>
                Additional Comments or Questions:
            </h1>
            <Form.Field className="grid" name="full_name">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[25px] mb-2 text-slate10">
                        Is there any other information, questions, or special requests you would like to share?
                    </Form.Label>
                    <Form.Message className="text-[13px] text-red9" match="valueMissing">
                        {valueMissingMessage}
                    </Form.Message>
                    <Form.Message className="text-[13px] text-red9" match="typeMismatch">
                        {typeMismatchMessage}
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <TextArea />
                </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
                <button
                    type='submit'
                    disabled={true}
                    className={`mb-2.5 w-full box-border text-white transition duration-150 ease-in-out hover:bg-blue9 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-zinc-500 px-[15px] font-medium leading-none mt-[10px] cursor-pointer`}
                >
                    {buttonText}
                </button>
            </Form.Submit>
        </Form.Root>
    )
}

export default ConsultationForm