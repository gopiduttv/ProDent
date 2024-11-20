import React from 'react'
import Picture from './Picture'
import LinkedIn from '../icons/LinkedIn'

function PeopleCard({ name, designation, description, profile, socials }) {
  return (
    <div>
      <Picture url={profile} />
      <div>{name}</div>
      <div>{designation}</div>
      <div>{description}</div>
      <div>
        {socials.map((link) => (
          <a href={link}>
            <LinkedIn />
          </a>
        ))}
      </div>
    </div>
  )
}

export default PeopleCard
