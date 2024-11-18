import React from 'react'
import H3 from '../typography/H3'
import List from './List'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

const FeatureCard = ({ feature }) => {
  return (
    <div className="flex flex-col w-full gap-4 bg-[#f9f6fe] p-8 rounded-3xl">
      <Image
        src={feature?.imageUrl}
        width={50}
        height={50}
        alt="location-icon"
      />
      <H3>{feature?.featureSubCategoriesHeading}</H3>
      <List className="flex flex-col gap-4" items={feature}/>
    </div>
  )
}

export default FeatureCard
