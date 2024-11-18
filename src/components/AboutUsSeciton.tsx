import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import RichImage, { Picture } from './common/RichImage'
import H2 from './typography/H2'
import Subtext from './typography/Subtext'
import Paragraph from './typography/Paragraph'

const AboutUsSection = ({about}) => {
  const aboutUS = {
    heading: 'About Us',
    description: 'OSDental was conceived by a team of CPAs at ProDent Partners. With our decades of experience working with dental offices, we realized that ambitious dental offices struggle to manage growth and efficiency at the same time, due to the lack of a consolidated data platform. OSDental was built to solve this gap, not just for DSOs but also for any dental practice looking to have better monitoring of their dental business as a whole.',
    image: "/about-us.png"
  }

  return (
    <Section
      id="about-us-section"
      className="py-24 bg-gradient-to-r from-[#8639F8] to-[#F768D1]"
    >
      <Container className="flex md:flex-row flex-col-reverse items-center gap-16 w-full">
        <div className="flex flex-col md:w-1/2 w-full">
          <H2 className=" text-white">{aboutUS.heading}</H2>
          <Paragraph>{about}</Paragraph>
        </div>

        <Picture image={aboutUS.image} height={450}></Picture>
      </Container>
    </Section>
  )
}

export default AboutUsSection
