import React from 'react'
import ImageLoader from './common/imageLoader/imageLoader'
import { useHomeContext } from './context/homeSettings'

export default function PartnerSection({ partnerList }) {
  const data = useHomeContext()?.homeSettings
  return (
    <div className="h-36 px-[244px] py-8 bg-gradient-to-r from-[#8639f8]/50 to-[#f768d1]/50 flex-col justify-start items-center gap-6 inlinse-flex">
      <div className="w-full justify-center items-center gap-6 inline-flex">
        {partnerList?.map((partner, index) => {
          return (
            <div key={index} className="h-20 px-[17.30px] py-[10.81px] bg-white rounded-[10px] flex-col justify-center items-center gap-[10.81px] inline-flex">
              <ImageLoader className="!w-20 !h-20"image={partner.image} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
