import React from 'react'
import H3 from '../typography/H3'
import List from './List'
import Image from 'next/image'

const FeatureCategoryCard = ({ imageUrl, heading, features }) => {
  return (
    <div className="flex flex-col w-full gap-4 bg-[#f9f6fe] p-8 rounded-3xl">
      <Image src={imageUrl} width={50} height={50} alt="location-icon" />
      <H3>{heading}</H3>
      <List
        className="flex flex-col gap-4"
        items={features.map((feature: any) => feature?.featureHeading)}
      />
    </div>
  )
}

export default FeatureCategoryCard
