import React from 'react';
import { FiSend, FiEye, FiCpu, FiZap } from 'react-icons/fi';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Tech-inspired Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Simple grid pattern using CSS instead of inline SVG */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #666 1px, transparent 1px),
              linear-gradient(to bottom, #666 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        {/* Animated circuit lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4B0082" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#C0C0C0" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6A0DAD" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path d="M0 200 L200 200 L400 100 L600 300 L800 150" stroke="url(#line-gradient)" strokeWidth="2" fill="none" className="animate-pulse" />
            <path d="M1000 400 L800 300 L600 450 L400 350 L200 400" stroke="url(#line-gradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
          </svg>
        </div>

        {/* Cool gradient overlay with tech vibe */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0b1e] via-[#1a1b3a] to-[#2a1b4a] opacity-95"></div>
        
        {/* Glowing orbs for tech atmosphere */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#6A0DAD] rounded-full filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#4B0082] rounded-full filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Binary rain effect */}
        <div className="absolute inset-0 opacity-10 text-[#00ff9d] font-mono text-xs overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="absolute whitespace-nowrap animate-float" style={{ left: `${i * 5}%`, animationDuration: `${15 + i}s` }}>
              01001110 01100101 01110101 01110010 01101111 01101110
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
        {/* Tech badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
          <FiZap className="text-[#C0C0C0] animate-pulse" />
          <span className="text-sm text-white/80 tracking-wider">POWERED BY INNOVATION</span>
        </div>

        {/* Headline with tech animation */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="inline-block animate-glow">We Build</span>{' '}
          <span className="bg-gradient-to-r from-[#C0C0C0] via-white to-[#C0C0C0] bg-clip-text text-transparent relative">
            Digital Products
            <FiCpu className="absolute -top-6 -right-8 text-[#6A0DAD] text-2xl animate-spin-slow hidden md:block" />
          </span>{' '}
          <br />
          <span className="inline-block animate-glow" style={{ animationDelay: '0.3s' }}>That</span>{' '}
          <span className="bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] bg-clip-text text-transparent">
            Move Ideas Forward
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-[#B0B0B0] mb-8 max-w-3xl mx-auto leading-relaxed">
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
            className="group relative px-8 py-4 bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] text-white font-semibold rounded-lg text-lg overflow-hidden shadow-[0_0_20px_rgba(106,13,173,0.3)] hover:shadow-[0_0_30px_rgba(106,13,173,0.5)] transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto border border-white/10"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <FiSend className="text-xl group-hover:rotate-12 transition-transform" />
              Start a Project
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </a>
          
          <a 
            href="#work" 
            className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg text-lg overflow-hidden hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto shadow-[0_0_15px_rgba(192,192,192,0.1)]"
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
          <p className="text-[#A0A0A0] text-sm md:text-base font-light tracking-wide">
            <span className="text-white/60">[</span> Helping brands, startups, and creators build strong digital presence. <span className="text-white/60">]</span>
          </p>
        </div>

        {/* Tech stats */}
        <div className="mt-12 flex justify-center gap-8 text-white/40 text-xs font-mono">
          <span className="flex items-center gap-1">
            <span className="text-[#C0C0C0]">0x01</span> 100+ Projects
          </span>
          <span className="flex items-center gap-1">
            <span className="text-[#C0C0C0]">0x02</span> 50+ Clients
          </span>
          <span className="flex items-center gap-1">
            <span className="text-[#C0C0C0]">0x03</span> 5 Years
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a href="#services" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-colors duration-300">
            <span className="text-xs uppercase tracking-wider font-mono">_SCROLL</span>
            <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center backdrop-blur-sm">
              <div className="w-1 h-2 bg-gradient-to-b from-[#C0C0C0] to-[#6A0DAD] rounded-full mt-2 animate-bounce"></div>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0b1e] to-transparent"></div>

      <style>{`
        @keyframes glow {
          0%, 100% { opacity: 1; text-shadow: 0 0 10px rgba(192,192,192,0.5); }
          50% { opacity: 0.9; text-shadow: 0 0 20px rgba(106,13,173,0.8); }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        @keyframes float {
          0% { transform: translateY(100vh); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        .animate-float {
          animation: float 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;