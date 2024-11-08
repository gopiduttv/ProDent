import FlickerBackground from './common/FlickerBackground'
import Container from './structure/Container'
import Section from './structure/Section'
import H1 from './typography/H1'

const HeroSection = () => {
  return (
    <Section id="about-section">
      <Container>
        <div className="flex items-center mt-28 p-4">
          {/* Image section for large screens */}
          <div className="hidden xl:block xl:w-1/2"></div>

          {/* Text content section */}
          <div className="xl:w-1/2">
            <div className="my-28 xl:my-0">
              {/* Title and Subtitle */}
              <span
                className="flex items-center gap-2 text-xl mb-3"
            
              >
                <img
                  src="dist/images/rocket.png"
                  alt=""
                  style={{ width: '15px' }}
                />
                Your AI-powered research partner
              </span>
              <H1>
                Smart insights <br /> Smarter decisions
              </H1>

              {/* Description */}
              <p
                className="text-lg mb-5 font-normal md:max-w-3xl mt-4"

              >
                Your partner in AI-powered desktop market research. Gain
                instant, in-depth insights into <strong>1M+</strong> companies
                and <strong>1000+</strong> industries. Delve deeper than
                traditional reports, akin to{' '}
                <strong>top-tier consulting insights.</strong>
              </p>

              {/* Buttons */}
              <div
                className="sm:flex items-center gap-3"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <a
                  className="btn btn-primary px-5 py-3 bg-blue-500 text-white rounded-md mb-3 sm:mb-0 text-lg hover:shadow-md"
                  href="../main/authentication-login.html"
                >
                  Login
                </a>
                <a
                  className="btn btn-outline-primary px-5 py-3 border-2 border-blue-500 text-blue-500 rounded-md mb-3 sm:mb-0  text-lg hover:shadow-md"
                  href="#join-waitlist"
                >
                  Join waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default HeroSection
