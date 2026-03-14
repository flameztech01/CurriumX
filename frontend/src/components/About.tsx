const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-28 bg-[#f8f8fc] overflow-hidden">
      {/* subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #6A0DAD 1px, transparent 0)",
            backgroundSize: "34px 34px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#C0C0C0]"></span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-[#6A0DAD]">
              About CurriumX
            </span>
            <span className="w-8 h-[2px] bg-[#C0C0C0]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4B0082] mb-4">
            Who We Are
          </h2>

          <p className="text-[#6E6E6E] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We build digital experiences that are functional, scalable, and visually refined.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Left side */}
          <div className="bg-white border border-[#ECECEC] rounded-[28px] p-8 md:p-10 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-[#4B0082] mb-6 leading-tight">
              A tech driven digital solutions brand focused on impact.
            </h3>

            <div className="space-y-5 text-[#6E6E6E] text-base md:text-lg leading-relaxed">
              <p>
                CurriumX combines development, design, and strategic thinking to create
                products that help brands grow and connect better with their audience.
              </p>

              <p>
                We believe in clarity, performance, usability, and long term value.
                Every product we build is designed to solve real problems and deliver
                meaningful results.
              </p>

              <p>
                From websites and mobile apps to scalable web platforms and brand systems,
                our goal is to turn ideas into polished digital experiences.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#6A0DAD] hover:bg-[#4B0082] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Let&apos;s Work Together
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-[#11131A] rounded-[28px] p-8 md:p-9 shadow-sm overflow-hidden relative">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#6A0DAD] via-[#7b2be0] to-[#C0C0C0]"></div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Our Philosophy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Every line of code, every visual element, and every user interaction is
                created with purpose. We do not just build digital products, we craft
                experiences that feel modern, useful, and aligned with business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white border border-[#ECECEC] rounded-[28px] p-7 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#F3EBFF] flex items-center justify-center mb-5">
                  <div className="w-5 h-5 rounded-full bg-[#6A0DAD]"></div>
                </div>
                <h3 className="text-xl font-bold text-[#4B0082] mb-3">Our Mission</h3>
                <p className="text-[#6E6E6E] leading-relaxed">
                  To help startups, creators, and organizations transform their ideas
                  into powerful digital products that are scalable, reliable, and built
                  for real world impact.
                </p>
              </div>

              <div className="bg-white border border-[#ECECEC] rounded-[28px] p-7 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#F3EBFF] flex items-center justify-center mb-5">
                  <div className="w-5 h-5 rounded-full bg-[#C0C0C0]"></div>
                </div>
                <h3 className="text-xl font-bold text-[#4B0082] mb-3">Our Vision</h3>
                <p className="text-[#6E6E6E] leading-relaxed">
                  To become a trusted technology partner for businesses across the world,
                  known for building modern digital solutions that combine creativity,
                  performance, and strategic thinking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl italic text-[#4B0082]">
            “Building digital products that stand the test of time.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;