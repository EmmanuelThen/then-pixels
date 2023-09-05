import Image from 'next/image'
import React from 'react'


type Props = {
    productName: string
    description: string
    price: any
    imageSrc: any
}

const ProductCard = ({ productName, description, price, imageSrc }: Props) => {
    return (
        <div className='md:block rounded shadow-blackA9 shadow-[0px_4px_7px] w-fit  p-5'>
            {/* Image */}
            <div className='md:block'>
                <div className='flex justify-between w-full rounded p-2 md:p-5'>
                    <div>{imageSrc}</div>
                    <div id='custom-text' className='text-center relative text-[32px]'>
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
                </div>
                {/* Description */}
                <div className='mt-2 md:mt-5 mb-5'>
                    <h3 className='text-blue9 font-semibold mb-5'>
                        {productName}
                    </h3>
                    <p className='md:font-light'>
                        {description}
                    </p>
                </div>
            </div>
            {/* Purchase button & price */}
            <div className='flex flex-col gap-5 items-center md:flex-row md:justify-between'>
                {/* <div id='custom-text' className='text-center relative text-[32px]'>
                    <sup className='font-extrabold'>
                        $
                    </sup>
                    <span className='text-[45px] font-extrabold'>
                        {price}
                    </span>
                    <sup className='font-extrabold'>
                        .99
                    </sup>
                </div> */}
                <button className='h-[35px] bg-blue9 text-white px-2 rounded hover:opacity-80 w-full '>
                    Purchase
                </button>
            </div>
        </div>
    )
}

export default ProductCard