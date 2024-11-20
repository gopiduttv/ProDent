import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import Subtext from './typography/Subtext'
import IntegrationCloud from './IntegrationCloud'
import { iIntegrationImage } from './common/interface/commonInterface'
import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'

function IntegrationSection({ OsDentalIntegration }) {
  return (
    <Section id="integrations-section" className="pt-16 pb-16">
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col w-full items-center gap-4">
          <Subtext>More than 125 available integrations</Subtext>
          <div className="w-full flex justify-center">
            <p className="text-lg md:text-2xl md:w-2/3 font-semibold text-center text-[#02024a] leading-8">
              We integrate with all major practice management systems, marketing
              platforms, finance and accounting systems, and enterprise
              reporting suites.
            </p>
          </div>
          <div className='flex flex-wrap items-center justify-center'>
            {OsDentalIntegration?.map((e: any, i: number) => {
              return (
                <IntegrationCloud
                  className="p-3"
                  images={e.image}
                  imagesCount={16}
                  key={i}
                />
              )
            })}
          </div>

          {/* <IntegrationCloud className="grid grid-cols-8 gap-2" images={images} imagesCount={16} />
          <IntegrationCloud className="grid grid-cols-8 gap-4" images={images} imagesCount={6} columnPaddding />           */}
        </div>
      </Container>
    </Section>
  )
}

export default IntegrationSection
