import React from 'react'
import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import ImageLoader from './common/imageLoader/imageLoader'

const IntegrationLogoCard = (props) => {
  return (
    <div className="h-20 flex items-center justify-center">
      <ImageLoader
        image={props.image.images}

        alt="location-icon"
      />
    </div>
  )
}
const IntegrationCloud = (props) => {
  if (props.columnPaddding)
    return (
      <div className={`${props.className}`}>
        {props.images.splice(-props.imagesCount).map((image, index) => (
          <IntegrationLogoCard key={index} image={image} />
        ))}
      </div>
    )

  return (
    <div className={`${props.className}`}>
      <IntegrationLogoCard image={props} />
    </div>
  )
}

export default IntegrationCloud
