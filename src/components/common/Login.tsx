import React from 'react'

const LoginButton = ({url}) => {
  return (
    <div className=" px-4 py-2 border-[1px] border-[#F0F0F0] rounded-md justify-center items-center gap-2.5 inline-flex text-[#F0F0F0] hover:border-gray-500  hover:text-gray-500 text-sm">
      <a href={url} className="text- font-medium leading-snug ">
        Login
      </a>
    </div>
  )
}

export default LoginButton
