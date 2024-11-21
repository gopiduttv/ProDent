import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import RichImage from './common/RichImage'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'
import { useHomeContext } from './context/homeSettings'
import CTAButton from './common/CTAbutton'

const BenefitsSection = ({ data }) => {
  const benefitHeader = useHomeContext()?.homeSettings 
  return (
    <Section id="benefits-section" className="py-24 bg-purple-50">
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col w-full items-center gap-2">
          <Subtext>Benefits</Subtext>
          <div className="max-w-2xl w-full flex justify-center">
            <H2>{benefitHeader?.heroSectionData?.benefitHeader}</H2>
          </div>
        </div>
        <div className="flex flex-col gap-16 w-full">
          {data.map((benefit: any, index: number) => (
            <RichImage key={index} index={index} item={benefit} />
          ))}
        </div>
        <CTAButton className="px-6 py-3" name={benefitHeader?.heroSectionData?.ctaName ?? ""} />
      </Container>
    </Section>
  )
}

export default BenefitsSection
