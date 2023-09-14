import React from 'react'

type Props = {
    svg: any
}

const OAuthButton = ({ svg }: Props) => {
    return (
        <button className="shadow-md rounded p-3 transition duration-150 ease-in-out hover:bg-slate4">
            {svg}
        </button>
    )
}

export default OAuthButton