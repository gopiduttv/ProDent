import Link from 'next/link'
import Navbar from './NavBar'
import Image from 'next/image'
import MobileMenuButton from './MobileMenuButton'
import { useEffect, useRef } from 'react'
import Container from '../structure/Container'

const Header = ({ data }: any) => {
  const demoBtnUrl = data?.siteSettings?.demoBtnUrl ?? ''
  const loginUrl  = data?.siteSettings?.loginBtnUrl ?? ''
  const ctaName = data?.heroSectionData?.ctaName ?? ''
  const headerContent = {
    ctaName: ctaName,
    ctaUrl: demoBtnUrl,
    loginUrl:loginUrl,
  }

  const headerRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    const nextSection = document.querySelector('#hero-section')

    const observer = new IntersectionObserver(
      ([entry]) => {
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
      className="fixed  top-0 left-0 w-full h-[75px] py-4 backdrop-blur-sm  transition-colors duration-300 z-50"
    >
      <nav className=" flex flex-col xl:flex-row xl:items-center xl:justify-between gap-42 xl:px-4">
        <div className="flex flex-row justify-between px-4 xl:px-0">
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
          <MobileMenuButton className="xl:hidden p-2 border-0 focus:outline-none text-white" />
        </div>
        <Navbar
          ctaUrl={headerContent?.ctaUrl}
          ctaName={headerContent?.ctaName}
          loginUrl={headerContent?.loginUrl}
        />
      </nav>
    </header>
  )
}

export default Header
