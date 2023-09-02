import React from 'react'

type Props = {}

const ProductCard = (props: Props) => {
    return (
        // <div className='w-[50%] h-[400px] bg-blue9 rounded-lg'>
        //     <div className='flex justify-center'>
        //         <h1 className='z-[100] w-fit border mt-5'>
        //             AI Summarizer
        //         </h1>
        //     </div>
        //     <div className='arrowz rounded-lg'></div>
        // </div>
        <div className='relative border w-full h-[200px] rounded p-5'>

            {/* product info and buy  */}
            <div className='absolute left-[99%] border shadow-blackA9 shadow-[0_4px_7px] bg-white rounded p-5'>
                <h3 className='text-red9'>
                    AI Summarizer
                </h3>
                <h3 className='text-red9'>
                    AI Summarizer
                </h3>
                <h3 className='text-red9'>
                    AI Summarizer
                </h3>
            </div>
        </div>
    )
}

export default ProductCard