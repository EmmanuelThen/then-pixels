'use client'
import React, { useEffect, useRef } from 'react'
import ShinyText from '@/components/ShinyText'
import DevSvg from './DevSvg'
import observer from '@/utils/intersection-observer'
import LandingPageSection from '@/components/LandingPageSection'

type Props = {}

const WebDevelopment = (props: Props) => {
    const hiddenElementsRef = useRef<NodeListOf<HTMLElement> | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        hiddenElementsRef.current = document.querySelectorAll('.hiddenElement');

        if (hiddenElementsRef.current && observerRef.current) {
            hiddenElementsRef.current.forEach((e) => observerRef.current!.observe(e));
        }

        // Clean-up function
        return () => {
            if (hiddenElementsRef.current && observerRef.current) {
                hiddenElementsRef.current.forEach((e) => observerRef.current!.unobserve(e));
            }
        };
    }, []);

    return (
        <div>
            <div className='slide-in-left flex flex-col items-center justify-center'>
                <div className='focus-in-contract-bck mt-5'>
                    <ShinyText text={
                        <span className='text-[90px]'>
                            Web Development
                        </span>}
                    />
                </div>
                <DevSvg />
            </div>
            {/* Static */}
            <div className='border'>
                <article className={`flex w-full`}>
                    <div className='w-[50%]'>
                        <h3 className='hiddenElement font-semibold text-lg text-red9 mb-5 p-5'>Static Website</h3>
                        <p className='hiddenElement p-5 leading-8'>
                            A static website is a type of website that consists of web pages with fixed content that remains

                            the same for all visitors. Unlike dynamic websites that generate content on-the-fly, static websites

                            are pre-built and don't change based on user interactions. They are usually created using HTML, CSS,

                            and sometimes a bit of JavaScript for simple interactions. Static websites are easy to host, load

                            quickly, and are ideal for displaying information that doesn't need frequent updates.
                        </p>
                    </div>

                    <div className='flex flex-col gap-5 w-[50%] p-5'>
                        <div className='border rounded'>
                            <h1 className='text-blue9'>Advantages:</h1>
                            <ul>
                                <li>
                                    <span className='font-semibold'>Simplicity:</span> Static websites are easy to create and deploy.
                                </li>
                                <li>
                                    <span className='font-semibold'>Fast Loading:</span> Since there's no need to generate content dynamically, pages load quickly.
                                </li>
                                <li>
                                    <span className='font-semibold'>Security:</span> With fewer moving parts, the attack surface for security breaches is smaller.
                                </li>
                            </ul>
                        </div>

                        <div className='border rounded'>
                            <h1 className='text-red9'>Disadvantages:</h1>
                            <ul>
                                <li>
                                    <span className='font-semibold'>Limited Interactivity:</span> Static websites are not well-suited for complex interactions.
                                </li>
                                <li>
                                    <span className='font-semibold'>Maintenance:</span> Updates require manual editing of HTML/CSS files.
                                </li>
                                <li>
                                    <span className='font-semibold'>Scalability:</span> Managing large amounts of content can become challenging.
                                </li>
                            </ul>
                        </div>

                        <div className='border rounded'>
                            <h1 className='text-green9'>Use cases:</h1>
                            <ul>
                                <li>
                                    <span className='font-semibold'>Informational Sites:</span> Share information, company details, or event details.
                                </li>
                                <li>
                                    <span className='font-semibold'>Landing Pages:</span> Create focused pages for marketing campaigns or product launches.
                                </li>
                                <li>
                                    <span className='font-semibold'>Portfolio Websites:</span> Display your work or projects to potential clients or employers.
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
            {/* SPA */}
            <div className=''>
                <article className={`flex w-full`}>
                    <div className='w-[50%]'>
                        <h3 className='hiddenElement font-semibold text-lg text-red9 mb-5 p-5'>Single Page Application (SPA)</h3>
                        <p className='hiddenElement p-5 leading-8'>
                            A Single Page Application (SPA) is a modern web application design that provides a seamless and dynamic user experience

                            by loading all necessary resources and content on a single web page. SPAs use JavaScript frameworks like React, Angular, or Vue

                            to dynamically update the content as users interact with the page, without the need for full page reloads.

                            This approach leads to faster and more responsive user interfaces, as well as smoother navigation between

                            different sections of the application.
                        </p>
                    </div>

                    <div className='w-[50%]'>

                    </div>
                </article>
            </div>
            {/* E-commerce */}
            <div className=''>
                <article className={`flex w-full`}>
                    <div className='w-[50%]'>
                        <h3 className='hiddenElement font-semibold text-lg text-red9 mb-5 p-5'>E-commerce</h3>
                        <p className='hiddenElement p-5 leading-8'>
                            An e-commerce website is an online platform that enables businesses to showcase and sell products or services to customers

                            over the internet. These websites often feature product catalogs, detailed descriptions, pricing information, and a secure checkout process.

                            E-commerce websites can vary in complexity, from simple platforms for small businesses to comprehensive marketplaces for various vendors.

                            They integrate payment gateways to facilitate transactions and provide a convenient shopping experience for users.
                        </p>
                    </div>

                    <div className='w-[50%]'>

                    </div>
                </article>
            </div>

        </div>
    )
}

export default WebDevelopment