import Section from './structure/Section'
import Container from './structure/Container'
import HeroSection from './HeroSection'
import EdgeSection from './EdgeSection'
import Feature from './FeatureList'
import VisionSection from './VisionSection'

const Content = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <HeroSection />
      <EdgeSection />
      <Feature />
      <VisionSection/>
    </div>
  )
}

export default Content
