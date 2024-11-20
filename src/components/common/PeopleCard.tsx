import React from 'react'
import Picture from './Picture'
import LinkedIn from '../icons/LinkedIn'

function PeopleCard( props:any ) {
  return (
    <div>
      <Picture url={props} />
      <div>{props?.name}</div>
      <div>{props?.designation}</div>
      <div>{props?.description}</div>
      <div>
      <a href={props?.socialMediaLinks?.Linkedin}>
            <LinkedIn />
          </a>
      </div>
    </div>
  )
}

export default PeopleCard
