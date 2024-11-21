import React from 'react'
import ImageLoader from './common/imageLoader/imageLoader'

export default function PartnerSection({partnerList}) { debugger
  return (
    <div>{partnerList?.map((e,i)=>{
        return(<div className='flex justify-center align-middle'>
       
            <ImageLoader className='!w-14 !h-14' image={e.image}/>
        </div>)
    })}</div>
  )
}
