import React from 'react'
import Image from 'next/image'
import H3 from '../typography/H3'

const Richness = () => {
  return (
    <div className="md:w-1/2 w-full flex flex-col">
    
        <H3>No AI Hallucinations</H3>
        <p className="text-lg font-normal leading-[35px] text-gray-700">
          <strong>Aeka</strong> provides insights devoid of AI-induced
          illusions. No mirages, No fuzzy interpretations, just concrete results
          that steer your strategies.
        </p>

    </div>
  )
}

export const Picture = (props) => {
  return (
    <div className="md:w-1/2 w-full flex ">
      <div className="rounded-2xl overflow-hidden bg-stone-300 w-full">
        <img className={ `object-cover w-full h-[${props.height ? props.height : 300}px]`} src="/edgedummy.png"/>
      </div>
    </div>
  )
}

const RichImage = ({ index }) => {
  if (index % 2 == 0) {
    return (
      <div className="flex md:flex-row flex-col-reverse items-center  justify-between  gap-16 w-full">
        <Richness />
        <Picture />
      </div>
    )
  }
  return (
    <div className="flex md:flex-row flex-col items-center justify-between gap-16 w-full">
      <Picture />
      <Richness />
    </div>
  )
}

export default RichImage
