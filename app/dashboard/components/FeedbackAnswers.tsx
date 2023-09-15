import React from 'react'

type Props = {
    answer: any
}

const FeedbackAnswers = ({ answer }: Props) => {
    return (
        <button
            value={answer}
            className=' px-4 py-2 bg-blue9 transition duration-150 ease-in-out hover:opacity-80 text-white rounded cursor-pointer focus:shadow-[0_0_0_2px] focus:shadow-red9' type='button'
        >
            {answer}
        </button>
    )
}

export default FeedbackAnswers