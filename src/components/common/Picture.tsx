import React from 'react'

const Picture = ({url, height=null}) => {
  return (
    <div className="md:w-1/2 w-full flex ">
      <div className="rounded-2xl overflow-hidden bg-stone-300 w-full">
        <img
          className={`object-cover w-full h-[${height ? height : 300}px]`}
          src={url}
        />
      </div>
    </div>
  )
}

export default Picture
