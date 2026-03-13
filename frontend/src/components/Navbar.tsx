import { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 10);

      const sections = ['home', 'services', 'our-work', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120;

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
      const offset = 90;
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
      {/* Top bar */}
      <div className="hidden lg:block bg-[#4B0082] text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <span>Creative Digital Solutions</span>
            <span className="text-white/70">|</span>
            <span>Branding • Web Development • Design</span>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white/90 hover:text-white transition-colors"
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[82px]">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 flex-shrink-0 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4B0082] to-[#6A0DAD] flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">C</span>
              </div>

              <div className="text-left leading-tight">
                <h1 className="text-xl font-extrabold tracking-tight">
                  <span className="text-[#4B0082]">Currium</span>
                  <span className="text-[#6A0DAD]">X</span>
                </h1>
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400">
                  Digital Agency
                </p>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
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
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden sm:inline-flex items-center justify-center bg-[#F28C38] hover:bg-[#dd7c2d] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Start a Project
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-xl border border-gray-200 text-[#4B0082] hover:bg-[#F8F5FC] transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
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

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-5">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-100 bg-[#FAF7FF]">
                  <p className="text-sm font-semibold text-[#4B0082]">
                    CurriumX Menu
                  </p>
                </div>

                <div className="flex flex-col">
                  {navItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left px-5 py-4 font-medium transition-colors ${
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

                  <div className="p-4 bg-white">
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="w-full bg-[#F28C38] hover:bg-[#dd7c2d] text-white font-semibold px-5 py-3 rounded-xl transition-all"
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