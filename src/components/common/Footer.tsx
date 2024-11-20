import Facebook from '../icons/Facebook'
import Instagram from '../icons/Instagram'
import LinkedIn from '../icons/LinkedIn'
import Vimeo from '../icons/Vimeo'
import Youtube from '../icons/Youtube'
import Container from '../structure/Container'
import Section from '../structure/Section'
import CTAButton from './CTAbutton'

const TopSection = () => {
  return (
    <div className="self-stretch flex-col justify-start items-start gap-14 flex">
      <div className="w-full gap-24 inline-flex flex-col md:flex-row">
        <div className="md:w-1/2 text-white text-5xl font-semibold">
          Centralize your data. Supercharge your DSO.
        </div>

        <CTAButton className="md:w-1/2 px-6 py-3 text-4xl" name={'Book Free Demo'} />
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
          <LinkedIn />
          <Facebook />
          <Instagram />
          <Youtube />
          <Vimeo />
        </div>
      </div>
    </div>
  )
}

const BottomSection = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-center md:justify-between gap-6">
      <div className="text-white/50 text-center">
      © 2024 OS Dental inc. All rights reserved.
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
          {/* <MiddleSection />
          <div className="self-stretch h-[0px] border border-white/20"></div> */}
          <BottomSection />
        </div>
      </Container>
    </Section>
  )
}

export default Footer
