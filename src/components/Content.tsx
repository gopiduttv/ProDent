import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import TestimonialSection from './TestimonialSection'
import AboutUsSection from './AboutUsSection'
import { HomeSettings } from './context/homeSettings'
import CustomerSection from "./CustomerSection"
import BookDemo from './common/BookDemo'

const Content = (props: any) => {
  const data = props?.heroSectionData
  const integrationList = data?.integrationList?.selectedIntegrationList
  const benefits = data?.benifits?.selectedBenefits
  const testimonial = data?.testimonial?.selectedTestimonial
  const customers = data?.partner?.selectedPartner
  const feature = data?.features?.selectedFeatures
  const ctaBtnUrl = props?.siteSettings?.demoBtnUrl

  return (
    <div className="flex flex-col overflow-hidden">
      <HomeSettings homeSettings={props}>
        <HeroSection ctaBtnUrl={ctaBtnUrl} data={props.heroSectionData} />
        <ServicesSection data={benefits} />
        <TestimonialSection testimonials={testimonial} />
        <CustomerSection customers={customers} />
        <AboutUsSection
          about={props?.heroSectionContent?.about}
          founderDetails={props?.founderDetails}
        />
        <BookDemo />
      </HomeSettings>
    </div>
  )
}

export default Content
