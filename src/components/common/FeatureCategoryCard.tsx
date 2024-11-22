import React from 'react'
import H3 from '../typography/H3'
import List from './List'
import ImageLoader from './imageLoader/imageLoader'

const FeatureCategoryCard = ({ imageUrl, heading, features }) => {
  return (
    <div className="flex flex-col w-full gap-4 bg-[#f9f6fe] p-8 rounded-3xl">
      <ImageLoader image={imageUrl} className="!w-12 !h-12" />
      <H3>{heading}</H3>
      <List
        className="flex flex-col gap-4"
        items={features?.map((feature: any) => feature?.featureHeading)}
      />
    </div>
  )
}

export default FeatureCategoryCard
