import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import RichImage from './common/RichImage'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'

const BenefitsSection = ({ data }) => {
  return (
    <Section id="benefits-section" className="py-24 bg-purple-50">
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col w-full items-center gap-2">
          <Subtext>Benefits</Subtext>
          <div className="max-w-2xl w-full flex justify-center">
            <H2>Do More With Your Data</H2>
          </div>
        </div>
        <div className="flex flex-col gap-16 w-full">
          {data.map((benefit: any, index: number) => (
            <RichImage key={index} index={index} item={benefit} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default BenefitsSection
