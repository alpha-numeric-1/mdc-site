import { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { scrollToSection } from "../utils/clicknav";


function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navigation = [
    { name: 'Home', to: '#home' },
    { name: 'About', to: '#about' },
    { name: 'Projects', to: '#projects' },
    { name: 'Experience', to: '#experience' },
    { name: 'Contact', to: '#contact' }
  ];

  const handleNavClick = scrollToSection;
  
  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/#home" onClick={(e) => handleNavClick(e,"#home")} className="-m-1.5 p-1.5 group">
            <span className="sr-only">M.D.C</span>
            <div className="h-8 w-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
              <span className="text-white font-bold text-sm">MDC</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation - Fire themed */}
        <div className="hidden lg:flex lg:justify-center lg:flex-1">
          <div className="flex gap-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.to}
                onClick={(e) => handleNavClick(e, item.to)}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Right side items */}
        <div className="flex items-center justify-end lg:flex-1 gap-4">
          {/* Social Links - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://github.com/Crcs1225"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-500 transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/zrmdcs12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/25"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen) }
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-orange-50 transition-colors"
            >
              <span className="sr-only">Toggle menu</span>
                            {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Fixed positioning and spacing */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-white border-t border-gray-200 shadow-lg">
          <div className="space-y-2 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.to}
                className="block rounded-lg px-3 py-3 text-base font-semibold text-gray-900 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                onClick={(e) => handleNavClick(e, item.to)}
              >
                {item.name}
              </a>
            ))}
            {/* Mobile Social Links */}
            <div className="px-3 py-3">
              <div className="flex gap-4">
                <a
                  href="https://github.com/Crcs1225"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/zrmdcs12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            {/* Mobile Resume Download */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 transition-all duration-300"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;