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
      className="py-16 bg-[#EDE1FE] flex-col justify-start items-center gap-6 "
    >
      <Container className="flex flex-col items-center gap-16">
        <div className="w-full flex flex-col xl:flex-col justify-center items-center gap-10  ">
          {/* <div className="md:w-1/2 text-center font-semibold">
            Trusted by dental practices across the US.
          </div> */}
          <div className="flex flex-wrap justify-center max-w-5xl gap-8">
            {partnerList?.map((partner, index) => {
              return (
                <div key={index} className="w-72">
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
        </div>
      </Container>
    </Section>
  )
}
