import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import FeatureSection from './FeatureSection'
import TestimonialSection from './TestimonialSection'
import IntegrationSection from './IntegrationSection'
import AboutUsSection from './AboutUsSeciton'

const Content = (props: any) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <HeroSection props={props.heroSectionData}/>
      <FeatureSection features={props.featureSectionDetails} />
      <IntegrationSection OsDentalIntegration={props?.OsDentalIntegration} />
      <BenefitsSection />
      <TestimonialSection testimonials={props?.testimonialData} />
      <AboutUsSection about={props?.heroSectionContent?.about} />
    </div>
  )
}

export default Content
