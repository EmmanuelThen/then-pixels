import React from 'react'
import Star from '@/components/icons/Star'
import RadioGroupButtons from '@/components/RadioGroupButtons'

type Props = {}

const FeedbackStarOptions = (props: Props) => {
    return (
        <div>
            <RadioGroupButtons
                item1={
                    <div className='flex'>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                }
                item2={
                    <div className='flex'>
                        <Star />
                        <Star />
                        <Star />
                        <Star />

                    </div>
                }
                item3={
                    <div className='flex'>
                        <Star />
                        <Star />
                        <Star />

                    </div>
                }
                item4={
                    <div className='flex'>
                        <Star />
                        <Star />

                    </div>
                }
                item5={
                    <div className='flex'>
                        <Star />

                    </div>
                }
            />
        </div>
    )
}

export default FeedbackStarOptions;