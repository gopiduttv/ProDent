import React from 'react'
import Picture from './Picture'
import LinkedIn from '../icons/LinkedIn'

import H3 from '../typography/H3'

function PeopleCardHeader({ name, designation, link }) {
  return (
    <div className="flex flex-row justify-between ">
      <div>
        <H3 className="text-md md:text-lg">{name}</H3>
        <p className="text-xs md:text-sm text-[#F768D1]">{designation}</p>
      </div>
      <div>
        <a href={link}>
          <LinkedIn className="text-black hover:text-stone-500"/>
        </a>
      </div>
    </div>
  )
}

function PeopleCard({ name, designation, description, profile, socials }) {
  return (
    <div className="w-[604px] flex flex-row bg-slate-100 p-8 rounded-2xl">
      <div className="pr-8">
        IMAGE
      </div>
      <div className="flex flex-col gap-3">
        <PeopleCardHeader {...{ name, designation, link: socials.LinkedIn }} />
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default PeopleCard
