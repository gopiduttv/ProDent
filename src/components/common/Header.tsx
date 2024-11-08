import Link from 'next/link';
import Navbar from './NavBar';




const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full h-[75px] p-4 box-border z-50 bg-white shadow-md"
      style={{ boxSizing: 'border-box' }}
    >
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg">os dental</span>
        </Link>

        {/* Toggler Button for Mobile */}
        <button
          className="lg:hidden p-2 border-0 focus:outline-none"
          type="button"
          aria-label="Toggle navigation"
        >
          <i className="text-primary text-2xl ti ti-menu"></i>
        </button>

        <Navbar/>
      </nav>
    </header>
  );
};

export default Header;

