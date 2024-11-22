import React from 'react'
import ImageLoader from './common/imageLoader/imageLoader'
import { useHomeContext } from './context/homeSettings'
import Section from './structure/Section'
import Container from './structure/Container'

export default function PartnerSection({ partnerList }) {
  const data = useHomeContext()?.homeSettings
  return (
    <Section
      id="partners-section"
      className="py-8 bg-gradient-to-r from-[#8639f8]/50 to-[#f768d1]/50 flex-col justify-start items-center gap-6 "
    >
      <Container className="flex flex-col items-center gap-16">
        <div className="w-full flex flex-col xl:flex-row justify-center items-center gap-6 ">
          {partnerList?.map((partner, index) => {
            return (
              <div key={index} >
                <ImageLoader
                  className="flex justify-center h-20 w-72 bg-white rounded-lg "
                  imageClassName="!object-contain h-20 w-auto"
                  image={partner.image}
                  fixed={false}
                />
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
