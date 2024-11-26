import React from 'react'
import ImageLoader from './common/imageLoader/imageLoader'
import { useHomeContext } from './context/homeSettings'
import Section from './structure/Section'
import Container from './structure/Container'

export default function CustomerSection({ customers }) {
  const data = useHomeContext()?.homeSettings
  return (
    <Section
      id="partners-section"
      className="pt-16 pb-20 bg-[#EDE1FE] flex-col justify-start items-center gap-6 "
    >
      <Container className="flex flex-col items-center gap-16">
        <div className="w-full flex flex-col xl:flex-col justify-center items-center gap-10  ">
          <div className="md:w-1/2 text-center font-semibold">
            Trusted by multi-location DSOs across the US
          </div>
          <div className="flex flex-col xl:flex-row  gap-8">
            {customers?.map((customer, index) => {
              return (
                <div key={index} className="w-full flex ">
                  <ImageLoader
                    className="flex justify-center h-20 w-full bg-white rounded-lg "
                    imageClassName="!object-contain h-20 w-auto"
                    image={customer.image}
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
