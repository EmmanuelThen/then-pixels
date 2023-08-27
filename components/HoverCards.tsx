import React from 'react'
import * as HoverCard from '@radix-ui/react-hover-card';



const HoverCards = ({ cover, content }: any) => {
    return (
        <HoverCard.Root openDelay={100} closeDelay={100}>
            <HoverCard.Trigger asChild>
                <div
                    className="flex items-center justify-center cursor-pointer rounded-full shadow-lg hover:bg-slate2 h-10 w-[80px] outline-none border border-1"
                    rel="noreferrer noopener"
                >
                    {cover}
                </div>
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content
                    className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
                    sideOffset={5}
                >
                    <div className="flex flex-col gap-[7px]">
                        {content}
                    </div>
                    <HoverCard.Arrow className="fill-white" />
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    )
}

export default HoverCards;