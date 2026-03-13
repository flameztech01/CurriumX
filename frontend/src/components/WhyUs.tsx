
import {
  FiTarget,
  FiZap,
  FiCode,
  FiTrendingUp,
  FiCpu,
  FiCheckCircle,
} from 'react-icons/fi';

const WhyUs: React.FC = () => {
  const reasons = [
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: 'Strategy Before Design',
      description:
        'We start with research and planning so every design decision has direction, purpose, and measurable impact.',
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: 'Performance-Driven Development',
      description:
        'Fast-loading pages, optimized structure, and smooth interactions that improve user experience and trust.',
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'Clean & Scalable Code',
      description:
        'We build maintainable systems with clean architecture, making future updates and growth easier.',
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: 'Conversion-Focused Structure',
      description:
        'Every section is arranged to guide users clearly toward engagement, trust, and meaningful business action.',
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: 'Long-Term Product Thinking',
      description:
        'We build with the future in mind, helping your product stay useful, adaptable, and competitive over time.',
    },
  ];

  const stats = [
    { number: '100%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Projects Launched' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <section
      id="why-us"
      className="relative py-24 bg-gradient-to-br from-[#4B0082] via-[#5A189A] to-[#6A0DAD] overflow-hidden"
    >
      {/* Soft background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.7) 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#F28C38]"></span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-white/90">
              Why Choose Us
            </span>
            <span className="w-8 h-[2px] bg-[#F28C38]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why <span className="text-[#F28C38]">CurriumX</span>?
          </h2>

          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We combine strategy, design, and development to create digital products
            that do more than look good — they perform.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-7 hover:bg-white/15 hover:border-white/25 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-[#F28C38] group-hover:text-white transition-all duration-300">
                {reason.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>

              <p className="text-white/75 leading-relaxed text-sm md:text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote card */}
        <div className="mt-10">
          <div className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-3xl p-8 md:p-10 text-center">
            <FiCheckCircle className="w-12 h-12 text-[#F28C38] mx-auto mb-4" />
            <p className="text-2xl md:text-3xl font-light italic text-white">
              “We don’t just build. We build with purpose.”
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {stat.number}
              </h3>
              <p className="text-sm text-white/75 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;