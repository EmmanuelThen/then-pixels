import React from 'react'

type Props = {
    price: any
}

const BoldPricing = ({ price }: Props) => {
    return (
        <div id='custom-text' className='relative text-[32px]'>
            <sup className='font-extrabold'>
                $
            </sup>
            <span className='text-[45px] font-extrabold'>
                {price}
            </span>
            <sup className='font-extrabold'>
                .99
            </sup>
        </div>
    )
}

export default BoldPricing