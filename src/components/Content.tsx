import HeroSection from './HeroSection'
import EdgeSection from './EdgeSection'
import Feature from './FeatureList'
import VisionSection from './VisionSection'
import ColoredSection from './ColoredSection'

const Content = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <HeroSection />
      <EdgeSection />
      <Feature />
      <ColoredSection/>
      <VisionSection/>
    </div>
  )
}

export default Content
