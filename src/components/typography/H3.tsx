import React from 'react'

const H3 = (props) => {
  return <h3 className={`md:text-xl text-xl font-semibold ${props.className}`}>{props.children}</h3>
}


export default H3
