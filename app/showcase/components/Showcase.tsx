import ShinyText from '@/components/ShinyText'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ShowcaseBox from './ShowcaseBox'

type Props = {}

const Showcase = (props: Props) => {
    return (
        <>
            <div className='text-sm lg:text-base p-10 lg:p-20 w-full'>
                <section className='flex'>
                    <div className='focus-in-contract-bck '>
                        <ShinyText text={
                            <div className='md:text-[61.9px] lg:text-[90px]'>
                                Where <span className='text-blue9'>vision <br /></span> becomes <span className='text-red9'>reality,</span> welcome to our showcase.
                            </div>
                        }
                        />
                    </div>
                    <div className='flex flex-col gap-2  w-full'>
                        <div className='flex justify-around w-full'>
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 slide-in-out"
                                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg"
                                alt="Transistor"
                                width={158}
                                height={48}
                            />
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 slide-in-out"
                                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg"
                                alt="Reform"
                                width={158}
                                height={48}
                            />
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 slide-in-out"
                                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-400.svg"
                                alt="Tuple"
                                width={158}
                                height={48}
                            />
                        </div>
                        <div className='flex justify-between w-full'>
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 slide-in-out"
                                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg"
                                alt="SavvyCal"
                                width={158}
                                height={48}
                            />
                            <Image
                                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 slide-in-out"
                                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg"
                                alt="Statamic"
                                width={158}
                                height={48}
                            />
                        </div>
                        <div className='flex justify-around w-full'>
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 slide-in-out"
                                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg"
                                alt="Transistor"
                                width={158}
                                height={48}
                            />
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 slide-in-out"
                                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg"
                                alt="Reform"
                                width={158}
                                height={48}
                            />
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 slide-in-out"
                                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-400.svg"
                                alt="Tuple"
                                width={158}
                                height={48}
                            />
                        </div>
                        <div className='flex justify-between w-full'>
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 slide-in-out"
                                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg"
                                alt="SavvyCal"
                                width={158}
                                height={48}
                            />
                            <Image
                                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 slide-in-out"
                                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg"
                                alt="Statamic"
                                width={158}
                                height={48}
                            />
                        </div>
                        <div className='flex justify-around w-full'>
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 slide-in-out-faster"
                                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg"
                                alt="Transistor"
                                width={158}
                                height={48}
                            />
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 slide-in-out-faster"
                                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg"
                                alt="Reform"
                                width={158}
                                height={48}
                            />
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 slide-in-out-faster"
                                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-400.svg"
                                alt="Tuple"
                                width={158}
                                height={48}
                            />
                        </div>
                        <div className='flex justify-between w-full'>
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 slide-in-out-faster"
                                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg"
                                alt="SavvyCal"
                                width={158}
                                height={48}
                            />
                            <Image
                                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 slide-in-out-faster"
                                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg"
                                alt="Statamic"
                                width={158}
                                height={48}
                            />
                        </div>
                        <div className='flex justify-around w-full'>
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 slide-in-out-faster"
                                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg"
                                alt="Transistor"
                                width={158}
                                height={48}
                            />
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 slide-in-out-faster"
                                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg"
                                alt="Reform"
                                width={158}
                                height={48}
                            />
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 slide-in-out-faster"
                                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-400.svg"
                                alt="Tuple"
                                width={158}
                                height={48}
                            />
                        </div>
                        <div className='flex justify-between w-full'>
                            <Image
                                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 slide-in-out-faster"
                                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg"
                                alt="SavvyCal"
                                width={158}
                                height={48}
                            />
                            <Image
                                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 slide-in-out-faster"
                                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg"
                                alt="Statamic"
                                width={158}
                                height={48}
                            />
                        </div>
                    </div>
                </section>
            </div>
            {/* Showcase Boxes */}
            <div className='grid md:grid-cols-3 gap-10 p-10'>
                <ShowcaseBox
                    href={''}
                    imageSrc={'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-400.svg'}
                    companyName={'Tuple'}
                />
                <ShowcaseBox
                    href={''}
                    imageSrc={'https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg'}
                    companyName={'Reform'}
                />
                <ShowcaseBox
                    href={''}
                    imageSrc={'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg'}
                    companyName={'Statamic'}
                />
                <ShowcaseBox
                    href={''}
                    imageSrc={'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg'}
                    companyName={'Savvycal'}
                />
            </div>
        </>
    )
}

export default Showcase