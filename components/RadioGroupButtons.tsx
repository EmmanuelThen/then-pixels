import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

type Props = {
    item1: any
    item2: any
    item3: any
    item4: any
    item5: any
}

const RadioGroupButtons = ({
    item1,
    item2,
    item3,
    item4,
    item5
}: Props) => (
    <div>
        <RadioGroup.Root
            className="flex flex-col gap-2.5"
            defaultValue="5"
            aria-label="View density"
        >
            <div className="flex items-center">
                <RadioGroup.Item
                    className="hover:cursor-pointer bg-white  w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7  focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                    value="5"
                    id="r1"
                    
                >
                    <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-blue9" />
                </RadioGroup.Item>
                <label className=" text-[15px] leading-none pl-[15px]" >
                    {item1}
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
                    {item2}
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
                    {item3}
                </label>
            </div>
            <div className="flex items-center">
                <RadioGroup.Item
                    className="hover:cursor-pointer bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7  focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                    value="2"
                    id="r4"
                    
                >
                    <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-blue9" />
                </RadioGroup.Item>
                <label className=" text-[15px] leading-none pl-[15px]" >
                    {item4}
                </label>
            </div>
            <div className="flex items-center">
                <RadioGroup.Item
                    className="hover:cursor-pointer bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7  focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                    value="1"
                    id="r5"
                    
                >
                    <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-blue9" />
                </RadioGroup.Item>
                <label className=" text-[15px] leading-none pl-[15px]" >
                    {item5}
                </label>
            </div>
        </RadioGroup.Root>
    </div>
);

export default RadioGroupButtons;
