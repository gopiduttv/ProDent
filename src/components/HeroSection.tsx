import Container from './structure/Container'
import Section from './structure/Section'

const HeroSection = () => {
  return (
    <Section>
      <Container>
        <div className="flex items-center mt-28 p-4">
          {/* Image section for large screens */}
          <div className="hidden xl:block xl:w-1/2">IMAGE</div>

          {/* Text content section */}
          <div className="xl:w-1/2">
            <div className="my-28 xl:my-0">
              {/* Title and Subtitle */}
              <h6
                className="flex items-center gap-2 text-xl  mb-3 animate__animated animate__fadeIn"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                {/* <img
                  src="dist/images/rocket.png"
                  alt=""
                  style={{ width: '15px' }}
                /> */}
                Your AI-powered research partner
              </h6>
              <h1
                className="font-bold mb-2 text-5xl "
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                Smart insights
              </h1>
              <h2
                className="font-bold mb-8 text-5xl text-primary"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                Smarter decisions
              </h2>

              {/* Description */}
              <h6
                className="text-lg mb-5 font-normal"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                style={{ lineHeight: '35px' }}
              >
                Your partner in AI-powered desktop market research. Gain
                instant, in-depth insights into <strong>1M+</strong> companies
                and <strong>1000+</strong> industries. Delve deeper than
                traditional reports, akin to{' '}
                <strong>top-tier consulting insights.</strong>
              </h6>

              {/* Buttons */}
              <div
                className="sm:flex items-center gap-3 animate__animated animate__fadeIn"
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
                  onClick={() =>
                    window.scrollTo({
                      top: document.getElementById('footerSection').offsetTop,
                      behavior: 'smooth',
                    })
                  }
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
