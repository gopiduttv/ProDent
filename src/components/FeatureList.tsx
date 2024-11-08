import React from 'react'
import RichIcon from '../components/common/RichIcon'
import Section from './structure/Section'
import Container from './structure/Container'

const Feature = () => {
  return (
    <Section id="features-section" className={'bg-red-800'}>
      <Container>
        <div className="flex flex-col justify-center relative bg-yellow-400">
          <div className="items-center  w-full p-5">
            <h2 className="text-center text-3xl font-semibold ">
              More than just a tool...
            </h2>
          </div>
          <div className="w-full bg-yellow-00">
            <div className="m-5 p-4 bg-yellow-700 rounded-lg">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>
      </Container>
    </Section>
  )
}

export default Feature
