import Image from 'next/image'
import React from 'react'

const List = (props) => { debugger
  return (
    <ul className={props.className}>
      {/* {props?.items?.map((item, index) => (
        <li key={index}>
          <span className="flex flex-row items-start gap-3">
            <Image src="/point.svg" width={20} height={20} alt="->" />
            {item}
          </span>
        </li>
      ))} */}
      {
        <li >
           <span className="flex flex-row items-start gap-3">
            <Image src="/point.svg" width={20} height={20} alt="->" />
            {props?.items?.features?.map(e=>e?.featureHeading)}
          </span>
        </li>
      }
    </ul>
  )
}

export default List
