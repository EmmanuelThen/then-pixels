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
        <div className='md:block rounded shadow-blackA9 shadow-[0px_4px_7px] w-fit p-5'>
            {/* Image */}
            <div className='md:block'>
                <div className='flex justify-between w-full rounded p-2 md:p-5'>
                    <div>{imageSrc}</div>
                    {/* Price */}
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
                {/* Product name and description */}
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
            <div className=''>
                <button className='cursor-not-allowed h-[35px] bg-slate9 text-white px-2 rounded  w-full'>
                    Coming soon
                </button>
            </div>
        </div>
    )
}

export default ProductCard