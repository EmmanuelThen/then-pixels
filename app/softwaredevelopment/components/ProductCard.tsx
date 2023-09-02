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
        <div className='rounded shadow-blackA9 shadow-[0px_4px_7px] h-fit p-5'>
            {/* Image */}
            <div className='border border-red-500'>
                <Image
                    className='w-full'
                    src={imageSrc}
                    width={100}
                    height={100}
                    alt=''
                />
            </div>
            {/* Description */}
            <div className='p-5'>
                <h3 className='text-red9 font-semibold'>
                    {productName}
                </h3>
                <p className='font-light'>
                    {description}
                </p>
            </div>
            {/* Purchase button & price */}
            <div className='flex justify-between'>
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
                <button className='h-[35px] bg-blue9 text-white px-2 rounded hover:opacity-80'>
                    Purchase
                </button>
            </div>
        </div>
    )
}

export default ProductCard