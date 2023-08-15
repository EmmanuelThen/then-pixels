import React from 'react'
import Tooltips from '@/components/Tooltips'

type Props = {
    onClick: any
    tooltipContent: any
    icon: any
}

const DashboardButton = ({ onClick, tooltipContent, icon }: Props) => {
    return (
        <Tooltips
            button={
                <button
                    // value={value}
                    className='focus-selector p-1 flex items-center gap-2  hover:rounded-md '
                    onClick={onClick}
                >
                    {icon}
                </button>
            }
            tooltipContent={tooltipContent}
        />
    )
}

export default DashboardButton
