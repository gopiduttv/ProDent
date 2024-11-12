import React from 'react'

const H3 = (props) => {
  return <h3 className={`text-xl md:text-2xl font-semibold ${props.className}`}>{props.children}</h3>
}


export default H3
