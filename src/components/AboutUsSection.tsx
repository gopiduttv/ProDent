import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import { Picture } from './common/RichImage'
import H2 from './typography/H2'
import Paragraph from './typography/Paragraph'
import ImageLoader from './common/imageLoader/imageLoader'
import PeopleCard from './common/PeopleCard'

const AboutUsSection = ({ about, founderDetails }) => {
  const aboutUS = {
    heading: 'About Us',
    description:
      'OSDental was conceived by a team of CPAs at ProDent Partners. With our decades of experience working with dental offices, we realized that ambitious dental offices struggle to manage growth and efficiency at the same time, due to the lack of a consolidated data platform. OSDental was built to solve this gap, not just for DSOs but also for any dental practice looking to have better monitoring of their dental business as a whole.',
    image: '/about-us.png',
  }

  return (
    <Section
      id="about-us-section"
      className="py-12 md:py-24 bg-[#6220c3] bg-grid-pattern bg-contain bg-no-repeat bg-right"
    >
      <Container className="flex flex-col items-center gap-10 w-full ">
        <div>
          <div className="flex justify-center w-full">
            <H2 className="!text-left text-white">{aboutUS.heading}</H2>
          </div>
          <Paragraph className="text-center">{about}</Paragraph>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-8 xl:flex-row xl:items-stretch">
          {founderDetails?.map((founder: any, index: number) => {
            return <PeopleCard key={index} {...founder} />
          })}
        </div>
      </Container>
    </Section>
  )
}

export default AboutUsSection
