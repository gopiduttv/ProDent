import Link from 'next/link'
import Navbar from './NavBar'
import Image from 'next/image'
import MobileMenuButton from './MobileMenuButton'
import { useEffect, useRef } from 'react'

const Header = () => {
  const headerContent = {
    ctaName: 'Book Free Demo',
  }

  const headerRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    const nextSection = document.querySelector('#hero-section')

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log({isIntersecting: entry.isIntersecting})
        if (entry.isIntersecting) {
          header.classList.remove('bg-[#02024a]')
          header.classList.add('backdrop-blur-sm')
        } else {
          header.classList.remove('backdrop-blur-sm')
          header.classList.add('bg-[#02024a]')
        }
      },
      { threshold: 0.1 }, // Trigger when 10% of the next section is visible
    )

    if (nextSection) {
      observer.observe(nextSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full h-[75px] py-4 md:px-4  box-border  backdrop-blur-sm  transition-colors duration-300 z-50"
      style={{ boxSizing: 'border-box' }}
    >
      <nav className=" flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:px-4">
        <div className="flex flex-row justify-between px-4 md:px-0">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg">
              <Image
                src="/OSDentalLogo.svg"
                width={135}
                height={26}
                alt="OS Dental Logo"
              />
            </span>
          </Link>
          <MobileMenuButton className="md:hidden p-2 border-0 focus:outline-none text-white" />
        </div>
        <Navbar ctaName={headerContent.ctaName} />
      </nav>
    </header>
  )
}

export default Header
