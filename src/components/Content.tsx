import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import FeatureSection from './FeatureSection'
import VisionSection from './VisionSection'
import ColoredSection from './ColoredSection'

const Content = (props: any) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <HeroSection />
      <FeatureSection />
      <div className="bg-yellow-400 text-black">INTEGRATIONS</div>
      <BenefitsSection />
      <ColoredSection />
      <VisionSection />
    </div>
  )
}

export default Content
