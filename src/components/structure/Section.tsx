import React from 'react'

export default function Container(props) {
  return (
    <div className={`w-full flex max-w-7xl ${props.className}`}>
      {props.children}
    </div>
  )
}
