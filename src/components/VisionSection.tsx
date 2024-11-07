import React from 'react'
import TestimonialCarousel from './common/TestimonialCarousel'
import Section from './structure/Section'
import Container from './structure/Container'

const VisionSection = () => {
  return (
    <Section>
      <Container>
        <div className="flex justify-center">
          <div className="w-full pt-10 ">
            <h2 className="text-2xl text-center font-semibold">
              Don’t just take our word for it, see what our users are saying...
            </h2>
          </div>
        </div>
        <TestimonialCarousel />
      </Container>
    </Section>
  )
}

export default VisionSection
