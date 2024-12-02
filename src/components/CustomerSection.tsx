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
      className="py-16  flex-col justify-start items-center gap-6 "
    >
      <Container className="flex flex-col  items-center gap-10">
        <div className="md:w-1/2 text-center font-semibold">
          Trusted by multi-location DSOs across the US
        </div>
        <div className="flex flex-wrap justify-center max-w-7xl gap-8">
          {customers?.map((customer, index) => {
            return (
              <div key={index} className="">
                <ImageLoader
                  image={customer.image}
                  fixed={false}
                  imageClassName="!h-16 w-auto"
                />
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
