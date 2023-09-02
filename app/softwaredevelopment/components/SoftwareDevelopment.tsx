import React from 'react'
import HeroSvg from './HeroSvg'
import ShinyText from '@/components/ShinyText'
import ProductCard from './ProductCard'

type Props = {}

const SoftwareDevelopment = (props: Props) => {
    return (
        <div className='text-sm lg:text-base'>
            <div className='slide-in-left flex flex-col items-center justify-center'>
                <div className='focus-in-contract-bck mt-5'>
                    <ShinyText text={
                        <span className='text-[90px]'>
                            Software Solutions
                        </span>}
                    />
                </div>
                <HeroSvg />
            </div>
            {/* Description */}
            <div>
                <p>Description of software shop</p>
            </div>
            {/* Products */}
            <div className='p-20'>
                <ProductCard />
            </div>
        </div>
    )
}

export default SoftwareDevelopment