import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import FeatureSection from './FeatureSection'
import TestimonialSection from './TestimonialSection'
import IntegrationSection from './IntegrationSection'
import AboutUsSection from './AboutUsSeciton'

const Content = (props: any) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <HeroSection />
      <FeatureSection />
      <IntegrationSection />
      <BenefitsSection />
      <TestimonialSection />
      <AboutUsSection />
    </div>
  )
}

export default Content