import React from 'react'
import TestimonialCarousel from './common/TestimonialCarousel'
import Section from './structure/Section'
import Container from './structure/Container'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'

const TestimonialSection = () => {
  return (
    <Section id="testimonials-section" className="py-24">
      <Container className="flex flex-col items-center gap-16 ">
        <div className="flex flex-col w-full items-center">
          <Subtext>Testimonials</Subtext>

          <div className="max-w-2xl w-full flex justify-center">
            <H2 className="text-center md:whitespace-nowrap">Our Customers Love Us!</H2>
          </div>
        </div>
        <TestimonialCarousel />
      </Container>
    </Section>
  )
}

export default TestimonialSection
