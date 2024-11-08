import React from 'react'

const H2 = (props) => {
  return <h2 className={`md:text-5xl text-4xl !leading-tight font-semibold ${props.className}`}>{props.children}</h2>
}


export default H2
