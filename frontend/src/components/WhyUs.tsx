import {
  FiTarget,
  FiZap,
  FiCode,
  FiTrendingUp,
  FiCpu,
  FiCheckCircle,
} from "react-icons/fi";

const WhyUs: React.FC = () => {
  const reasons = [
    {
      number: "01",
      icon: <FiTarget className="w-6 h-6" />,
      title: "Strategy Before Design",
      description:
        "We start with research and planning so every design decision has direction, purpose, and measurable impact.",
    },
    {
      number: "02",
      icon: <FiZap className="w-6 h-6" />,
      title: "Performance Driven Development",
      description:
        "Fast loading pages, optimized structure, and smooth interactions that improve user experience and trust.",
    },
    {
      number: "03",
      icon: <FiCode className="w-6 h-6" />,
      title: "Clean and Scalable Code",
      description:
        "We build maintainable systems with clean architecture, making future updates and growth easier.",
    },
    {
      number: "04",
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Conversion Focused Structure",
      description:
        "Every section is arranged to guide users clearly toward engagement, trust, and meaningful business action.",
    },
    {
      number: "05",
      icon: <FiCpu className="w-6 h-6" />,
      title: "Long Term Product Thinking",
      description:
        "We build with the future in mind, helping your product stay useful, adaptable, and competitive over time.",
    },
    {
      number: "06",
      icon: <FiCheckCircle className="w-6 h-6" />,
      title: "Reliable Delivery and Support",
      description:
        "We stay focused on quality delivery, clear communication, and dependable support throughout the project journey.",
    },
  ];

  const stats = [
    { number: "100%", label: "Client Satisfaction" },
    { number: "10+", label: "Projects Launched" },
    { number: "2+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section
      id="why-us"
      className="relative py-24 md:py-28 bg-[#11131A] overflow-hidden"
    >
      {/* subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)",
            backgroundSize: "34px 34px",
          }}
        />
      </div>

      {/* soft glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#6A0DAD]/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-gray-400 block mb-4">
            Why Choose CurriumX
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built With Strategy,
            <br className="hidden sm:block" /> Designed For Results
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We combine product thinking, modern design, and strong development
            standards to create digital solutions that are useful, scalable, and
            built for long term value.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7 mb-12">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm hover:bg-white/10 hover:border-[#6A0DAD]/40 transition-all duration-300"
            >
              <span className="absolute top-6 right-6 text-sm font-bold text-white/20 group-hover:text-[#C0C0C0] transition-colors duration-300">
                {reason.number}
              </span>

              <div className="w-14 h-14 rounded-xl bg-[#1B1E28] border border-white/10 flex items-center justify-center text-[#C0C0C0] group-hover:bg-gradient-to-br group-hover:from-[#6A0DAD] group-hover:to-[#4B0082] group-hover:text-white transition-all duration-300 mb-6">
                {reason.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C0C0C0] transition-colors duration-300">
                {reason.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {reason.description}
              </p>

              <div className="mt-6 w-12 h-[2px] bg-[#6A0DAD] group-hover:w-20 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-7">
          {/* Quote block */}
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#6A0DAD] via-[#7b2be0] to-[#C0C0C0]" />

            <div className="w-14 h-14 rounded-xl bg-[#1B1E28] border border-white/10 flex items-center justify-center text-[#C0C0C0] mb-6">
              <FiCheckCircle className="w-6 h-6" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
              We do not just build digital products, we build with purpose.
            </h3>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
              Every decision, from structure to interface to performance, is made
              to help your brand communicate better, grow stronger, and deliver
              a better user experience.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 text-center backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {stat.number}
                </h3>
                <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;