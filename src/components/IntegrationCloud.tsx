import React from 'react'
import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'

const IntegrationLogoCard = (props) => {
  return (
    <div className="h-20 flex items-center justify-center">
      <Image
        src={urlForImage(props.image.images).url()}
        width={100}
        height={100}
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
