import React from 'react'
import Slider from 'react-slick'
import TestimonialCard from './TestimonialCard'

// Sample testimonials data
const testimonials = [
  {
    user: 'Micheal Jordan',
    tenant: 'Smile Dental',
    title: 'OSDental has been a great addition to my practice',
    role: 'Investor',
    infoString: '5 Locations, Florida',
    feedback:
      "OSDental has been a great addition to my practice, and I like the clinical aspect of the software. It's very concise, and everything seems to be in one location. It helps you assimilate information quickly and can present a nice overview to the patient. The clinical note templates are amazing as you can make them very detailed - as detailed as you want them to be.",
  },
  {
    user: 'Micheal Jordan',
    tenant: 'Smile Dental',
    title: 'OSDental has been a great addition to my practice',
    role: 'Investor',
    infoString: '5 Locations, Florida',
    feedback:
      "OSDental has been a great addition to my practice, and I like the clinical aspect of the software. It's very concise, and everything seems to be in one location. It helps you assimilate information quickly and can present a nice overview to the patient. The clinical note templates are amazing as you can make them very detailed - as detailed as you want them to be.",
  },
  {
    user: 'Micheal Jordan',
    tenant: 'Smile Dental',
    title: 'OSDental has been a great addition to my practice',
    role: 'Investor',
    infoString: '5 Locations, Florida',
    feedback:
      "OSDental has been a great addition to my practice, and I like the clinical aspect of the software. It's very concise, and everything seems to be in one location. It helps you assimilate information quickly and can present a nice overview to the patient. The clinical note templates are amazing as you can make them very detailed - as detailed as you want them to be.",
  },
  {
    user: 'Micheal Jordan',
    tenant: 'Smile Dental',
    title: 'OSDental has been a great addition to my practice',
    role: 'Investor',
    infoString: '5 Locations, Florida',
    feedback:
      "OSDental has been a great addition to my practice, and I like the clinical aspect of the software. It's very concise, and everything seems to be in one location. It helps you assimilate information quickly and can present a nice overview to the patient. The clinical note templates are amazing as you can make them very detailed - as detailed as you want them to be.",
  },
 
]

const TestimonialCarousel = () => {
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
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4 h-[350px] flex flex-col">
            <div className="w-full flex justify-center">
              <TestimonialCard {...testimonial} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default TestimonialCarousel
