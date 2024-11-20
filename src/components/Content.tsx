import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import FeatureSection from './FeatureSection'
import TestimonialSection from './TestimonialSection'
import IntegrationSection from './IntegrationSection'
import AboutUsSection from './AboutUsSection'
import { HomeSettings } from './context/homeSettings'

const Content = (props: any) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <HomeSettings homeSettings={props} >
        <HeroSection data={props.heroSectionData} />
        <FeatureSection features={props.featureSectionDetails} />
        <IntegrationSection OsDentalIntegration={props?.OsDentalIntegration} />
        <BenefitsSection data={props.BenefitSectionData} />
        <TestimonialSection testimonials={props?.testimonialData} />
        <AboutUsSection about={props?.heroSectionContent?.about} />
      </HomeSettings>
    </div>
  )
}

export default Content
