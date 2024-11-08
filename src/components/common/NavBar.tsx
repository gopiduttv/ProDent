import Link from 'next/link';

function Navbar() {
  return (
    <div className="hidden lg:flex items-center space-x-6">
      <a href="#about-section" className="text-sm font-semibold text-gray-700 hover:text-primary">
        About
      </a>
      <a href="#edge-section" className="text-sm font-semibold text-gray-700 hover:text-primary">
        Our Edge
      </a>
      <a href="#features-section" className="text-sm font-semibold text-gray-700 hover:text-primary">
        Features
      </a>
      <a href="#vision-section" className="text-sm font-semibold text-gray-700 hover:text-primary">
        Our Vision
      </a>
      <Link
        href="/login"
        className="btn btn-primary text-md rounded px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 shadow-md"
      >
        Login
      </Link>
      <Link
        href="#join-waitlist"
        className="btn btn-primary text-md rounded px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 shadow-md"
      >
        Join Waitlist
      </Link>
    </div>
  );
}

export default Navbar;
