import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import RichImage from './common/RichImage'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'

const BenefitsSection = () => {
  const benefits = [
    {
      heading: 'dfgsdfg',
      points: ['sadfadsf', 'asdfasdf', 'asdfasdfasdf'],
      image: "/benefit-image.png"
    },
    {
      heading: 'Multi-Location Portfolio Performance',
      points: [
        'Doctor Wages, Payroll Taxes & Benefits',
        'Merchant Fees, Marketing & Supply Expenses and more',
        'Margin & EBITDA Analysis',
      ],
      image: "/benefit-image.png"
    },
    {
      heading: 'Practice Performance Analysis',
      points: [
        'Gross and Net Production - Hygiene and Non-Hygiene',
        'Aging and Claim Analyses',
        'Doctor & Hygienist Performance Dashboards',
      ],
      image: "/benefit-image.png"
    },
    {
      heading: 'Opportunity Analysis',
      points: ['sadfadsf', 'asdfasdf', 'asdfasdfasdf'],
      image: "/benefit-image.png"
    },
  ]

  return (
    <Section id="benefits-section" className="py-24 bg-purple-50">
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col w-full items-center gap-2">
          <Subtext>Benefits</Subtext>
          <div className="w-full flex justify-center">
            <H2>Data for Dentistry. Done Right.</H2>
          </div>
        </div>
        <div className="flex flex-col gap-16">
          {benefits.map((benefit, index) => (
            <RichImage key={index} index={index} item={benefit} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default BenefitsSection
