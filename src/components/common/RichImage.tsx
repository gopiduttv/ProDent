import React from 'react'
import Image from 'next/image'
import H3 from '../typography/H3'
import List from './List'

const Richness = (props) => {
  return (
    <div className="md:w-1/2 w-full flex flex-col gap-8">
      <H3 className="md:text-4xl">{props.item.heading}</H3>
      <List className="flex flex-col gap-4" items={props.item.points} />
    </div>
  )
}

export const Picture = (props) => {
  return (
    <div className="md:w-1/2 w-full flex ">
      <div className="rounded-2xl overflow-hidden w-full">
        <img
          className={`object-cover w-full h-[${props.height ? props.height : 400}px]`}
          src={props.image}
        />
      </div>
    </div>
  )
}

const RichImage = (props) => {
  if (props.index % 2 == 0) {
    return (
      <div className="flex flex-col md:flex-row items-center  justify-between gap-20 md:gap-40 w-full">
        <Picture image={props.item.image}/>
        <Richness item={props.item} />
      </div>
    )
  }
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-20 md:gap-40 w-full">
      <Richness item={props.item} />
      <Picture image={props.item.image}/>
    </div>
  )
}

export default RichImage
