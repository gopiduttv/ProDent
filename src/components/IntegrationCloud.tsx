import React from 'react'
import Marquee from './ui/marquee'
import { cn } from '~/lib/utils'
import Image from 'next/image'

const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john',
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jane',
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jenny',
  },
  {
    name: 'James',
    username: '@james',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/james',
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const IntegrationLogoCard = (props) => {
  return (
    <div
      className={`h-20  ${props.className}`}
      id={`integration-logo-card-${props.index}`}
    >
      <Image src={props.image} width={200} height={200} alt="location-icon" />
    </div>
  )
}
const IntegrationCloud = (props) => {
  return (
    <div className={`${props.className}`}>
      {props.images.map((image, index) => (
        <IntegrationLogoCard key={index} image={image} />
      ))}
    </div>
  )
}

export default IntegrationCloud
