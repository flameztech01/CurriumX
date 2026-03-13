import { FiSend, FiEye } from 'react-icons/fi';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/image1.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0b1e]/90 via-[#1a1b3a]/80 to-[#2a1b4a]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Badge */}
        <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
          <span className="text-white text-xs sm:text-sm tracking-wider">
            POWERED BY INNOVATION
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
          We Build{" "}
          <span className="bg-gradient-to-r from-[#C0C0C0] to-white bg-clip-text text-transparent block sm:inline">
            Digital Products
          </span>
          <br className="hidden sm:block" />
          That{" "}
          <span className="bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] bg-clip-text text-transparent block sm:inline">
            Move Ideas Forward
          </span>
        </h1>

        {/* Sub text */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 px-2 sm:px-4">
          Websites. Apps. Product Design. Branding.  
          We turn concepts into scalable, user-focused digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-sm sm:text-base"
          >
            <FiSend className="text-base sm:text-lg" />
            Start a Project
          </a>

          <a
            href="#our-work"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:-translate-y-1 transition-all text-sm sm:text-base"
          >
            <FiEye className="text-base sm:text-lg" />
            View Our Work
          </a>
        </div>

        {/* Trust text */}
        <div className="mt-8 sm:mt-10 md:mt-14 text-gray-400 text-xs sm:text-sm tracking-wide px-4">
          Helping startups, brands and creators build strong digital presence.
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-[#0a0b1e] to-transparent"></div>
    </section>
  );
};

export default Hero;