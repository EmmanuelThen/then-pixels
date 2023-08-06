import React from 'react'

type Props = {
    answer: any
}

const FeedbackAnswers = ({ answer }: Props) => {
  return (
    <button className=' px-4 py-2 bg-blue9 hover:opacity-80 text-white rounded cursor-pointer focus:shadow-[0_0_0_2px] focus:shadow-red9' type='button'>
        {answer}
    </button>
  )
}

export default FeedbackAnswers