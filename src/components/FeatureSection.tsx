import React from 'react'
import RichIcon from './common/RichIcon'
import Section from './structure/Section'
import Container from './structure/Container'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'

const FeatureSection = () => {
  return (
    <Section id="features-section" className="py-24">
      <Container className="flex flex-col items-center gap-16 ">
        <div className="flex flex-col w-full items-center">
          <Subtext>Benefits</Subtext>

          <div className="max-w-2xl w-full flex justify-center">
            <H2 className="text-center">
              Powerful analytics. Approachable experience.
            </H2>
          </div>
        </div>
        <div className="w-full">
          <div className="md:p-16 p-4 bg-purple-50 rounded-2xl w-full">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <RichIcon
                title="Company Product Overview"
                summary="Comprehensive understanding of company's offerings."
              />
              <RichIcon
                title="Market Sizing - SAM/SOM/TAM"
                summary="Accurate assessment of market potential."
              />
              <RichIcon
                title="Deep Dive into Competitor Landscape"
                summary="Comprehensive analysis of competitors' strategies."
              />
              <RichIcon
                title="Tailored Recommendations for Growth"
                summary="Strategy suggestions to unlock revenue and margin potential."
              />
              <RichIcon
                title="Clear Visual Reports"
                summary="Visualize complex data for easy comprehension."
              />
              <RichIcon
                title="Effective Customer Segmentation"
                summary="Number of actual/addressable customer groups."
              />
              <RichIcon
                title="Risk Management and Opportunity Maximization"
                summary="Mitigate risks and seize emerging opportunities."
              />
              <RichIcon
                title="Sentiment Analysis for Strategic Moves"
                summary="Understand market sentiment for informed decisions."
              />
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default FeatureSection
