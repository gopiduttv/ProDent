import React from 'react'
import Slider from 'react-slick'
import TestimonialCard from './TestimonialCard'

// Sample testimonials data
const testimonials = [
  {
    user: 'Gopi Dutt V',
    tenant: 'Smile Dental',
    title: 'Venture Capital Fund',
    role: 'Investor',
    infoString: 'London',
    feedback:
      "I'm able to receive the level of diligence depth normally seen in reports from top-tier consulting firms. This is a huge boost to our investment diligence capabilities.",
  },
  {
    user: 'Gopi Dutt V',
    tenant: 'Smile Dental',
    title: 'Bulge-bracket Private Equity',
    role: 'Principal',
    infoString: 'London',
    feedback:
      "Aeka's insights save me time and money I spend on my phase 0 commercial diligence. I quickly learn about an industry, the basic market performance, and the competitive landscape. I quickly learn about an industry, the basic market performance, and the competitive landscape.I quickly learn about an industry, the basic market performance, and the competitive landscape.I quickly learn about an industry, the basic market performance, and the competitive landscape.I quickly learn about an industry, the basic market performance, and the competitive landscape.I quickly learn about an industry, the basic market performance, and the competitive landscape.",
  },
  {
    user: 'Gopi Dutt V',
    tenant: 'Smile Dental',
    title: 'Top 3 Consulting Firm',
    role: 'Partner',
    infoString: 'London',
    feedback:
      'Aeka accurately identified a company in great detail (pipeline mgmt. services) instead of just Oil & Gas. It also accurately sized the pipeline mgmt services market.',
  },
  {
    user: 'Gopi Dutt V',
    tenant: 'Smile Dental',
    title: 'Startup',
    role: 'Head of Corporate Strategy',
    infoString: 'London',
    feedback:
      "I'm able to accurately find not only my direct competitors but also segments that could potentially be my competitors due to adjacencies and subsidiaries.",
  },
]

const TestimonialCarousel = ({ props }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div className="max-w-7xl h-[350px] ">
      <Slider {...settings}>
        {props?.map((e, i) => {
          return (
            <div key={i} className="px-4 h-[350px] flex flex-col">
              <div className="w-full flex justify-center">
                <TestimonialCard props={e} />
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default TestimonialCarousel
