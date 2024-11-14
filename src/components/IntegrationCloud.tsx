import React from 'react'
import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'

const IntegrationLogoCard = (props) => {
  return (
    <Image
      src={urlForImage(props.image.images).url()}
      width={100}
      height={100}
      alt="location-icon"
    />
  )
}
const IntegrationCloud = (props) => {
  if (props.columnPaddding)
    return (
      <div className={`${props.className}`}>
        <div className={`col-start-1 md`}></div>
        {props.images.splice(-props.imagesCount).map((image, index) => (
          <IntegrationLogoCard key={index} image={image} />
        ))}
        <div className={`col-end-8`}></div>
      </div>
    )

  return (
    <div className={`${props.className}`}>
      <IntegrationLogoCard image={props} />
    </div>
  )
}

export default IntegrationCloud
