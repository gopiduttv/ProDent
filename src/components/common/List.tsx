import React from 'react'

const List = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index} className={props.className}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default List
