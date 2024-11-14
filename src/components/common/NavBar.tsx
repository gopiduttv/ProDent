import Link from 'next/link';
import LoginButton from './Login';
import CTAButton from './JoinwaitList';

function Navbar(props) {
  return (
    <div className="hidden lg:flex items-center space-x-6">
      <a href="#hero-section" className="text-sm font-medium text-white hover:text-primary hover:text-stone-400">
        Analytics
      </a>
      <a href="#features-section" className="text-sm font-medium text-white hover:text-primary hover:text-stone-400">
        Features
      </a>
      <a href="#integrations-section" className="text-sm font-medium text-white hover:text-primary hover:text-stone-400">
        Integrations 
      </a>
      <a href="#benefits-section" className="text-sm font-medium text-white hover:text-primary hover:text-stone-400">
        Benefits 
      </a>
      <a href="#testimonials-section" className="text-sm font-medium text-white hover:text-primary hover:text-stone-400">
        Testimonials
      </a>
      <a href="#about-us-section" className="text-sm font-medium text-white hover:text-primary hover:text-stone-400">
        About Us 
      </a>
      <a href="#footer" className="text-sm font-medium text-white hover:text-primary hover:text-stone-400">
        Contact
      </a>
      <LoginButton/>
      <CTAButton name={props.ctaName}/>
    </div>
  );
}

export default Navbar;
