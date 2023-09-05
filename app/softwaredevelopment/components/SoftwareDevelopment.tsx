// Using client here for svg viewbox issue
'use client'
import React from 'react'
import HeroSvg from './HeroSvg'
import ShinyText from '@/components/ShinyText'
import ProductCard from './ProductCard'
import AiSvg from './AiSvg'
import UrlSvg from './UrlSvg'
import CalculatorSvg from './CalculatorSvg'

type Props = {}

const SoftwareDevelopment = (props: Props) => {
    return (
        <div className='text-sm lg:text-base'>
            <section className='slide-in-left flex flex-col items-center justify-center'>
                <div className='focus-in-contract-bck mt-5'>
                    <ShinyText text={
                        <span className='md:text-[90px]'>
                            Software Solutions
                        </span>}
                    />
                </div>
                <HeroSvg />
            </section>
            {/* Title */}
            <h1 className='text-center text-4xl text-blue9 font-bold p-2 md:p-0'>
                Welcome to our Software Solutions Shop
            </h1>
            {/* Description */}
            <section className='p-5'>
                <p className='text-slate10 font-light text-center md:text-lg leading-6 md:leading-8'>
                    These software solutions are designed to streamline and simplify everyday tasks for you,

                    making your life more efficient and productive. Whether it's automating repetitive processes,

                    enhancing data management, or providing user-friendly interfaces, our shop offers a range of

                    innovative software applications that cater to various needs and challenges. Our

                    focus is to create accessible, user-friendly solutions that empower you to optimize

                    your daily routines and improve overall productivity.
                </p>
            </section>
            {/* Products */}
            <section className='flex flex-col md:grid md:grid-cols-3 gap-5 p-5 md:p-20'>
                <ProductCard
                    productName={'AI Summarizer'}
                    imageSrc={<AiSvg />}
                    description={
                        `An AI summarizer is a tool that uses artificial intelligence to automatically

                        condense lengthy text or documents into concise, easy-to-read summaries,
    
                        helping users quickly grasp the essential information and main points without
    
                        having to go through the entire content.`
                    }
                    price={`19`}
                />
                <ProductCard
                    productName={'URL Shortener'}
                    imageSrc={<UrlSvg />}
                    description={
                        `An AI summarizer is a tool that uses artificial intelligence to automatically

                        condense lengthy text or documents into concise, easy-to-read summaries,
    
                        helping users quickly grasp the essential information and main points without
    
                        having to go through the entire content.`
                    }
                    price={`19`}
                />
                <ProductCard
                    productName={'Rental Property Calculator'}
                    imageSrc={<CalculatorSvg />}
                    description={
                        `An AI summarizer is a tool that uses artificial intelligence to automatically

                        condense lengthy text or documents into concise, easy-to-read summaries,
    
                        helping users quickly grasp the essential information and main points without
    
                        having to go through the entire content.`
                    }
                    price={`19`}
                />
            </section>
        </div>
    )
}

export default SoftwareDevelopment