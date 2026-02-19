

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-6 bg-[#F9F9F9] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Decorative line */}
        <div className="absolute left-0 top-0 w-32 h-32 border-l-4 border-t-4 border-[#6A0DAD]/20 rounded-tl-3xl"></div>
        <div className="absolute right-0 bottom-0 w-32 h-32 border-r-4 border-b-4 border-[#6A0DAD]/20 rounded-br-3xl"></div>

        <div className="text-center mb-16">
          {/* Section Header */}
          <span className="text-[#6A0DAD] font-semibold text-sm uppercase tracking-wider mb-2 block">
            About CurriumX
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#4B0082]">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <p className="text-lg text-[#6E6E6E] leading-relaxed">
              CurriumX is a tech-driven digital solutions brand focused on building 
              impactful digital experiences. We combine development, design, and 
              strategic thinking to create products that are functional, scalable, 
              and visually refined.
            </p>
            
            <p className="text-lg text-[#6E6E6E] leading-relaxed">
              We believe in clarity, performance, and long-term value.
            </p>

            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-[#6A0DAD] hover:text-[#4B0082] font-semibold transition-colors duration-300 group"
              >
                Let's work together
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Values/Principles */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#F2F2F2]">
              <h3 className="text-xl font-bold text-[#4B0082] mb-3">Our Philosophy</h3>
              <p className="text-[#6E6E6E]">
                Every line of code, every pixel, and every interaction is crafted with 
                intention. We don't just build products — we build experiences that 
                resonate with users and drive real business results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-md text-center">
                <div className="text-3xl font-bold text-[#6A0DAD] mb-1">50+</div>
                <div className="text-xs text-[#6E6E6E]">Projects</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md text-center">
                <div className="text-3xl font-bold text-[#6A0DAD] mb-1">30+</div>
                <div className="text-xs text-[#6E6E6E]">Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center">
          <p className="text-lg text-[#4B0082] italic">
            "Building digital products that stand the test of time."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;