import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import FeatureSection from './FeatureSection'
import TestimonialSection from './TestimonialSection'
import IntegrationSection from './IntegrationSection'
import AboutUsSection from './AboutUsSection'
import { HomeSettings } from './context/homeSettings'
import PartnerSection from './PartnerSection'

const Content = (props: any) => {
  const data = props?.heroSectionData
  const integrationList = data?.integrationList?.selectedIntegrationList
  const benefits = data?.benifits?.selectedBenefits
  const testimonial = data?.testimonial?.selectedTestimonial
  const partner = data?.partner
  const feature = data?.features?.selectedFeatures



  return (
    <div className="flex flex-col overflow-hidden">
      <HomeSettings homeSettings={props}>
        <HeroSection data={props.heroSectionData} />
        <FeatureSection features={feature} />
        <IntegrationSection OsDentalIntegration={integrationList} />
        <BenefitsSection data={benefits} />
        <TestimonialSection testimonials={testimonial} />
        <PartnerSection partnerList={partner?.selectedPartner} />
        <AboutUsSection
          about={props?.heroSectionContent?.about}
          founderDetails={props?.founderDetails}
        />
      </HomeSettings>
    </div>
  )
}

export default Content
