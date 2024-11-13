import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import FeatureSection from './FeatureSection'
import VisionSection from './VisionSection'
import ColoredSection from './ColoredSection'
import IntegrationSection from './IntegrationSection'

const Content = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <HeroSection />
      <FeatureSection />
      <IntegrationSection />
      <BenefitsSection />
      <ColoredSection/>
      <VisionSection/>
    </div>
  )
}

export default Content
