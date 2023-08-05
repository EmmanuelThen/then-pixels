import React, { useState } from 'react';

type Props = {};

const questions = [
    { question: 'How satisfied are you with the overall design and aesthetics of the website we developed for you?' },
    { question: 'Did the website we developed meet your expectations regarding functionality and features?' },
    { question: 'How responsive and mobile-friendly is the website we created for you?' },
    { question: 'How would you rate the performance and loading speed of your website?' },
    { question: 'Were you satisfied with the communication and collaboration during the website development process?' },
    { question: 'Did we adhere to the agreed-upon timeline for website delivery?' },
    { question: 'Did we provide adequate support and assistance during the post-development phase of your website?' },
    { question: 'How do you rate the value for money you received from our web development services?' },
    { question: '' },
    { question: '' },
];

const FeedbackSlide = (props: Props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNextQuestion = () => {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    };

    return (
        <>
            <div>
                {currentQuestion === questions.length + 1 ?
                    <div className='text-slate10 text-3xl'>
                        Finished
                    </div>
                    :
                    <div className='flex flex-col'>
                        {/* Question */}
                        <div className='p-20'>
                            <h1 className='text-slate10 text-3xl'>
                                {questions[currentQuestion].question}
                            </h1>
                        </div>
                    </div>
                }

                {/* Next Question Button */}
                <div className='flex justify-end w-full'>
                    <button
                        onClick={handleNextQuestion}
                        disabled={currentQuestion === questions.length - 1}
                        className='mt-10 shadow-blackA9 shadow-[0_4px_7px] px-4 py-2 bg-blue9 hover:opacity-80 text-white rounded cursor-pointer'
                    >
                        {currentQuestion === questions.length + 1 ?
                            <button>
                                Submit Survey
                            </button>
                            :
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3' />
                            </svg>
                        }
                    </button>
                </div>
            </div>
        </>
    );
};

export default FeedbackSlide;
