import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import RichImage, { Picture } from './common/RichImage'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'
import Paragraph from './typography/Paragraph'

const ColoredSection = () => {
  return (
    <Section
      id="edge-section"
      className="py-24 bg-gradient-to-br from-purple-500 to-violet-800 "
    >
      <Container className="flex md:flex-row flex-col-reverse items-center gap-16 w-full">
        <div className="flex flex-col md:w-1/2 w-full">
          <Subtext className="text-white">Benefits</Subtext>
          <H2 className=" text-white">
            Clean up. Drill down. Do more with your data.
          </H2>
          <Paragraph>
            OS Dental is a custom analytics solution that's fundamentally built
            differently, seamlessly connecting and validating all sources of DSO
            data to yield powerful, reliable insights.
          </Paragraph>
        </div>

        <Picture height={450}></Picture>
      </Container>
    </Section>
  )
}

export default ColoredSection
