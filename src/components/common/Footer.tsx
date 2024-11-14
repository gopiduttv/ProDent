import Container from '../structure/Container'
import Section from '../structure/Section'

const TopSection = () => {
  return (
    <div className="self-stretch flex-col justify-start items-start gap-12 flex">
      <div className="w-full justify-start items-start gap-24 inline-flex flex-col md:flex-row">
        <div className="w-1/2 text-white text-5xl font-semibold leading-[57.60px]">
          Centralize your data. Supercharge your DSO.
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
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
    <div className="self-stretch justify-start items-start gap-12 inline-flex flex-col md:flex-row">
      <div className="w-full grow shrink basis-0 flex-col gap-3 inline-flex">
        <div className="w-full h-8 relative">
          <img src="/OSDentalLogo.svg" />
        </div>
        <div className="self-stretch text-white/70 text-base font-medium leading-relaxed inline-flex">
          One Stop Dental Analytics
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-center gap-6 ">
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
    <div className="self-stretch flex justify-start items-start gap-8 md:gap-0">
      <div className="self-stretch h-[0px] border border-white/20"></div>
      <div className="w-full self-stretch flex flex-col-reverse md:flex-row justify-between items-center gap-6">
        <div className="text-white/50">© 2023 Aeka. All Rights Reserved.</div>
        <div className="gap-8 md:gap flex flex-col md:flex-row ">
          <div className=" text-white/50 ">Terms of use</div>
          <div className=" text-white/50 ">Privacy policy</div>
          <div className=" text-white/50 ">Contact Us</div>
        </div>
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
          <BottomSection />
        </div>
      </Container>
    </Section>
  )
}

export default Footer
