
import { 
  FiTarget, 
  FiZap, 
  FiCode, 
  FiTrendingUp, 
  FiCpu,
  FiCheckCircle 
} from 'react-icons/fi';

const WhyUs: React.FC = () => {
  const reasons = [
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: "Strategy Before Design",
      description: "We start with research and planning to ensure every design decision has purpose and drives results."
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: "Performance-Driven Development",
      description: "Fast loading times, optimized code, and smooth interactions that users and search engines love."
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Clean & Scalable Code",
      description: "Well-documented, maintainable code that grows with your business without technical debt."
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Conversion-Focused Structure",
      description: "Every element is designed to guide users toward meaningful actions and business goals."
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: "Long-Term Product Thinking",
      description: "We build for tomorrow, ensuring your product evolves with market needs and technology."
    }
  ];

  return (
    <section id="why-us" className="relative py-24 px-6 bg-gradient-to-br from-[#4B0082] to-[#6A0DAD] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#F2F2F2] font-semibold text-sm uppercase tracking-wider mb-2 block">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Why <span className="text-[#C0C0C0]">Currium</span>
            <span className="text-white">X</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C0C0C0] to-white mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-[#F2F2F2] max-w-2xl mx-auto">
            We combine strategic thinking with technical excellence to deliver exceptional results.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/20 hover:border-white/30"
            >
              {/* Icon with glow effect */}
              <div className="relative mb-6 inline-block">
                <div className="text-white text-3xl group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <div className="absolute -inset-2 bg-white/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C0C0C0] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-[#F2F2F2] text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                {reason.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-white/20 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}

          {/* Special card for the last point or emphasis */}
          <div className="lg:col-span-3 mt-6">
            <div className="relative bg-gradient-to-r from-[#5A189A] to-[#7B2CBF] rounded-2xl p-8 text-center overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <FiCheckCircle className="w-12 h-12 text-white/80 mx-auto mb-4" />
                <p className="text-2xl md:text-3xl font-light text-white italic">
                  "We don't just build. We build with purpose."
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-[#C0C0C0] to-white mx-auto mt-4 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats/Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "100%", label: "Client Satisfaction" },
            { number: "50+", label: "Projects Launched" },
            { number: "5+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-xs text-[#F2F2F2] opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;