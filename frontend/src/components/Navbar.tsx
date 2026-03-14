import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "services", "our-work", "about", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const { offsetTop, offsetHeight } = el;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (!el) return;

    const offset = 85;

    const y =
      el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Our Work", id: "our-work" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* Top Bar */}
      <div className="hidden lg:block bg-[#1E1B2E] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between text-sm">

          <span className="text-gray-300">
            Powering Possibilities Through Technology
          </span>

          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-300 hover:text-white transition"
          >
            Let’s Talk
          </button>

        </div>
      </div>

      {/* Main Navbar */}

      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between h-[80px]">

            {/* Logo */}

            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3"
            >
              <img
                src="/logo.png"
                className="h-10"
                alt="CurriumX"
              />

              <div className="leading-tight">
                <h1 className="text-xl font-bold">
                  <span className="text-[#5B21B6]">Currium</span>
                  <span className="text-gray-400">X</span>
                </h1>

                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
                  Digital Agency
                </p>
              </div>
            </button>

            {/* Desktop Menu */}

            <div className="hidden lg:flex items-center gap-2">

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 font-medium transition ${
                    activeSection === item.id
                      ? "text-[#5B21B6]"
                      : "text-gray-700 hover:text-[#5B21B6]"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-[#5B21B6] transition-all ${
                      activeSection === item.id
                        ? "w-full"
                        : "w-0"
                    }`}
                  />
                </button>
              ))}

            </div>

            {/* CTA */}

            <div className="flex items-center gap-3">

              <button
                onClick={() => scrollToSection("contact")}
                className="hidden sm:inline-flex items-center justify-center bg-[#5B21B6] hover:bg-[#4B0082] text-white font-semibold px-6 py-3 transition shadow"
              >
                Start Project
              </button>

              {/* Mobile Button */}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 border rounded-md"
              >
                ☰
              </button>

            </div>

          </div>

          {/* Mobile Menu */}

          {mobileMenuOpen && (
            <div className="lg:hidden pb-4">

              <div className="border rounded-lg shadow-lg overflow-hidden">

                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-5 py-4 border-b hover:bg-gray-50"
                  >
                    {item.name}
                  </button>
                ))}

              </div>

            </div>
          )}

        </div>
      </nav>

    </header>
  );
};

export default Navbar;