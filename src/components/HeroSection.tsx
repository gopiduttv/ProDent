import HeroImage from './common/HeroImage'
import JoinwaitList from './common/JoinwaitList'
import Container from './structure/Container'
import Section from './structure/Section'
import H1 from './typography/H1'
import Paragraph from './typography/Paragraph'

const HeroSection = () => {
  return (
    <Section id="about-section" className="bg-[#02024a] py-24">
      <Container>
        <div className="flex md:flex-row flex-col-reverse items-center w-full gap-12 ">
          {/* Image section for large screens */}

          {/* Text content section */}
          <div className="md:w-2/3 w-full flex flex-col">
         
              {/* Title and Subtitle */}
              <span className="flex w-full items-center gap-2 text-xl  bg-gradient-to-r from-[#8639F8] to-[#F768D1] text-transparent bg-clip-text">
                Your AI-powered research partner
              </span>
              <H1>
                <span className="text-white">Disrupting</span>{' '}
                <span className="text-[#f768d1]">dentistry</span> <br />{' '}
                <span className="text-white">through</span>{' '}
                <span className="text-[#f768d1]">data.</span>
              </H1>

              {/* Description */}
              <Paragraph className="text-white/80 text-lg mb-5 font-medium md:max-w-3xl mt-4">
                OS Dental is a custom analytics solution that’s fundamentally
                built differently, seamlessly connecting and validating all
                sources of DSO data to yield powerful, reliable insights.
              </Paragraph>

              {/* Buttons */}
              <div
                className="sm:flex items-center gap-3"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <JoinwaitList/>
              </div>
            </div>
       
          <div className="md:w-1/3 w-full flex">
            <HeroImage />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default HeroSection
