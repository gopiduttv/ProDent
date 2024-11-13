import React from 'react'
import Image from 'next/image'

const IntegrationLogoCard = (props) => {
  return (
    <div
      className={`h-20 ${props.className}`}
      id={`integration-logo-card-${props.index}`}
    >
      <Image src={props.image} width={200} height={200} alt="location-icon" />
    </div>
  )
}
const IntegrationCloud = (props) => {
  if (props.columnPaddding)
    return (
      <div className={`${props.className}`}>
        <div className={`col-start-1`}></div>
        {props.images.splice(-props.imagesCount).map((image, index) => (
          <IntegrationLogoCard key={index} image={image} />
        ))}
        <div className={`col-end-8`}></div>
      </div>
    )

  return (
    <div className={`${props.className}`}>
      {props.images.splice(-props.imagesCount).map((image, index) => (
        <IntegrationLogoCard key={index} image={image} />
      ))}
    </div>
  )
}

export default IntegrationCloud
