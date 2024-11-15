import Container from '../structure/Container'
import Section from '../structure/Section'

const TopSection = () => {
  return (
    <div className="self-stretch flex-col justify-start items-start gap-14 flex">
      <div className="w-full justify-start items-start gap-24 inline-flex flex-col md:flex-row">
        <div className="md:w-1/2 text-white text-5xl font-semibold">
          Centralize your data. Supercharge your DSO.
        </div>
        <div className="md:w-1/2  flex-col justify-start items-start gap-4 md:gap-2 inline-flex">
          <div className="self-stretch  flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch text-white/80 text-lg font-medium leading-[29.25px]">
              Without cross-platform compatibility, what good is your data? Our
              integrations are numerous, validated, and ready right now. Not
              five months from now.
            </div>
          </div>
          <div className="px-4 py-2.5 bg-[#8639f8] rounded-md justify-center items-center gap-2.5 inline-flex">
            <a
              href="/cta"
              className="text-white text-sm font-semibold leading-snug"
            >
              Book Free Demo
            </a>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[0px] border border-white/20"></div>
    </div>
  )
}

const MiddleSection = () => {
  return (
    <div className="w-full flex flex-col items-center md:items-start gap-12  md:flex-row md:justify-between">
      <div className="flex flex-col">
        <div className="w-full h-8 flex justify-center md:justify-start">
          <img src="/OSDentalLogo.svg" />
        </div>
        <div className="self-stretch text-white/70 text-base font-medium flex justify-center">
          One Stop Dental Analytics
        </div>
      </div>
      <div className="flex flex-col justify-end gap-6 ">
        <div className="text-white/80 text-sm font-light flex justify-center md:justify-start ">
          300 Delaware Avenue <br /> Wilmington, Delaware 19801
        </div>
        <div className="flex justify-center md:justify-start items-start gap-6 ">
          <div className="w-5 h-5 relative">
            <img src="/linkedin.svg" />
          </div>
          <div className="w-5 h-5 relative">
            <img src="/facebook.svg" />
          </div>
          <div className="w-5 h-5 relative">
            <img src="/instagram.svg" />
          </div>
          <div className="w-5 h-5 relative">
            <img src="/youtube.svg" />
          </div>
          <div className="w-5 h-5 relative">
            <img src="/vimeo.svg" />
          </div>
        </div>
      </div>
    </div>
  )
}

const BottomSection = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-center md:justify-between gap-6">
      <div className="text-white/50 text-center">
        © 2023 Aeka. All Rights Reserved.
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap text-center">
        <div className=" text-white/50 ">Terms of use</div>
        <div className=" text-white/50 ">Privacy policy</div>
        <div className=" text-white/50 ">Contact Us</div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <Section id="footer" className={'bg-[#02024a]'}>
      <Container className="flex justify-center py-4 text-white ">
        <div className=" pt-24 pb-8 bg-[#02024a] flex-col justify-center items-start gap-12 inline-flex ">
          <TopSection />
          <MiddleSection />
          <div className="self-stretch h-[0px] border border-white/20"></div>
          <BottomSection />
        </div>
      </Container>
    </Section>
  )
}

export default Footer
