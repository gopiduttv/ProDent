import Link from 'next/link';
import LoginButton from './Login';
import JoinwaitList from './JoinwaitList';

function Navbar() {
  return (
    <div className="hidden lg:flex items-center space-x-6">
      <a href="#about-section" className="text-sm font-semibold text-white hover:text-primary hover:text-stone-400">
        About
      </a>
      <a href="#edge-section" className="text-sm font-semibold text-white hover:text-primary hover:text-stone-400">
        Our Edge
      </a>
      <a href="#features-section" className="text-sm font-semibold text-white hover:text-primary hover:text-stone-400">
        Features
      </a>
      <a href="#vision-section" className="text-sm font-semibold text-white hover:text-primary hover:text-stone-400">
        Our Vision
      </a>
      <LoginButton/>
      <JoinwaitList/>
    </div>
  );
}

export default Navbar;
