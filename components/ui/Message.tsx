import React from 'react'

type Props = {
    title: any
    body: any
    footer: any
}

const Message = ({ title, body, footer }: Props) => {
    return (
        <div>
            <head>
                {title}
            </head>
            <section>
                {body}
            </section>
            <footer>
                {footer}
            </footer>
        </div>
    )
}

export default Message