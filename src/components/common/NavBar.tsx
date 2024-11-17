import LoginButton from './Login'
import CTAButton from './JoinwaitList'
import { useContext } from 'react'
import { NavigationContext } from '~/providers/NavigationContextProvider'

const navigationLinks = [
  { href: '#hero-section', name: 'Analytics' },
  { href: '#features-section', name: 'Features' },
  { href: '#integrations-section', name: 'Integrations' },
  { href: '#benefits-section', name: 'Benefits' },
  { href: '#testimonials-section', name: 'Testimonials' },
  { href: '#about-us-section', name: 'About Us' },
  { href: '#footer', name: 'Contact' },
]

function DesktopNavbar(props) {
  return (
    <div className="hidden md:flex md:flex-row items-center gap-6">
      {navigationLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-sm font-base text-gray-300 hover:text-primary hover:text-stone-400 focus:text-white"
        >
          {link.name}
        </a>
      ))}
      <LoginButton />
      <CTAButton name={props.ctaName} />
    </div>
  )
}

function MobileNavBar(props) {
  const { isMobileMenuOpen, setIsMobileMenuOpen } =
    useContext(NavigationContext)
  const handler = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  if (!isMobileMenuOpen) return

  return (
    <div className="md:hidden flex flex-col items-center gap-6 bg-[#02024a] p-4 text-white">
      {navigationLinks.map((link, index) => (
        <a key={index} href={link.href} onClick={handler}>
          {link.name}
        </a>
      ))}
      <LoginButton />
      <CTAButton name={props.ctaName} />
    </div>
  )
}

function Navbar(props) {
  return (
    <>
      <MobileNavBar {...props} />
      <DesktopNavbar {...props} />
    </>
  )
}

export default Navbar
