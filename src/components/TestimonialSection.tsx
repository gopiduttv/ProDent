import React from 'react'
import TestimonialCarousel from './common/TestimonialCarousel'
import Section from './structure/Section'
import Container from './structure/Container'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'
import { useHomeContext } from './context/homeSettings'
import CTAButton from './common/CTAbutton'

const TestimonialSection = ({ testimonials }) => {
  const data = useHomeContext()?.homeSettings
  const demoBtnUrl = data?.siteSettings?.demoBtnUrl ?? '/'
  return (
    <Section id="testimonials-section" className="py-12 md:py-24">
      <Container className="flex flex-col items-center gap-16 ">
        <div className="flex flex-col w-full items-center">
          <Subtext>Testimonials</Subtext>
          <div className="max-w-2xl w-full flex justify-center">
            <H2>{data?.heroSectionData?.testimonialHeader}</H2>
          </div>
        </div>
        <TestimonialCarousel testimonials={testimonials} />
        <CTAButton
          url={demoBtnUrl}
          className="px-6 py-3"
          name={data.heroSectionData?.ctaName ?? ''}
        />
      </Container>
    </Section>
  )
}

export default TestimonialSection
