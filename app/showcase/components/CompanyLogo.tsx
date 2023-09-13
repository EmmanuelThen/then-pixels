import React from 'react'

type Props = {
    svg: any
}

const CompanyLogo = ({ svg, }: Props) => {
  return (
    <div className='w-[158px] h-[48px]'>
        {svg}
    </div>
  )
}

export default CompanyLogo