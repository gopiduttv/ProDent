import React from 'react'
import H3 from '../typography/H3'
import Image from 'next/image'
import List from './List'

const FeatureCategoryCard = ({ featureCategory }) => {
  return (
    <div className="flex flex-col w-full gap-4 bg-[#f9f6fe] p-8 rounded-3xl">
      <Image
        src={featureCategory?.imageUrl}
        width={50}
        height={50}
        alt="location-icon"
      />
      <H3>{featureCategory?.heading}</H3>
      <List className="flex flex-col gap-4" items={featureCategory.features.map(feature => feature.heading)}/>
    </div>
  )
}

export default FeatureCategoryCard
