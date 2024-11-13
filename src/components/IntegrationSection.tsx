import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import Subtext from './typography/Subtext'
import H2 from './typography/H2'
import IntegrationCloud from './IntegrationCloud'

function IntegrationSection() {

    const images = [
        "/opendental.svg",
        "/opendental.svg",
        "/opendental.svg",
        "/opendental.svg",
        "/opendental.svg",
        "/opendental.svg",
        "/opendental.svg",
        "/opendental.svg",
        "/opendental.svg",
        "/opendental.svg",
        "/opendental.svg",
        "/opendental.svg",
        "/opendental.svg",
        "/opendental.svg",
        "/opendental.svg",
        "/opendental.svg",
        "/opendental.svg",
        "/opendental.svg",
      ]
  return (
    <Section id="features-section" className="pt-16 pb-16">
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col w-full items-center gap-4">
          <Subtext>More than 125 available integrations</Subtext>
          <div className="w-full flex justify-center">
            <p
              className="text-2xl w-2/3 font-semibold text-center text-[#02024a] leading-8"
            >
              We integrate with all major practice management systems, marketing
              platforms, finance and accounting systems, and enterprise
              reporting suites.
            </p>
          </div>
          <IntegrationCloud className="grid grid-cols-8" images={images}/>
        </div>
      </Container>
    </Section>
  )
}

export default IntegrationSection
