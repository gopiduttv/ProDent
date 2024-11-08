import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';

// Sample testimonials data
const testimonials = [
  {
    title: "Venture Capital Fund",
    role: "Investor",
    location: "London",
    feedback: "I'm able to receive the level of diligence depth normally seen in reports from top-tier consulting firms. This is a huge boost to our investment diligence capabilities.",
  },
  {
    title: "Bulge-bracket Private Equity",
    role: "Principal",
    location: "London",
    feedback: "Aeka's insights save me time and money I spend on my phase 0 commercial diligence. I quickly learn about an industry, the basic market performance, and the competitive landscape.",
  },
  {
    title: "Top 3 Consulting Firm",
    role: "Partner",
    location: "London",
    feedback: "Aeka accurately identified a company in great detail (pipeline mgmt. services) instead of just Oil & Gas. It also accurately sized the pipeline mgmt services market.",
  },
  {
    title: "Startup",
    role: "Head of Corporate Strategy",
    location: "London",
    feedback: "I'm able to accurately find not only my direct competitors but also segments that could potentially be my competitors due to adjacencies and subsidiaries.",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="max-w-7xl h-[300px]">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4 h-[250px]">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
