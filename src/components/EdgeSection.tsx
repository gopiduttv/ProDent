import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import RichImage from './common/RichImage'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'

const EdgeSection = () => {
  return (
    <Section id="edge-section" className="py-24 bg-purple-50">
      <Container className="flex flex-col items-center gap-16 ">
        <div className="flex flex-col w-full items-center">
          <Subtext>Benefits</Subtext>

          <div className="max-w-2xl w-full flex justify-center">
            <H2 className="text-center pb-8">
              Powerful analytics. Approachable experience.
            </H2>
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <RichImage index={1} />
          <RichImage index={2} />
          <RichImage index={3} />
          <RichImage index={4} />
        </div>
      </Container>
    </Section>
  )
}

export default EdgeSection
