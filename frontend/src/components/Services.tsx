import {
  FiCode,
  FiSmartphone,
  FiPenTool,
  FiType,
  FiLayers,
  FiUsers,
} from "react-icons/fi";

const Services: React.FC = () => {
  const services = [
    {
      number: "01",
      icon: <FiCode className="w-6 h-6" />,
      title: "Web Development",
      description:
        "Modern, responsive websites built for performance, user experience, and conversion.",
    },
    {
      number: "02",
      icon: <FiSmartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      description:
        "iOS and Android applications designed for usability, speed, and scalability.",
    },
    {
      number: "03",
      icon: <FiPenTool className="w-6 h-6" />,
      title: "Product Design (UI/UX)",
      description:
        "Clean interfaces, smooth user journeys, and strategy-driven design systems.",
    },
    {
      number: "04",
      icon: <FiType className="w-6 h-6" />,
      title: "Typography & Brand Systems",
      description:
        "Strong visual identity, clear typography, and structured brand consistency.",
    },
    {
      number: "05",
      icon: <FiLayers className="w-6 h-6" />,
      title: "SaaS & Web Applications",
      description:
        "Dashboards, admin panels, portals, and scalable digital systems for growth.",
    },
    {
      number: "06",
      icon: <FiUsers className="w-6 h-6" />,
      title: "Technical Consulting",
      description:
        "Helping teams shape products, architecture, workflows, and growth strategy.",
    },
  ];

  return (
    <section
      id="services"
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
            Services We’re Providing
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            To Our Customers
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We deliver modern digital solutions that help brands build credibility,
            improve user experience, and grow with confidence online.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm hover:bg-white/10 hover:border-[#6A0DAD]/40 transition-all duration-300"
            >
              {/* number */}
              <span className="absolute top-6 right-6 text-sm font-bold text-white/20 group-hover:text-[#C0C0C0] transition-colors duration-300">
                {service.number}
              </span>

              {/* icon */}
              <div className="w-14 h-14 rounded-xl bg-[#1B1E28] border border-white/10 flex items-center justify-center text-[#C0C0C0] group-hover:bg-gradient-to-br group-hover:from-[#6A0DAD] group-hover:to-[#4B0082] group-hover:text-white transition-all duration-300 mb-6">
                {service.icon}
              </div>

              {/* title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C0C0C0] transition-colors duration-300">
                {service.title}
              </h3>

              {/* description */}
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>

              {/* bottom line */}
              <div className="mt-6 w-12 h-[2px] bg-[#6A0DAD] group-hover:w-20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;