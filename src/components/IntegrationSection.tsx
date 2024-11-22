import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import Subtext from './typography/Subtext'
import IntegrationCloud from './IntegrationCloud'
import { useHomeContext } from './context/homeSettings'
import CTAButton from './common/CTAbutton'
import IntegrationLogoCard from './IntegrationCloud'

function IntegrationSection({ OsDentalIntegration }) {
  const data = useHomeContext()?.homeSettings 
   const demoBtnUrl = data?.siteSettings?.demoBtnUrl ?? '/'
  return (
    <Section id="integrations-section" className="pt-16 pb-16">
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col w-full items-center gap-4">
          <Subtext>More than 125 available integrations</Subtext>
          <div className="w-full flex justify-center">
            <p className="text-lg md:text-2xl md:w-2/3 font-semibold text-center text-[#02024a] leading-8">
              {data?.heroSectionData?.integrationHeader}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {OsDentalIntegration?.map((integration: any, index: number) => {
              return (
                <IntegrationLogoCard key={index} image={integration.image} />
              )
            })}
          </div>
        </div>
        <CTAButton url={demoBtnUrl} className="px-6 py-3" name={data.heroSectionData.ctaName ?? ""} />
      </Container>
    </Section>
  )
}

export default IntegrationSection
