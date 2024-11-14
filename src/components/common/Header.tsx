import Link from 'next/link'
import Navbar from './NavBar'
import Image from 'next/image'

const Header = () => {
  const headerContent = {
    ctaName: "Book Free Demo"
  }
  return (
    <header
      className="fixed top-0 left-0 w-full h-[75px] py-4 px-4 box-border z-50 bg-[#02024a] shadow-md"
      style={{ boxSizing: 'border-box' }}
    >
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
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

        {/* Toggler Button for Mobile */}
        <button
          className="lg:hidden p-2 border-0 focus:outline-none"
          type="button"
          aria-label="Toggle navigation"
        >
          <i className="text-primary text-2xl ti ti-menu"></i>
        </button>

        <Navbar ctaName={headerContent.ctaName} />
      </nav>
    </header>
  )
}

export default Header
