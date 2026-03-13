
import {
  FiCode,
  FiSmartphone,
  FiPenTool,
  FiType,
  FiLayers,
  FiUsers
} from 'react-icons/fi';

const Services: React.FC = () => {
  const services = [
    {
      number: '01',
      icon: <FiCode className="w-6 h-6" />,
      title: 'Web Development',
      description: 'Modern, responsive websites built for performance and conversion.'
    },
    {
      number: '02',
      icon: <FiSmartphone className="w-6 h-6" />,
      title: 'Mobile App Development',
      description: 'iOS & Android apps built for usability and scalability.'
    },
    {
      number: '03',
      icon: <FiPenTool className="w-6 h-6" />,
      title: 'Product Design (UI/UX)',
      description: 'Clean interfaces, smooth experiences, and strategy-driven design.'
    },
    {
      number: '04',
      icon: <FiType className="w-6 h-6" />,
      title: 'Typography & Brand Systems',
      description: 'Custom type styling, brand structure, and visual clarity.'
    },
    {
      number: '05',
      icon: <FiLayers className="w-6 h-6" />,
      title: 'SaaS & Web Applications',
      description: 'Dashboards, admin panels, portals, and scalable systems.'
    },
    {
      number: '06',
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Technical Consulting',
      description: 'Helping teams structure products, architecture, and growth strategy.'
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-[#ffffff] overflow-hidden">
      {/* soft background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #6A0DAD 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#F28C38]"></span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-[#6A0DAD]">
              Our Services
            </span>
            <span className="w-8 h-[2px] bg-[#F28C38]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4B0082] mb-4">
            Explore Our Digital Services
          </h2>

          <p className="text-[#6E6E6E] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We create modern digital solutions that help brands grow, connect with users,
            and build strong online presence.
          </p>
        </div>

        {/* Services cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <div
              key={service.number}
              className="group bg-white rounded-2xl border border-[#ECECEC] shadow-sm hover:shadow-xl transition-all duration-300 p-7"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-full bg-[#F5EEFF] flex items-center justify-center text-[#4B0082] group-hover:bg-gradient-to-br group-hover:from-[#6A0DAD] group-hover:to-[#4B0082] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>

                <span className="text-sm font-bold text-[#D6D6D6] group-hover:text-[#F28C38] transition-colors duration-300">
                  {service.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#2F2F2F] mb-3 group-hover:text-[#4B0082] transition-colors">
                {service.title}
              </h3>

              <p className="text-[#6E6E6E] leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-[#F8F8FC] rounded-3xl border border-[#EEEEF5] px-6 md:px-10 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#4B0082]">50+</h3>
              <p className="text-sm text-[#6E6E6E] mt-2">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#4B0082]">30+</h3>
              <p className="text-sm text-[#6E6E6E] mt-2">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#4B0082]">5+</h3>
              <p className="text-sm text-[#6E6E6E] mt-2">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#4B0082]">15+</h3>
              <p className="text-sm text-[#6E6E6E] mt-2">Team Members</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;