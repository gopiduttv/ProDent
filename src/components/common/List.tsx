import Image from 'next/image'
import React from 'react'
import Paragraph from '../typography/Paragraph'

const List = (props) => {
  return (
    <ul className={props.className}>
      {props?.items?.map((item, index) => (
        <li key={index}>
          <div className="flex flex-row items-start gap-3 font-light text-[16px] md:text-md">
            <Image className="w-5 h-5 mt-[1px]" src="/point.svg" width={20} height={20} alt="points" />
            <Paragraph className="text-black">{item}</Paragraph>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default List
