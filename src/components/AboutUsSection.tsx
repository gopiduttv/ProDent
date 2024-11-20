import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import { Picture } from './common/RichImage'
import H2 from './typography/H2'
import Paragraph from './typography/Paragraph'
import ImageLoader from './common/imageLoader/imageLoader'
import PeopleCard from './common/PeopleCard'

const AboutUsSection = ({about,founderDetails}) => {
  const aboutUS = {
    heading: 'About Us',
    description:
      'OSDental was conceived by a team of CPAs at ProDent Partners. With our decades of experience working with dental offices, we realized that ambitious dental offices struggle to manage growth and efficiency at the same time, due to the lack of a consolidated data platform. OSDental was built to solve this gap, not just for DSOs but also for any dental practice looking to have better monitoring of their dental business as a whole.',
    image: '/about-us.png',
  }

  // const founderOne = {
  //   profile: 'imageURLPic 1',
  //   name: 'Emily Ryba',
  //   designation: 'Co-Founder',
  //   description:
  //     'Emily has been in the Dental/DSO space for 10 years. During her time in the industry, she has worked with over 50 DSO’s in public accounting. Most recently, she was Vice President of Accounting for a DSO with over $ 100 million in revenue.',
  //   socials: [{ linkedIn: '' }],
  // }

  // const founderTwo = {
  //   profile: 'imageURLPic 1',
  //   name: 'Daniel Chavarra',
  //   designation: 'Co-Founder',
  //   description:
  //     'Daniel has been in the finance industry for over 10 years with his most recent job in dental. Daniel was previously the CFO at a DSO doing business in 9 states. He is adept at using his technical and financial expertise to create customized financials for doctors, investors, banks and audits.',
  //   socials: [{ linkedIn: '' }],
  // }
  // const founders =founderDetails

  return (
    <Section
      id="about-us-section"
      className="py-24 bg-gradient-to-r from-[#8639F8] to-[#F768D1]"
    >
      <Container className="flex  flex-col items-center gap-24 w-full">
        <div className="flex justify-center w-full">
          <H2 className="!text-left text-white">{aboutUS.heading}</H2>
        </div>

        <div className="w-full flex md:flex-row md:justify-between">
          {founderDetails?.map((founder: any, index: number) => {
            return <PeopleCard {...founder}/>
          })}
          {/* <PeopleCard {...founderOne} />
          <PeopleCard {...founderTwo}/> */}
        </div>
      </Container>
    </Section>
  )
}

export default AboutUsSection
