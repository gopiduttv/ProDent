import React from 'react'
import H3 from '../typography/H3'
import List from './List'
import ImageLoader from './imageLoader/imageLoader'

const Richness = ({ item }: any) => {
  return (
    <div className="md:w-1/2 w-full flex flex-col gap-8">
      <H3 className="md:text-4xl">{item.serviceHeading}</H3>
      <List className="flex flex-col gap-4" items={item?.servicePoint} />
    </div>
  )
}

export const Picture = (props) => {
  return (
    <div className="md:w-1/2 w-full flex ">
      <div className="rounded-2xl overflow-hidden w-full">
        <ImageLoader
          image={props?.item?.benifitSectionImage}
          className={`object-cover w-full h-[${props.height ? props.height : 400}px]`}
        />
      </div>
    </div>
  )
}

const RichImage = (props: any) => {
  if (props.index % 2 == 0) {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-40 w-full">
        <ImageLoader
          image={props?.item?.benifitSectionImage}
          className="md:!h-[370px] md:!w-1/2  rounded-[20px] flex items-center justify-center overflow-hidden"
          fixed={false}
          radius={10}
        />
        <Richness className="w-1/2" item={props?.item} />
      </div>
    )
  }
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-40 w-full">
      <Richness className="w-1/2" item={props?.item} />
      <ImageLoader
        className="md:!h-[370px] md:!w-1/2 rounded-[20px] flex items-center justify-center overflow-hidden"
        image={props?.item?.benifitSectionImage}
        fixed={false}
        radius={15}
      />
    </div>
  )
}

export default RichImage
