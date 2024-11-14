import React from 'react'
import H3 from '../typography/H3'
import List from './List'
import Image from 'next/image'

const FeatureCard = (props) => {
  return (
    <div className="flex flex-col w-full gap-4 bg-[#f9f6fe] p-8 rounded-3xl">
       <Image src="/location.svg" width={50} height={50} alt="location-icon" />
       <H3>{props.feature.heading}</H3>
       <List className="flex flex-col gap-4" items={props.feature.points}/>
    </div>
  )
}

export default FeatureCard
