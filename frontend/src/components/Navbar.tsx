import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'our-work', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of your navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Our Work', id: 'our-work' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-4'
    } px-6`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - scrolls to top */}
        <button 
          onClick={() => scrollToSection('home')}
          className="flex-shrink-0 focus:outline-none"
        >
          <span className="text-2xl font-bold">
            <span className="text-[#4B0082]">Currium</span>
            <span className="text-[#6A0DAD]">X</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 font-medium ${
                activeSection === item.id
                  ? 'text-[#6A0DAD] bg-[#F2F2F2]'
                  : 'text-[#4B4B4B] hover:text-[#6A0DAD] hover:bg-[#F2F2F2]'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[#6A0DAD] hover:bg-[#4B0082] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Start a Project
          </button>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#4B4B4B] hover:text-[#6A0DAD] p-2 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="bg-white rounded-xl shadow-lg border border-[#F2F2F2] overflow-hidden">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 text-[#4B4B4B] hover:text-[#6A0DAD] hover:bg-[#F2F2F2] transition-colors ${
                  index !== navItems.length - 1 ? 'border-b border-[#F2F2F2]' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-4 py-3 bg-[#6A0DAD] text-white font-semibold text-center hover:bg-[#4B0082] transition-colors"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;