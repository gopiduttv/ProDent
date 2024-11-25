import React from 'react'

const LoginButton = ({url}) => {
  return (
    <div className="h-10 px-4 py-2 border-[1px] border-[#9E5CFF] rounded-md justify-center items-center gap-2.5 inline-flex text-[#9E5CFF] hover:bg-[#9E5CFF] hover:text-white text-sm">
      <a href={url} className="text- font-medium leading-snug ">
        Login
      </a>
    </div>
  )
}

export default LoginButton
