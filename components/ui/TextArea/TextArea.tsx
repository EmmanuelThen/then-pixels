import React from 'react'

type Props = {}

const TextArea = (props: Props) => {
    return (
        <textarea
            className='py-3 box-border w-full bg-slate4 shadow-blackA9 inline-flex h-[200px] px-[10px] appearance-none items-center justify-center rounded-[4px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9'
            name=""
            id=""
            required
        >
        </textarea>
    )
}

export default TextArea