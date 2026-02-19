import React from 'react';
import { FiSend, FiEye } from 'react-icons/fi';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/image1.jpg" 
          alt="Digital workspace background" 
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4B0082]/90 via-[#5A189A]/80 to-[#6A0DAD]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
        {/* Headline with animation */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          We Build Digital Products That{' '}
          <span className="bg-gradient-to-r from-[#C0C0C0] to-white bg-clip-text text-transparent">
            Move Ideas Forward
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-[#F2F2F2] mb-8 max-w-3xl mx-auto leading-relaxed">
          Websites. Apps. Product Design. Typography.
          <br className="hidden md:block" />
          <span className="text-white font-light">
            {' '}We turn concepts into scalable, user-focused digital experiences.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="#start-project" 
            className="group relative px-8 py-4 bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] text-white font-semibold rounded-lg text-lg overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <FiSend className="text-xl group-hover:rotate-12 transition-transform" />
              Start a Project
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a 
            href="#work" 
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg text-lg overflow-hidden hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              <FiEye className="text-xl group-hover:scale-110 transition-transform" />
              View Our Work
            </span>
          </a>
        </div>

        {/* Trust Line */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-24 h-px bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent"></div>
          <p className="text-[#D9D9D9] text-sm md:text-base font-light tracking-wide">
            Helping brands, startups, and creators build strong digital presence.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a href="#services" className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <div className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#4B0082] to-transparent"></div>
    </section>
  );
};

export default Hero;