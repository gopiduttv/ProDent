import React, { useContext } from 'react'
import { NavigationContext } from '~/providers/NavigationContextProvider'

function MobileMenuButton(props) {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(NavigationContext)
  const handler = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  return (
    <button
      className={props.className}
      type="button"
      aria-label="Toggle navigation"
      onClick={handler}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <rect x="3" y="5" width="18" height="2" rx="1"></rect>
        <rect x="3" y="11" width="18" height="2" rx="1"></rect>
        <rect x="3" y="17" width="18" height="2" rx="1"></rect>
      </svg>
    </button>
  )
}

export default MobileMenuButton
