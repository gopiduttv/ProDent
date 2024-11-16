import Link from 'next/link'
import Navbar from './NavBar'
import Image from 'next/image'
import MobileMenuButton from './MobileMenuButton'

const Header = () => {
  const headerContent = {
    ctaName: 'Book Free Demo',
  }
  return (
    <header
      className="fixed top-0 left-0 w-full h-[75px] py-4 md:px-4 box-border z-50 bg-[#02024a] shadow-md"
      style={{ boxSizing: 'border-box' }}
    >
      <nav className=" flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-row justify-between px-4">
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
