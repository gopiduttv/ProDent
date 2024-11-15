import React from 'react'

const CTAButton = (props) => {
  return (
    <div className="h-10 px-4 py-2 bg-[#8639f8] rounded-md justify-center items-center gap-2.5 inline-flex">
      <a href="#join-waitlist" className="text-white text-sm font-semibold leading-snug">
        {props.name}
      </a>
    </div>
  )
}

export default CTAButton
