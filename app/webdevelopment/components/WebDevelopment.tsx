'use client'
import React, { useEffect, useRef } from 'react'
import ShinyText from '@/components/ShinyText'
import DevSvg from './DevSvg'
import observer from '@/utils/intersection-observer'
import LandingPageSection from '@/components/LandingPageSection'
import ArrowButton from '@/components/ArrowButton'
import BoldPricing from '@/components/BoldPricing'

type Props = {}

const WebDevelopment = (props: Props) => {
    const hiddenElementsRef = useRef<NodeListOf<HTMLElement> | null>(null);
    const hiddenSideElementsRef = useRef<NodeListOf<HTMLElement> | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const sideElementObserverRef = useRef<IntersectionObserver | null>(null);


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

        sideElementObserverRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slideInFromSide');
                } else {
                    entry.target.classList.remove('slideInFromSide');
                }
            });
        });


        hiddenElementsRef.current = document.querySelectorAll('.hiddenElement');
        hiddenSideElementsRef.current = document.querySelectorAll('.hiddenSideElement');

        if (hiddenElementsRef.current && observerRef.current) {
            hiddenElementsRef.current.forEach((e) => observerRef.current!.observe(e));
        }
        if (hiddenSideElementsRef.current && sideElementObserverRef.current) {
            hiddenSideElementsRef.current.forEach((e) => sideElementObserverRef.current!.observe(e));
        }

        // Clean-up function
        return () => {
            if (hiddenElementsRef.current && observerRef.current) {
                hiddenElementsRef.current.forEach((e) => observerRef.current!.unobserve(e));
            }
            if (hiddenSideElementsRef.current && sideElementObserverRef.current) {
                hiddenSideElementsRef.current.forEach((e) => sideElementObserverRef.current!.unobserve(e));
            }
        };
    }, []);

    return (
        <div className='flex flex-col gap-[100px] text-sm lg:text-base'>
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
            <div className=''>
                <article className={`flex w-full`}>
                    {/* Descritption */}
                    <div className='w-[50%]'>
                        <h3 className='hiddenElement font-semibold text-lg text-red9 md:mb-10 lg:mb-5 p-5'>Static Website</h3>
                        <p className='hiddenElement p-5 leading-8 font-light'>
                            A static website is a type of website that consists of web pages with fixed content that remains

                            the same for all visitors. Unlike dynamic websites that generate content on-the-fly, static websites

                            are pre-built and don't change based on user interactions. They are usually created using HTML, CSS,

                            and sometimes a bit of JavaScript for simple interactions. Static websites are easy to host, load

                            quickly, and are ideal for displaying information that doesn't need frequent updates.
                        </p>
                        <div className='p-5'>
                            <p className='hiddenElement font-semibold mb-5'>
                            <span className='text-red9'>**</span>
                                Starting at: 
                            </p>
                            <div className='hiddenElement'>
                                <BoldPricing
                                    price='999'
                                />
                            </div>
                        </div>
                        <div className='p-5'>
                            <ArrowButton buttonText={'Get started'} href={'/consultation'} />
                        </div>
                    </div>

                    {/* Parent Div for cards */}
                    <div className=' flex flex-col gap-5 w-[50%] p-5'>
                        {/* Card 1 */}
                        <div className='hiddenSideElement rounded-lg p-3 bg-blue9 shadow-blackA9 shadow-[0px_4px_7px]'>
                            <h1 className='font-semibold text-white text-lg lg:text-2xl'>Advantages:</h1>
                            <ul className='flex flex-col gap-3'>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Simplicity:</span> Static websites are easy to create and deploy.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Fast Loading:</span> Since there's no need to generate content dynamically, pages load quickly.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Security:</span> With fewer moving parts, the attack surface for security breaches is smaller.
                                </li>
                            </ul>
                        </div>
                        {/* Card 2 */}
                        <div className='hiddenSideElement rounded-lg p-3 bg-red9 shadow-blackA9 shadow-[0px_4px_7px]'>
                            <h1 className='font-semibold text-white text-lg lg:text-2xl'>Drawbacks:</h1>
                            <ul className='flex flex-col gap-3'>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Limited Interactivity:</span> Static websites are not well-suited for complex interactions.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Maintenance:</span> Updates require manual editing of HTML/CSS files.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Scalability:</span> Managing large amounts of content can become challenging.
                                </li>
                            </ul>
                        </div>
                        {/* Card 3 */}
                        <div className='hiddenSideElement rounded-lg p-3 bg-green9 shadow-blackA9 shadow-[0px_4px_7px]'>
                            <h1 className='font-semibold text-white text-lg lg:text-2xl'>Use cases:</h1>
                            <ul className='flex flex-col gap-3'>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Informational Sites:</span> Share information, company details, or event details.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Landing Pages:</span> Create focused pages for marketing campaigns or product launches.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Portfolio Websites:</span> Display your work or projects to potential clients or employers.
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
            {/* SPA */}
            <div className=''>
                <article className={`flex w-full`}>
                    {/* Description */}
                    <div className='w-[50%]'>
                        <h3 className='hiddenElement font-semibold text-lg text-red9 md:mb-10 lg:mb-5 p-5'>Single Page Application (SPA)</h3>
                        <p className='hiddenElement p-5 leading-8 font-light'>
                            A Single Page Application (SPA) is a modern web application design that provides a seamless and dynamic user experience

                            by loading all necessary resources and content on a single web page. SPAs use JavaScript frameworks like React, Angular, or Vue

                            to dynamically update the content as users interact with the page, without the need for full page reloads.

                            This approach leads to faster and more responsive user interfaces, as well as smoother navigation between

                            different sections of the application.
                        </p>
                        <div className='p-5'>
                            <p className='hiddenElement font-semibold mb-5'>
                            <span className='text-red9'>**</span>
                                Starting at: 
                            </p>
                            <div className='hiddenElement'>
                                <BoldPricing
                                    price='4,999'
                                />
                            </div>
                        </div>
                        <div className='p-5'>
                            <ArrowButton buttonText={'Get started'} href={'/consultation'} />
                        </div>
                    </div>
                    {/* Parent Div for cards */}
                    <div className='flex flex-col gap-5 w-[50%] p-5'>
                        {/* Card 1 */}
                        <div className='hiddenSideElement rounded-lg p-3 bg-blue9 shadow-blackA9 shadow-[0px_4px_7px]'>
                            <h1 className='font-semibold text-white text-lg lg:text-2xl'>Advantages:</h1>
                            <ul className='flex flex-col gap-3'>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Seamless User Experience:</span> SPAs provide fluid interactions without full page reloads.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Dynamic Content:</span> Content updates without disrupting the user's flow.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Enhanced Performance:</span> Only necessary data is fetched, improving speed.
                                </li>
                            </ul>
                        </div>
                        {/* Card 2 */}
                        <div className='hiddenSideElement rounded-lg p-3 bg-red9 shadow-blackA9 shadow-[0px_4px_7px]'>
                            <h1 className='font-semibold text-white text-lg lg:text-2xl'>Drawbacks:</h1>
                            <ul className='flex flex-col gap-3'>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'> SEO Challenges:</span> Initial rendering can be problematic for search engine indexing.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Initial Load Time:</span> Large JavaScript bundles can slow down the first load.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Complexity:</span> Developing SPAs requires expertise in JavaScript frameworks.
                                </li>
                            </ul>
                        </div>
                        {/* Card 3 */}
                        <div className='hiddenSideElement rounded-lg p-3 bg-green9 shadow-blackA9 shadow-[0px_4px_7px]'>
                            <h1 className='font-semibold text-white text-lg lg:text-2xl'>Use cases:</h1>
                            <ul className='flex flex-col gap-3'>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Web Applications:</span> Suitable for interactive web apps like project management tools.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Social Media Platforms:</span> Enable real-time updates and notifications.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Streaming Services:</span> Allow users to play media without interruptions.
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
            {/* E-commerce */}
            <div className=''>
                <article className={`flex w-full`}>
                    {/* Description */}
                    <div className='w-[50%]'>
                        <h3 className='hiddenElement font-semibold text-lg text-red9 md:mb-10 lg:mb-5 p-5'>E-commerce</h3>
                        <p className='hiddenElement p-5 leading-8 font-light'>
                            An e-commerce website is an online platform that enables businesses to showcase and sell products or services to customers

                            over the internet. These websites often feature product catalogs, detailed descriptions, pricing information, and a secure checkout process.

                            E-commerce websites can vary in complexity, from simple platforms for small businesses to comprehensive marketplaces for various vendors.

                            They integrate payment gateways to facilitate transactions and provide a convenient shopping experience for users.
                        </p>
                        <div className='p-5'>
                            <p className='hiddenElement font-semibold mb-5'>
                            <span className='text-red9'>**</span>
                                Starting at: 
                            </p>
                            <div className='hiddenElement'>
                                <BoldPricing
                                    price='9,999'
                                />
                            </div>
                        </div>
                        <div className='p-5'>
                            <ArrowButton buttonText={'Get started'} href={'/consultation'} />
                        </div>
                    </div>
                    {/* Parent Div for cards */}
                    <div className='flex flex-col gap-5 w-[50%] p-5'>
                        {/* Card 1 */}
                        <div className='hiddenSideElement rounded-lg p-3 bg-blue9 shadow-blackA9 shadow-[0px_4px_7px]'>
                            <h1 className='font-semibold text-white text-lg lg:text-2xl'>Advantages:</h1>
                            <ul className='flex flex-col gap-3'>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Global Reach:</span> Reach customers beyond physical store boundaries.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Convenience:</span> Shoppers can browse and purchase from the comfort of their homes.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Analytics:</span> Gather insights about customer behavior and preferences.
                                </li>
                            </ul>
                        </div>
                        {/* Card 2 */}
                        <div className='hiddenSideElement rounded-lg p-3 bg-red9 shadow-blackA9 shadow-[0px_4px_7px]'>
                            <h1 className='font-semibold text-white text-lg lg:text-2xl'>Drawbacks:</h1>
                            <ul className='flex flex-col gap-3'>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Security:</span> Safeguard customer data and payment information.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Competition:</span> The online market is highly competitive, requiring unique selling points.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Customer Trust:</span> Build trust through reliable shipping, returns, and customer support.
                                </li>
                            </ul>
                        </div>
                        {/* Card 3 */}
                        <div className='hiddenSideElement rounded-lg p-3 bg-green9 shadow-blackA9 shadow-[0px_4px_7px]'>
                            <h1 className='font-semibold text-white text-lg lg:text-2xl'>Key features:</h1>
                            <ul className='flex flex-col gap-3'>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Product Catalog:</span> Organize products with categories, descriptions, and images.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Shopping Cart:</span> Allow users to add items for purchase before checkout.
                                </li>
                                <li className='text-white'>
                                    <span className='font-medium text-sky12'>Payment Gateway:</span> Securely handle online transactions and payment methods.
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>

        </div>
    )
}

export default WebDevelopment