import { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 10);

      const sections = ['home', 'services', 'our-work', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Our Work', id: 'our-work' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar - Hidden on mobile, visible on large screens */}
      <div className="hidden lg:block bg-[#4B0082] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4 lg:gap-6">
            <span className="text-xs lg:text-sm">Creative Digital Solutions</span>
            <span className="text-white/70 hidden sm:inline">|</span>
            <span className="text-xs lg:text-sm hidden sm:inline">Branding • Web Development • Design</span>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white/90 hover:text-white transition-colors text-xs lg:text-sm whitespace-nowrap"
          >
            Let’s Work Together
          </button>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px] sm:h-[76px] lg:h-[82px]">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 focus:outline-none"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-gradient-to-br from-[#4B0082] to-[#6A0DAD] flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-base sm:text-lg">C</span>
              </div>

              <div className="text-left leading-tight">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight">
                  <span className="text-[#4B0082]">Currium</span>
                  <span className="text-[#6A0DAD]">X</span>
                </h1>
                <p className="text-[8px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gray-400">
                  Digital Agency
                </p>
              </div>
            </button>

            {/* Desktop Nav - Hidden on mobile/tablet, visible on desktop */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 xl:px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-[#6A0DAD] bg-[#F5EEFF]'
                      : 'text-[#444] hover:text-[#6A0DAD] hover:bg-[#F8F5FC]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA + Mobile Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Desktop CTA - Hidden on mobile, visible on tablet and up */}
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden sm:inline-flex items-center justify-center bg-[#F28C38] hover:bg-[#dd7c2d] text-white font-semibold px-4 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm lg:text-base whitespace-nowrap"
              >
                Start a Project
              </button>

              {/* Mobile Menu Button - Visible on mobile/tablet, hidden on desktop */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-gray-200 text-[#4B0082] hover:bg-[#F8F5FC] transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu - Visible on mobile/tablet, hidden on desktop */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 sm:pb-5">
              <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
                <div className="px-4 py-2.5 sm:py-3 border-b border-gray-100 bg-[#FAF7FF]">
                  <p className="text-sm font-semibold text-[#4B0082]">
                    CurriumX Menu
                  </p>
                </div>

                <div className="flex flex-col">
                  {navItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left px-4 sm:px-5 py-3.5 sm:py-4 font-medium transition-colors text-sm sm:text-base ${
                        activeSection === item.id
                          ? 'text-[#6A0DAD] bg-[#F5EEFF]'
                          : 'text-[#444] hover:bg-[#F8F5FC] hover:text-[#6A0DAD]'
                      } ${
                        index !== navItems.length - 1
                          ? 'border-b border-gray-100'
                          : ''
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}

                  {/* Mobile CTA - Only shown in mobile menu */}
                  <div className="p-4 bg-white">
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="w-full bg-[#F28C38] hover:bg-[#dd7c2d] text-white font-semibold px-5 py-3.5 rounded-xl transition-all text-sm sm:text-base"
                    >
                      Start a Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;