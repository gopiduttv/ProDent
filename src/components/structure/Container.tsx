import React from 'react'

export default function Container(props) {
  return (
    <div className={`container mx-auto px-20 ${props.className}`}>
      {props.children}
    </div>
  )
}
