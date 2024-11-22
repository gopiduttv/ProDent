import React from 'react'
import Slider from 'react-slick'
import TestimonialCard from './TestimonialCard'


const TestimonialCarousel = ({ testimonials }) => {
  const testimonialLength = testimonials.length

  if (testimonialLength == 1) {
    return (
      <div className="max-w-full">
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-center">
            <TestimonialCard props={testimonials[0]} />
          </div>
        </div>
      </div>
    )
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div className="max-w-full h-[350px] ">
      <Slider {...settings}>
        {testimonials?.map((testimonial, index) => {
          return (
            <div key={index} className="w-full h-[350px] flex flex-col">
              <div className="w-full flex justify-center">
                <TestimonialCard props={testimonial} />
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default TestimonialCarousel
