import CTAButton from './common/CTAbutton'
import Section from './structure/Section'
import H1 from './typography/H1'
import Paragraph from './typography/Paragraph'
import AnimatedShinyText from './ui/animated-shiny-text'
import { cn } from '~/lib/utils'
import WordRotate from './ui/word-rotate'
import Image from 'next/image'
import useWindowSize from '~/hooks/useWindowSize'

const AnimatedShinyTextDemo = (props) => {
  return (
    <div
      className={cn(
        'group rounded-full backdrop-blur-sm border-[1px] border-white/15 bg-white/10 text-base ',
        props.className,
      )}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center px-5 py-2 text-white transition ease-out  ">
        <span className="items-center text-ellipsis line-clamp-1">
          {props.content}
        </span>
        {/* <ArrowRightIcon className="ml-1 size-3 md:size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
      </AnimatedShinyText>
    </div>
  )
}

const HeroContent = ({ content, ctaBtnUrl }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center">
        {/* Title and Subtitle */}
        <AnimatedShinyTextDemo
          className="text-sm font-light"
          content={content?.heroStrip}
        />
        <H1 className="text-center text-white font-medium 2xl:px-20">
          {content?.heroTitleStatic}
        </H1>
        <WordRotate
          className="2xl:text-5xl text-4xl text-ellipsis font-semibold text-[#f768d1] md:whitespace-nowrap"
          words={content?.heroTitleDynamic}
        />

        {/* Description */}
        <Paragraph className="2xl:px-20 text-center">
          {content?.heroDescription}
        </Paragraph>

        {/* Buttons */}
        <div
          className="flex justify-center md:justify-start items-center gap-3 mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <CTAButton
            url={ctaBtnUrl}
            className="px-6 py-3"
            name={content?.ctaName}
          />
        </div>
      </div>
    </div>
  )
}
const HeroSection = ({ data, ctaBtnUrl }) => {
  const { width: windowWidth } = useWindowSize()
  return (
    <Section
      id="hero-section"
      className="hero-section bg-[#02024a] bg-hero-pattern bg-cover px-4 pt-32 pb-16 xl:pt-36 xl:pb-96"
    >
      {windowWidth > 1280 && (
        <div
          className={`absolute top-[330px] ${windowWidth > 1800 ? "left-60" : "left-40"} rounded-2xl flex items-end justify-right z-15`}
        >
          <Image
            width={550}
            height={600}
            src={'/hero-left.png'}
            alt="hero-left"
          />
        </div>
      )}
      {data && <HeroContent ctaBtnUrl={ctaBtnUrl} content={data} />}
      {windowWidth > 1280 && (
        <div
          className={`absolute top-[330px] ${windowWidth > 1800 ? "right-60" : "right-40"} rounded-2xl flex items-end justify-left z-15`}
        >
          <Image
            width={550}
            height={600}
            src={'/hero-right.png'}
            alt="hero-left"
          />
        </div>
      )}
    </Section>
  )
}

export default HeroSection
