import CTAButton from './common/CTAbutton'
import Section from './structure/Section'
import H1 from './typography/H1'
import AnimatedShinyText from './ui/animated-shiny-text'
import { cn } from '~/lib/utils'
import Image from 'next/image'
import useWindowSize from '~/hooks/useWindowSize'
import { PortableText } from '@portabletext/react'
import Container from './structure/Container'

const components: any = {
  listItem: ({ children }: { children: React.ReactNode }) => (
    <li className="ame={cn(
        'text-white/80 !leading-6 text-[16px]  text-center  font-light md:max-w-3xl">
      {children}
    </li>
  ),
  marks: {
    highlight: ({ children }: { children: React.ReactNode }) => (
      <span className="font-semibold bg-yellow">
        {children}
      </span>
    ),

    em: ({ children }: { children: React.ReactNode }) => (
      <em className="text-blue-500">{children}</em>
    ),
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
  },
  block: {
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="text-white/80 text-center leading-tight">{children}</p>
    ),

    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-2xl py-4">{children}</h2>
    ),
  },
}

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

const HeroContent = ({ className = null, content, ctaBtnUrl }) => {
  return (
    <div className={cn(className)}>
      <div className="flex flex-col items-center gap-3">
        {/* Title and Subtitle */}
        <AnimatedShinyTextDemo
          className="text-xs md:text-sm font-light"
          content={content?.heroStrip}
        />
        <div>
          <H1 className="text-center text-white font-semibold md:text-[64px] leading-snug">
            {content?.heroTitleStatic}
          </H1>
          <H1 className="text-center text-[#F768D1]">{content?.heroTitleDynamic}</H1>

        </div>

        <PortableText value={content?.heroDescription} components={components}></PortableText>

        {/* Buttons */}
        <div
          className="flex justify-center md:justify-start items-center gap-3 mt-12"
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
      className="hero-section bg-[#02024a] bg-hero-pattern bg-cover bg-center"
    >
      <Container className="relative h-[768px] lg:h-[900px]">

        {data && (
          <HeroContent
            className="absolute lg:top-56 left-0 w-full h-full lg:h-auto bg-transparent flex justify-center items-center z-20 px-4"
            content={data}
            ctaBtnUrl={ctaBtnUrl}
          />
        )}
        {windowWidth > 1280 && (
          <div className={`absolute bottom-0 left-[-100px]  z-15`}>
            <Image
              width={450}
              height={450}
              src={'/hero-left.png'}
              alt="hero-left"
            />
          </div>
        )}
        {windowWidth > 1280 && (
          <div className={`absolute bottom-0 right-[-100px] z-15`}>
            <Image
              width={450}
              height={450}
              src={'/hero-right.png'}
              alt="hero-left"
            />
          </div>
        )}
      </Container>
    </Section>
  )
}

export default HeroSection
