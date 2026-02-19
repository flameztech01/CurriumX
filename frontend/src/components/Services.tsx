import React from 'react';
import { 
  FiCode, 
  FiSmartphone, 
  FiPenTool, 
  FiType, 
  FiLayers, 
  FiUsers,
  FiArrowRight 
} from 'react-icons/fi';

const Services: React.FC = () => {
  const services = [
    {
      number: "01",
      icon: <FiCode className="w-6 h-6" />,
      title: "Web Development",
      description: "Modern, responsive websites built for performance and conversion."
    },
    {
      number: "02",
      icon: <FiSmartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      description: "iOS & Android apps built for usability and scalability."
    },
    {
      number: "03",
      icon: <FiPenTool className="w-6 h-6" />,
      title: "Product Design (UI/UX)",
      description: "Clean interfaces. Smooth experiences. Strategy-driven design."
    },
    {
      number: "04",
      icon: <FiType className="w-6 h-6" />,
      title: "Typography & Brand Systems",
      description: "Custom type styling, brand structure, and visual clarity."
    },
    {
      number: "05",
      icon: <FiLayers className="w-6 h-6" />,
      title: "SaaS & Web Applications",
      description: "Dashboards, admin panels, portals, and scalable systems."
    },
    {
      number: "06",
      icon: <FiUsers className="w-6 h-6" />,
      title: "Technical Consulting",
      description: "Helping teams structure products, architecture, and growth strategy."
    }
  ];

  return (
    <section id="services" className="relative py-24 px-6 bg-[#F9F9F9] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #6A0DAD 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#6A0DAD] font-semibold text-sm uppercase tracking-wider mb-2 block">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#4B0082]">
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-[#6E6E6E] max-w-2xl mx-auto">
            We design and develop digital solutions that solve real problems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-[#F2F2F2] hover:border-[#6A0DAD]/20 overflow-hidden"
            >
              {/* Number background */}
              <div className="absolute -right-4 -top-4 text-8xl font-bold text-[#F2F2F2] group-hover:text-[#6A0DAD]/5 transition-colors duration-500">
                {service.number}
              </div>

              {/* Icon with circle background */}
              <div className="relative z-10 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#6A0DAD] to-[#4B0082] text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-xl font-bold text-[#4B0082] mb-3 group-hover:text-[#6A0DAD] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative z-10 text-[#6E6E6E] leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Learn more link */}
              <a 
                href={`#service-${service.number}`} 
                className="relative z-10 inline-flex items-center gap-2 text-[#6A0DAD] hover:text-[#4B0082] font-medium text-sm transition-colors duration-300 group/link"
              >
                Learn More 
                <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
              </a>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#F2F2F2]">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#4B0082]">50+</div>
            <div className="text-sm text-[#6E6E6E] mt-1">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#4B0082]">30+</div>
            <div className="text-sm text-[#6E6E6E] mt-1">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#4B0082]">5+</div>
            <div className="text-sm text-[#6E6E6E] mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#4B0082]">15+</div>
            <div className="text-sm text-[#6E6E6E] mt-1">Team Members</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;