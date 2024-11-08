import React from 'react'

const H1 = (props) => {
  return <h1 className="md:text-6xl text-4xl font-semibold max-w-4xl md:!leading-tight mt-4">{props.children}</h1>
}

export default H1
