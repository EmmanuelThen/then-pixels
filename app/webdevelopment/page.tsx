import React from 'react'
import WebDevelopment from './components/WebDevelopment'
import Footer from '@/components/ui/Footer/Footer'

type Props = {}

const page = (props: Props) => {
    return (
        <>
            <WebDevelopment />
            <Footer />
        </>
    )
}

export default page