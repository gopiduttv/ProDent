import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import RichImage from './common/RichImage'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'
import { useHomeContext } from './context/homeSettings'
import CTAButton from './common/CTAbutton'

const ServicesSection = ({ data }) => {
  const benefitHeader = useHomeContext()?.homeSettings 
  const demoBtnUrl = benefitHeader?.siteSettings?.demoBtnUrl ?? '/'
  return (
    <Section id="services-section" className="py-12 md:py-24 bg-[#F9F6FE] z-10">
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col w-full items-center gap-2">
          <Subtext>Our Services</Subtext>
          <div className="max-w-2xl w-full flex justify-center">
            <H2>{benefitHeader?.heroSectionData?.benefitPoints}</H2>
          </div>
        </div>
        <div className="flex flex-col gap-28 w-full">
          {data?.map((benefit: any, index: number) => (
            <RichImage key={index} index={index} item={benefit} />
          ))}
        </div>
        <CTAButton className="px-6 py-3" name={benefitHeader?.heroSectionData?.ctaName ?? ""} url={demoBtnUrl} />
      </Container>
    </Section>
  )
}

export default ServicesSection
