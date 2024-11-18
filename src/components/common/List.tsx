import Image from 'next/image'
import React from 'react'

const List = (props) => {
  return (
    <ul className={props.className}>
      {props?.items?.features
        ?.map((e: any) => e?.featureHeading)
        .map((ele: any, i: number) => {
          return (
            <li key={i}>
              <span className="flex flex-row items-start gap-3">
                <Image
                  src="/point.svg"
                  width={20}
                  height={20}
                  alt="featureLogo"
                />

                {ele}
              </span>
            </li>
          )
        })}
    </ul>
  )
}

export default List
