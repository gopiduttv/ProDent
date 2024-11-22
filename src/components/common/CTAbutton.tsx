import React, { useContext } from 'react'
import { cn } from '~/lib/utils'
import { BookDemoProvider } from '~/providers/BookDemoProvider'

const CTAButton = ({ className = '', name, url = '/' }) => {
  const { showPopup, setDemoPopupActive } = useContext(BookDemoProvider)
  const handleClick = () => {
    setDemoPopupActive(!showPopup)
  }
  return (
    <div
      className={cn(
        'cursor-pointer px-4 py-2 bg-[#8639f8] rounded-md justify-center items-center gap-2.5 inline-flex text-sm ',
        className,
      )}
    >
      <a
        onClick={() => handleClick()}
        className="text-white font-semibold leading-snug"
      >
        {name}
      </a>
    </div>
  )
}

export default CTAButton
