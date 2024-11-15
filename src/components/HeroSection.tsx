import { ArrowRightIcon } from 'lucide-react'
import HeroImage from './common/HeroImage'
import CTAButton from './common/JoinwaitList'
import Container from './structure/Container'
import Section from './structure/Section'
import H1 from './typography/H1'
import Paragraph from './typography/Paragraph'
import AnimatedShinyText from './ui/animated-shiny-text'
import { cn } from '~/lib/utils'
import WordRotate from './ui/word-rotate'
import Picture from './common/Picture'
import Image from 'next/image'
import useMediaQuery from '~/hooks/useMediaQuery'

const AnimatedShinyTextDemo = (props) => {
  return (
    <div
      className={cn(
        'group rounded-full border border-indigo-100 bg-indigo-50 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200',
        props.className,
      )}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
        <span className="items-center text-ellipsis line-clamp-1">
          {props.content}
        </span>
        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedShinyText>
    </div>
  )
}

const HeroContent = () => {
  const heroData = {
    heroSpan: 'Data-Driven Dentistry for Growing Practices',
    heroHeading: 'Aggregate Your Clinical & Non-clinical Data For',
    heroHeadingList: [
      'Better Business Decisions',
      'Identifying Opportunities',
      'Ana Staff Performance',
      'Defining Practice Culture',
    ],
    heroDescription:
      'OS Dental is a custom analytics solution that’s fundamentally built differently, seamlessly connecting and validating all sources of DSO data to yield powerful, reliable insights.',
    ctaName: 'Book Free Demo',
  }
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full gap-12 text-center md:text-left py-32">
      <div className="md:w-2/3 w-full flex flex-col items-center md:items-center">
        {/* Title and Subtitle */}
        <AnimatedShinyTextDemo className="w-1/2" content={heroData.heroSpan} />
        <H1 className="text-center text-white font-medium">
          {heroData.heroHeading}
        </H1>
        <WordRotate
          className="md:text-6xl text-4xl text-ellipsis font-semibold text-[#f768d1] md:whitespace-nowrap"
          words={heroData.heroHeadingList}
        />

        {/* Description */}
        <Paragraph className="text-center font-light">
          {heroData.heroDescription}
        </Paragraph>

        {/* Buttons */}
        <div
          className="flex justify-center md:justify-start items-center gap-3 mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <CTAButton name={heroData.ctaName} />
        </div>
      </div>
    </div>
  )
}
const HeroSection = () => {
  const isMobile = useMediaQuery(1280)

  return (
    <Section id="hero-section" className="bg-[#02024a] px-4">
      {!isMobile && <div className="rounded-2xl flex items-end justify-right w-1/3 ">
        <Image
          width={400}
          height={600}
          src={'/hero-left.png'}
          alt="hero-left"
        />
      </div>}
      <HeroContent />
      {!isMobile &&<div className="rounded-2xl  flex items-end justify-left w-1/3 ">
       <Image
          width={400}
          height={600}
          src={'/hero-right.png'}
          alt="hero-left"
        />
      </div>}
    </Section>
  )
}

export default HeroSection
