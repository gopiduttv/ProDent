import React from 'react'

export default function Section(props) {
    return (
        <section className={`w-full flex justify-center px-8 ${props.className}`}>
            {
                props.children
            }
        </section>
    )
}
