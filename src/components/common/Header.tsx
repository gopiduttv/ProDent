import Link from 'next/link';

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full h-[75px] p-4 box-border z-50 bg-white shadow-md"
      style={{ boxSizing: 'border-box' }}
    >
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="font-bold text-lg">os dental</h1>
        </Link>

        {/* Toggler Button for Mobile */}
        <button
          className="lg:hidden p-2 border-0 focus:outline-none"
          type="button"
          aria-label="Toggle navigation"
        >
          <i className="text-primary text-2xl ti ti-menu"></i>
        </button>

        {/* Navbar Links */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className="text-sm font-semibold text-gray-700 hover:text-primary" id="about">
            About
          </button>
          <button className="text-sm font-semibold text-gray-700 hover:text-primary" id="edge">
            Our Edge
          </button>
          <button className="text-sm font-semibold text-gray-700 hover:text-primary" id="features">
            Features
          </button>
          <button className="text-sm font-semibold text-gray-700 hover:text-primary" id="vision">
            Our Vision
          </button>
          <Link
            href="/main/authentication-login"
            className="btn btn-primary text-md rounded px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 shadow-md"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

