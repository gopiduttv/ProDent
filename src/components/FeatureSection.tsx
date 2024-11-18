import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'
import FeatureCategoryCard from './common/FeatureCard'

const FeatureSection = ({ features }) => {
  const featuresByCategory = [
    {
      heading: 'Multi-Location Portfolio Performance',
      imageUrl: '/multi-location.svg',
      features: [
        {
          heading: 'Doctor Wages, Payroll Taxes & Benefits',
        },
        {
          heading: 'Merchant Fees, Marketing & Supply Expenses and more',
        },
        {
          heading: 'Margin & EBITDA Analysis',
        },
      ],
    },
    {
      heading: 'Practice Performance Analysis',
      imageUrl: '/opp-analysis.svg',
      features: [
        {
          heading: 'Gross and Net Production - Hygiene and Non-Hygiene',
        },
        {
          heading: 'Aging and Claim Analyses',
        },
        {
          heading: 'Doctor & Hygienist Performance Dashboards',
        },
      ],
    },
    {
      heading: 'Opportunity Analysis',
      imageUrl: '/practice-perf.svg',
      features: [
        {
          heading: 'Recare Patient Analysis',
        },
        {
          heading: 'Overdue Claims Finder',
        },
        {
          heading: 'Patient & Insurance A/R Analysis',
        },
      ],
    },
  ]
  const requiredFeatureCount = 3
  return (
    <Section
      id="features-section"
      className="features-section pt-24 pb-16 z-10 bg-white"
    >
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col w-full items-center gap-2">
          <Subtext>Features</Subtext>
          <div className="w-full flex justify-center">
            <H2>Data for Dentistry. Done Right.</H2>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center gap-8">
          {featuresByCategory?.map((featureCategory, index) => (
            <FeatureCategoryCard
              key={index}
              featureCategory={featureCategory}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default FeatureSection
