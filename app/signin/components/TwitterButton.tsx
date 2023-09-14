import React from 'react'

type Props = {}

const TwitterButton = (props: Props) => {
    return (
        <button className="flex gap-8 w-full bg-blue9 text-white hover:bg-[#1D9BF0]/60 h-[35px] items-center rounded-[4px] font-medium  leading-none focus:outline-none">
            <svg className='w-[20px] h-[20px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" id="twitter">
                <g clip-path="url(#clip0_84_15697)">
                    <rect width="512" height="512" fill="#000" rx="60">
                    </rect>
                    <path fill="#fff" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z">
                    </path>
                </g>
                <defs>
                    <clipPath id="clip0_84_15697">
                        <rect width="512" height="512" fill="#fff">
                        </rect>
                    </clipPath>
                </defs>
            </svg>
            Continue with X
        </button>
    )
}

export default TwitterButton