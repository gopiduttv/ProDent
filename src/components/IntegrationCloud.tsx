import React from 'react'
import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import ImageLoader from './common/imageLoader/imageLoader'

const IntegrationLogoCard = (props) => {
  return (
    <div className="w-[130px] h-[74px] flex items-center justify-center">
      <ImageLoader image={props.image} className="" />
    </div>
  )
}
const IntegrationCloud = (props) => {
  return (
    <div className={`${props.className}`}>
      <IntegrationLogoCard image={props.images} />
    </div>
  )
}

export default IntegrationCloud
