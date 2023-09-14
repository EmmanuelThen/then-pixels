import React from 'react'

type Props = {}

const InstagramLogo = (props: Props) => {
    return (
        <svg
            stroke='hsl(206 100% 50.0%)'
            className=' w-[26.5px] h-[26.5px] transition duration-150 ease-in-out hover:opacity-80'
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="instagram">
            <g
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-name="<Group>">
                <rect
                    width="21"
                    height="21"
                    x="1.5"
                    y="1.5"
                    data-name="<Path>"
                    rx="5.48"
                    ry="5.48">
                </rect>
                <circle cx="12" cy="12" r="5.5" data-name="<Path>">
                </circle>
                <circle cx="18" cy="5" r=".5" data-name="<Path>">
                </circle>
            </g>
        </svg>
    )
}

export default InstagramLogo