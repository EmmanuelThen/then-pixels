import React from 'react'
import HeroSvg from './components/HeroSvg'
import ShinyText from '@/components/ShinyText'
import SoftwareDevelopment from './components/SoftwareDevelopment'
import Footer from '@/components/ui/Footer/Footer'

type Props = {}

const page = (props: Props) => {
    return (
        <>
            <SoftwareDevelopment />
            <Footer />
        </>
    )
}

export default page