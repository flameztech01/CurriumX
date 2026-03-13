

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#F28C38]"></span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-[#6A0DAD]">
              About CurriumX
            </span>
            <span className="w-8 h-[2px] bg-[#F28C38]"></span>
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
          <div className="bg-[#F8F8FC] border border-[#EEEEF5] rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#4B0082] mb-6 leading-tight">
              A tech-driven digital solutions brand focused on impact.
            </h3>

            <div className="space-y-5 text-[#6E6E6E] text-base md:text-lg leading-relaxed">
              <p>
                CurriumX combines development, design, and strategic thinking to create
                products that help brands grow and connect better with their audience.
              </p>

              <p>
                We believe in clarity, performance, usability, and long-term value.
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
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-[#ECECEC] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-[#4B0082] mb-4">
                Our Philosophy
              </h3>
              <p className="text-[#6E6E6E] leading-relaxed">
                Every line of code, every visual element, and every user interaction is
                created with purpose. We do not just build digital products — we craft
                experiences that feel modern, useful, and aligned with business goals.
              </p>
            </div>

            {/* <div className="grid grid-cols-2 gap-5">
              <div className="bg-[#F8F8FC] border border-[#EEEEF5] rounded-2xl p-6 text-center">
                <h4 className="text-3xl md:text-4xl font-bold text-[#4B0082]">10+</h4>
                <p className="text-sm text-[#6E6E6E] mt-2">Projects Completed</p>
              </div>

              <div className="bg-[#F8F8FC] border border-[#EEEEF5] rounded-2xl p-6 text-center">
                <h4 className="text-3xl md:text-4xl font-bold text-[#4B0082]">6+</h4>
                <p className="text-sm text-[#6E6E6E] mt-2">Happy Clients</p>
              </div>

              <div className="bg-[#F8F8FC] border border-[#EEEEF5] rounded-2xl p-6 text-center">
                <h4 className="text-3xl md:text-4xl font-bold text-[#4B0082]">2+</h4>
                <p className="text-sm text-[#6E6E6E] mt-2">Years Experience</p>
              </div>

              <div className="bg-[#F8F8FC] border border-[#EEEEF5] rounded-2xl p-6 text-center">
                <h4 className="text-3xl md:text-4xl font-bold text-[#4B0082]">100%</h4>
                <p className="text-sm text-[#6E6E6E] mt-2">Focused on Quality</p>
              </div>
            </div> */}
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