import Image from 'next/image'
import React from 'react'

const List = (props) => {
  return (
    <ul className={props.className}>
      {props?.items?.map((item, index) => (
        <li key={index}>
          <span className="flex flex-row items-start gap-3 font-light text-lg">
            <Image src="/point.svg" width={20} height={20} alt="points" />
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default List
