'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQ' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('portfolio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      setIsScrolled(window.scrollY > 0);

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const wasMenuOpen = isMobileMenuOpen;
    setIsMobileMenuOpen(false);

    const performScroll = () => {
      const nav = document.querySelector('nav');
      const navHeight = nav ? nav.offsetHeight : 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    };

    if (wasMenuOpen) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          performScroll();
        });
      });
    } else {
      performScroll();
    }
  };

  // Match in-page hash links (buttons/text) to the same header-offset scroll as the nav
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const sectionId = href.slice(1);
      const element = document.getElementById(sectionId);
      if (!element) return;

      event.preventDefault();

      const nav = document.querySelector('nav');
      const navHeight = nav ? nav.offsetHeight : 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] bg-slate-900/95 backdrop-blur-md border-b transition-colors duration-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3),0_2px_4px_-1px_rgba(0,0,0,0.2)] ${
      isScrolled ? 'border-white' : 'border-slate-700/50'
    }`} style={{ transform: 'translateZ(0)', WebkitTransform: 'translateZ(0)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section - Left */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center focus:outline-none cursor-pointer text-[#89CFF0] hover:text-white transition-colors duration-200"
              aria-label="Go to home"
            >
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12"
                viewBox="0 0 109 129"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M73 33H24.0927C15.205 33 8 40.205 8 49.0927V49.0927C8 57.9805 15.205 65.1854 24.0927 65.1854H59.0927C66.7735 65.1854 73 71.4119 73 79.0927V79.0927C73 86.7735 66.7735 93 59.0927 93H8"
                  stroke="currentColor"
                  strokeWidth="15"
                />
                <path
                  d="M27 8H72.5C88.2401 8 101 20.7599 101 36.5V36.5C101 52.2401 88.2401 65 72.5 65H27"
                  stroke="currentColor"
                  strokeWidth="15"
                />
                <path
                  d="M28 65H73C88.464 65 101 77.536 101 93V93C101 108.464 88.464 121 73 121H28"
                  stroke="currentColor"
                  strokeWidth="15"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center space-x-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-2.5 py-2 text-base font-medium transition-colors duration-200 cursor-pointer ${
                  activeSection === section.id
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation - Right */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`menu-toggle p-2 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer ${
                isMobileMenuOpen ? 'is-open' : ''
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="menu-toggle-box" aria-hidden="true">
                <span className="menu-toggle-line" />
                <span className="menu-toggle-line" />
                <span className="menu-toggle-line" />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-700/50">
            <div className="flex flex-col space-y-1 pt-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-3 text-right text-lg font-medium rounded-sm transition-colors duration-200 cursor-pointer ${
                    activeSection === section.id
                      ? 'text-cyan-400 bg-slate-800/50'
                      : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/30'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
