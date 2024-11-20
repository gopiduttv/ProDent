import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import FeatureSection from './FeatureSection'
import TestimonialSection from './TestimonialSection'
import IntegrationSection from './IntegrationSection'
import AboutUsSection from './AboutUsSection'
import { HomeSettings } from './context/homeSettings'
import PartnerSection from './PartnerSection'

const Content = (props: any) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <HomeSettings homeSettings={props}>
        <HeroSection data={props.heroSectionData} />
        <FeatureSection features={props.featureSectionDetails} />
        <IntegrationSection OsDentalIntegration={props?.OsDentalIntegration} />
        <BenefitsSection data={props.BenefitSectionData} />
        <TestimonialSection testimonials={props?.testimonialData} />
        <PartnerSection partnerList ={props.partnerList}/>
        <AboutUsSection
          about={props?.heroSectionContent?.about}
          founderDetails={props?.founderDetails}
        />
      </HomeSettings>
    </div>
  )
}

export default Content
