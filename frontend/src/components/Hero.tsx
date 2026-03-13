
import { FiSend, FiEye } from 'react-icons/fi';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
          <span className="text-white text-sm tracking-wider">
            POWERED BY INNOVATION
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
          We Build{" "}
          <span className="bg-gradient-to-r from-[#C0C0C0] to-white bg-clip-text text-transparent">
            Digital Products
          </span>
          <br />
          That{" "}
          <span className="bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] bg-clip-text text-transparent">
            Move Ideas Forward
          </span>
        </h1>

        {/* Sub text */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Websites. Apps. Product Design. Branding.  
          We turn concepts into scalable, user-focused digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <FiSend />
            Start a Project
          </a>

          <a
            href="#our-work"
            className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:-translate-y-1 transition-all"
          >
            <FiEye />
            View Our Work
          </a>

        </div>

        {/* Trust text */}
        <div className="mt-14 text-gray-400 text-sm tracking-wide">
          Helping startups, brands and creators build strong digital presence.
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0b1e] to-transparent"></div>
    </section>
  );
};

export default Hero;