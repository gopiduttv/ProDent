import Container from '../structure/Container'
import Section from '../structure/Section'

const Footer = () => {
  return (
    <Section id="join-waitlist" className={'bg-stone-300'}>
      <Container>
        <div className="bg-slate-600">BANNER</div>
        <div className="flex flex-wrap mb-10 bg">
          {/* Company Info */}
          <div className="lg:w-1/2 flex flex-col justify-between items-start">
            <div>
              <div className="flex items-center mb-3">
                IMAGE
                <h6 className="font-semibold text-4xl ml-2">os dental</h6>
              </div>
              <p className="text-md font-normal">
                300 Delaware Avenue
                <br />
                Wilmington, Delaware 19801
              </p>
            </div>
            <div>
              <p className="text-lg">
                <a
                  href="https://www.linkedin.com/company/aeka-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary mr-3"
                >
                  <i className="fi fi-brands-linkedin"></i>
                </a>
                <a href="mailto:contact@aeka.tech" className="text-primary">
                  <i className="fi fi-sr-envelope"></i>
                </a>
              </p>
            </div>
          </div>

          {/* Join Waitlist Form */}
          <div className="lg:w-1/2 flex justify-center">FORM</div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-center mb-6">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center">
              <h6 className="font-normal text-lg mb-0">
                © 2023 os dental. All Rights Reserved.
              </h6>
            </div>
            <div className="flex space-x-3 text-lg">
              <a href="#" className="hover:underline">
                Terms
              </a>
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <a href="#" className="hover:underline">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Footer
