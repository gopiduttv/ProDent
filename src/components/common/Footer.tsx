import Link from 'next/link'
import Container from '../structure/Container'
import Section from '../structure/Section'
import CTAButton from './CTAbutton'
import H2 from '../typography/H2'

const TopSection = ({data,ctaName}) => {
  return (
    <div className="self-stretch flex-col justify-start items-start gap-14 flex">
      <div className="w-full gap-8 inline-flex flex-col ">
        <H2 className="text-3xl !whitespace-normal">
          Centralize your data. Supercharge your DSO.
          </H2>
        <div className="flex justify-center">
          <CTAButton url={data} className="px-6 py-3" name={ctaName} />
        </div>
      </div>
      <div className="self-stretch h-[0px] border border-white/20"></div>
    </div>
  )
}



const BottomSection = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center  gap-6">
      <div className="text-white/50 text-center">
        Copyright © 2024. ProDent Financial Partners.
      </div>
      {/* <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center">
        <Link className=" text-white/50 hover:text-white/90" href={'/legal/terms-and-conditions'}>
          Terms of use
        </Link>
        <Link className=" text-white/50 hover:text-white/90" href={'legal/privacy-policy'}>
          Privacy policy
        </Link>
        <Link className=" text-white/50 hover:text-white/90" href={'legal/business-agreement'}>
          Business Associate Agreement
        </Link>
      </div> */}
    </div>
  )
}

const Footer = ({data}) => {
  return (
    <Section id="footer" className={'bg-[#02024a]'}>
      <Container className="flex justify-center py-4 text-white ">
        <div className="w-full p-8">
          {/* <TopSection ctaName={data?.heroSectionData?.ctaName} data={data?.siteSettings?.demoBtnUrl} /> */}
          <BottomSection />
        </div>
      </Container>
    </Section>
  )
}

export default Footer
