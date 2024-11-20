import { ArrowRightIcon } from 'lucide-react'
import CTAButton from './common/CTAbutton'
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
        'group rounded-full backdrop-blur-sm border-[1px] border-white/15 bg-white/10 text-base  transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 ',
        props.className,
      )}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center px-5 py-2 text-white transition ease-out  hover:text-gray-500   hover:duration-500 ">
        <span className="items-center text-ellipsis line-clamp-1">
          {props.content}
        </span>
        <ArrowRightIcon className="ml-1 size-3 md:size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedShinyText>
    </div>
  )
}

const HeroContent = ({ content }) => {
  return (
    <div className="md:w-[900px] w-full flex flex-col-reverse md:flex-row justify-center items-center gap-12 text-center md:text-left py-28 md:pt-56 md:pb-32 z-10">
      <div className="flex flex-col items-center md:items-center">
        {/* Title and Subtitle */}
        <AnimatedShinyTextDemo
          className="text-xs md:text-sm font-light"
          content={content?.heroStrip}
        />
        <H1 className="text-center text-white font-medium">
          {content?.heroTitleStatic}
        </H1>
        <WordRotate
          className="md:text-6xl text-4xl text-ellipsis font-semibold text-[#f768d1] md:whitespace-nowrap"
          words={content?.heroTitleDynamic}
        />

        {/* Description */}
        <Paragraph className="text-center">
          {content?.heroDescription}
        </Paragraph>

        {/* Buttons */}
        <div
          className="flex justify-center md:justify-start items-center gap-3 mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <CTAButton className="px-6 py-3" name={content?.ctaName} />
        </div>
      </div>
    </div>
  )
}
const HeroSection = ({data}) => {
  const { width: windowWidth } = useWindowSize()
  return (
    <Section
      id="hero-section"
      className="hero-section bg-[#02024a] bg-hero-pattern bg-cover px-4"
    >
      {windowWidth > 1280 && (
        <div className="rounded-2xl flex items-end justify-right z-10">
          <Image
            width={windowWidth > 1800 ? 600 : 300}
            height={600}
            src={'/hero-left.png'}
            alt="hero-left"
          />
        </div>
      )}
      {data && <HeroContent content={data}/>}
      { windowWidth > 1280 && (
        <div className="rounded-2xl  flex items-end justify-left z-10">
          <Image
            width={windowWidth > 1800 ? 600 : 300}
            height={600}
            src={'/hero-right.png'}
            alt="hero-left"
          />
        </div>
      )}
      <div className="overflow-hidden">
        <GridPattern
          className={cn(
            'z-0',
            '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] ',
            'inset-y-[-40%] h-[200%]',
          )}
        />
      </div>
    </Section>
  )
}

export default HeroSection
