import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'
import FeatureCategoryCard from './common/FeatureCategoryCard'
import { useHomeContext } from './context/homeSettings'
import CTAButton from './common/CTAbutton'

const FeatureSection = ({ features }) => {
  const data = useHomeContext()?.homeSettings
  const demoBtnUrl = data?.siteSettings?.demoBtnUrl ?? '/'
  return (
    <Section
      id="features-section"
      className="features-section pt-12 md:pt-24 pb-12 md:pb-16 z-10 !bg-[#F9F6FE]"
    >
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col w-full items-center gap-2">
          <Subtext>Features</Subtext>
          <div className="w-full flex justify-center">
            <H2>{data?.heroSectionData?.featureHeader}</H2>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center gap-8">
          {features?.map((featureCategory: any, index: number) => {
            return (
              <FeatureCategoryCard
                key={index}
                imageUrl={featureCategory.imageUrl}
                heading={featureCategory.categoryHeading}
                features={featureCategory.features}
              />
            )
          })}
        </div>
        <CTAButton
          url={demoBtnUrl}
          className="px-6 py-3"
          name={data.heroSectionData.ctaName ?? ''}
        />
      </Container>
    </Section>
  )
}

export default FeatureSection
