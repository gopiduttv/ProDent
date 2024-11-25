import React from 'react'
import ImageLoader from './common/imageLoader/imageLoader'

function PartnersCard({ partners }) {
  return (
    <div className="flex flex-col bg-gradient-to-br rounded-2xl from-[#FBBEEB] to-[#C5A0FD] p-8 gap-6">
      <div className="flex justify-center items-center">
        <span className="w-1/2 text-center">
          Trusted by dental practices across the US.
        </span>
      </div>
      <div className="w-full flex flex-col gap-3 items-center">
          <ImageLoader
            className="w-96 h-16 rounded-lg bg-white flex justify-center items-center "
            imageClassName="!object-contain h-16 w-auto"
            image={partners[0].image}
            fixed={false}
          />
        <div className="w-96 h-16 flex flex-row justify-between gap-3">
            <ImageLoader
              className="w-1/2 h-16 rounded-lg bg-white flex justify-center items-center"
              imageClassName="!object-contain h-16 w-auto"
              image={partners[1].image}
              fixed={false}
            />
            <ImageLoader
              className="w-1/2 h-16 rounded-lg bg-white flex justify-center items-center "
              imageClassName="!object-contain h-16 w-auto"
              image={partners[2].image}
              fixed={false}
            />
        </div>
          <ImageLoader
            className="w-96 h-16 rounded-lg bg-white flex justify-center items-center "
            imageClassName="!object-contain h-16 w-auto"
            image={partners[3].image}
            fixed={false}
          />
      </div>
    </div>
  )
}

export default PartnersCard
