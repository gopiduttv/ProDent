import React from 'react'
import { cn } from '~/lib/utils'

const CTAButton = ({className = "", name}) => {
  return (
    <div className={cn("px-4 py-2 bg-[#8639f8] rounded-md justify-center items-center gap-2.5 inline-flex text-sm ", className)} >
      <a href="/" className="text-white font-semibold leading-snug">
        {name}
      </a>
    </div>
  )
}

export default CTAButton
