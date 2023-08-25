import React, { useState } from 'react';
import FeedbackAnswers from './FeedbackAnswers';
import TextArea from '@/components/ui/TextArea/TextArea';

type Props = {};

const questions = [
    {
        question: 'How satisfied are you with the overall design and aesthetics of the website we developed for you?',
        answers: ['Very satisfied', 'Somewhat satisified', 'Neutral', 'Somewhat dissatisfied', 'Very dissatisfied']
    },
    {
        question: 'Did the website we developed meet your expectations regarding functionality and features?',
        answers: ['Yes, it exceeded my expectations', 'Yes, it met my expectations', 'No, it fell short of my expectations']
    },
    {
        question: 'How responsive and mobile-friendly is the website we created for you?',
        answers: ['Excellent', 'Good', 'Fair', 'Poor']
    },
    {
        question: 'How would you rate the performance and loading speed of your website?',
        answers: ['Excellent', 'Good', 'Fair', 'Poor']
    },
    {
        question: 'Were you satisfied with the communication and collaboration during the website development process?',
        answers: ['Very satisfied', 'Somewhat satisified', 'Neutral', 'Somewhat dissatisfied', 'Very dissatisfied']
    },
    {
        question: 'Did we adhere to the agreed-upon timeline for website delivery?',
        answers: ['Yes, the delivery was on time', 'The delivery was slightly delayed but still acceptable', 'No, the delivery was significantly delayed']
    },
    {
        question: 'Did we provide adequate support and assistance during the post-development phase of your website?',
        answers: ['Yes, the support was excellent', 'The support was sufficient, but there could have been improvements', 'No, the support was lacking']
    },
    {
        question: 'How do you rate the value for money you received from our web development services?',
        answers: ['Excellent value', 'Good value', 'Fair value', 'Poor value']
    },
];

const FeedbackSlide = (props: Props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNextQuestion = () => {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    };
    return (
        <>
            <form className='w-full p-5'>
                {currentQuestion === questions.length - 1 ?
                    <div>
                        <div>
                            <h1 className='flex justify-center text-slate10 text-3xl mb-5 text-center'>
                                Thank you for completing our survey! We truley value and take into account your feedback.
                            </h1>
                            <p className='text-center mb-5'>
                                Please feel free to write any specific feedback you'd like below
                            </p>
                        </div>

                        <TextArea />
                    </div>
                    :
                    <div className='flex flex-col'>
                        {/* Question */}
                        <div className='flex justify-center w-full mb-10'>
                            <h1 className=' text-slate10 text-3xl'>
                                {questions[currentQuestion].question}
                            </h1>
                        </div>
                        {/* Answers */}
                        <div className='flex justify-evenly'>
                            {questions[currentQuestion].answers.map((answer, i) => (
                                <FeedbackAnswers key={i} answer={answer} />
                            ))}
                        </div>
                    </div>
                }


                <div className={currentQuestion === 0 || currentQuestion === questions.length - 1 ? 'flex justify-end w-full' : 'flex justify-between w-full'}>
                    {/* Previous Question Button */}
                    <button
                        onClick={handlePreviousQuestion}
                        // disabled={currentQuestion === 0}
                        className={currentQuestion === 0 || currentQuestion === questions.length - 1 ?
                            'hidden' :
                            'mt-10 shadow-blackA9 shadow-[0_4px_7px] px-4 py-2 bg-blue9 hover:opacity-80 text-white rounded cursor-pointer'
                        }
                    >
                        {currentQuestion === questions.length - 1 ?
                            ''
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        }
                    </button>
                    {/* Next Question Button */}
                    <button
                        onClick={handleNextQuestion}
                        disabled={currentQuestion === questions.length - 1 ? true : false}
                        type={currentQuestion === questions.length + 1 ? 'submit' : 'button'}
                        className='mt-10 shadow-blackA9 shadow-[0_4px_7px] px-4 py-2 bg-blue9 hover:opacity-80 text-white rounded cursor-pointer'
                    >
                        {currentQuestion === questions.length - 1 ?
                            <div>
                                Submit survey
                            </div>
                            :
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3' />
                            </svg>
                        }
                    </button>
                </div>
            </form>
        </>
    );

};

export default FeedbackSlide;
