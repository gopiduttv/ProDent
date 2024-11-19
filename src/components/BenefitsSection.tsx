import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import RichImage from './common/RichImage'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'

const BenefitsSection = () => {
  const benefits = [
    {
      heading: 'Consolidate Accurate Data',
      points: [
        'For Unearthing opportunity areas',
        'For Identifying performance trends',
        'For Defining the culture of performance',
      ],
      image: '/con-acc-data.png',
    },
    {
      heading: 'Unlock the Full Potential of Your Practice Data',
      points: [
        'Conquer de-centralized tech stacks and eliminate data fragmentation.',
        'Macro and micro-level analysis for faster decision making.',
        'Calculate staff and provider payroll within minutes.',
      ],
      image: '/full-potential.png',
    },
    {
      heading: 'Align Your Team on Objectives',
      points: ['Democratize data access for empowering team members.', 'Set performance criteria for continuous improvement.', 'Measure and Monitor Team performance for constant feedback.'],
      image: '/align-team.png',
    },
  ]

  return (
    <Section id="benefits-section" className="py-24 bg-purple-50">
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col w-full items-center gap-2">
          <Subtext>Benefits</Subtext>
          <div className="max-w-2xl w-full flex justify-center">
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
