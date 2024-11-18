import { ArrowRightIcon } from 'lucide-react'
import CTAButton from './common/JoinwaitList'
import Section from './structure/Section'
import H1 from './typography/H1'
import Paragraph from './typography/Paragraph'
import AnimatedShinyText from './ui/animated-shiny-text'
import { cn } from '~/lib/utils'
import WordRotate from './ui/word-rotate'
import Image from 'next/image'
import GridPattern from './ui/grid-pattern'
import useWindowSize from '~/hooks/useWindowSize'

const AnimatedShinyTextDemo = (props) => {
  return (
    <div
      className={cn(
        'group rounded-full backdrop-blur-sm border-[1px] border-gray-500 bg-white/30 text-base  transition-all ease-in hover:cursor-pointer hover:bg-neutral-200',
        props.className,
      )}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 text-white transition ease-out  hover:text-gray-500   hover:duration-500 ">
        <span className="items-center text-ellipsis line-clamp-1">
          {props.content}
        </span>
        <ArrowRightIcon className="ml-1 size-3 md:size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
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
    <div className="md:w-[900px] w-full flex flex-col-reverse md:flex-row justify-center items-center gap-12 text-center md:text-left py-28 md:py-32 z-10">
      <div className="flex flex-col items-center md:items-center">
        {/* Title and Subtitle */}
        <AnimatedShinyTextDemo
          className="text-xs md:text-base"
          content={heroData.heroSpan}
        />
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
  const { width: windowWidth } = useWindowSize();


  return (
    <Section id="hero-section" className="hero-section bg-[#02024a] px-4">
      { (windowWidth > 768) && (
        <div className="rounded-2xl flex items-end justify-right z-10">
          <Image
            width={windowWidth > 1800 ? 600: 300}
            height={600}
            src={'/hero-left.png'}
            alt="hero-left"
          />
        </div>
      )}
      <HeroContent />
      { windowWidth > 768 && (
        <div className="rounded-2xl  flex items-end justify-left z-10">
          <Image
            width={windowWidth > 1800 ? 600: 300}
            height={600}
            src={'/hero-right.png'}
            alt="hero-left"
          />
        </div>
      )}
      <GridPattern
        className={cn('z-0',
          '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] ',
          'inset-x-0 inset-y-[-30%] h-[200%]',
        )}
      />
      {/* <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="w-[500vw] h-[500vw] bg-gradient-to-tl  from-[#4364c1]  via-[#02024a]  to-[#4364c1] animate-spin-sl  rounded-full" />
      </div> */}
    </Section>
  )
}

export default HeroSection
