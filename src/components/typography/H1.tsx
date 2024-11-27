import React from 'react'
import { cn } from '~/lib/utils'

const H1 = (props) => {
  return <h1 className={cn("text-[40px] font-semibold max-w-4xl md:!leading-tight mt-4", props.className)}>{props.children}</h1>
}

export default H1
