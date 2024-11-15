import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'
import FeatureCard from './common/FeatureCard'

const FeatureSection = ({features}) => {
   console.log({features})



  const features1 = [
    {
      heading: 'dfgsdfg',
      points: ['sadfadsf', 'asdfasdf', 'asdfasdfasdf'],
    },
    {
      heading: 'Multi-Location Portfolio Performance',
      points: ['Doctor Wages, Payroll Taxes & Benefits', 'Merchant Fees, Marketing & Supply Expenses and more', 'Margin & EBITDA Analysis'],
    },
    {
      heading: 'Practice Performance Analysis',
      points: ['Gross and Net Production - Hygiene and Non-Hygiene', 'Aging and Claim Analyses', 'Doctor & Hygienist Performance Dashboards'],
    },
    {
      heading: 'Opportunity Analysis',
      points: ['sadfadsf', 'asdfasdf', 'asdfasdfasdf'],
    },
  ]

  return (
    <Section id="features-section" className="pt-24 pb-16">
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col w-full items-center gap-2">
          <Subtext>Features</Subtext>
          <div className="w-full flex justify-center">
            <H2>Data for Dentistry. Done Right.</H2>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center gap-8">
          {/* {features1.slice(-3).map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))} */}

          {
            features?.map((ele:any,i:number)=>{
              return(<FeatureCard key={i} feature={ele} />)
            })
          }
        </div>
      </Container>
    </Section>
  )
}

export default FeatureSection
