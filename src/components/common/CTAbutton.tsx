import React, { useContext } from 'react'
import { cn } from '~/lib/utils'
import { BookDemoContext } from '~/providers/BookDemoProvider'

const CTAButton = ({ className = null, name, url = '/' }) => {
  const { isDemoPopUpShown, setIsDemoPopUpShown } = useContext(BookDemoContext)
  const handleClick = () => {
    setIsDemoPopUpShown(!isDemoPopUpShown)
  }
  return (
    <div
      className={cn(
        'cursor-pointer px-4 py-2 border-[1px] bg-[#8639f8] border-[#8639f8] rounded-md justify-center items-center gap-2.5 inline-flex hover:bg-[#9E5CFF] text-[16px]',
        className,
      )}
    >
      <button
        onClick={() => handleClick()}
        className="text-white font-medium leading-snug"
      >
        {name}
      </button>
    </div>
  )
}

export default CTAButton
