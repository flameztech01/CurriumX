import React from 'react';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Academic Support Web Platform",
      category: "Web Development",
      description: "A full-stack web application for managing research projects and student services.",
      image: "/project1.jpg", // You'll need to add these images
      tags: ["React", "Node.js", "MongoDB"],
      color: "from-[#6A0DAD] to-[#4B0082]"
    },
    {
      id: 2,
      title: "Business Landing Page System",
      category: "Web Design",
      description: "High-converting marketing site built for ad campaigns with analytics integration.",
      image: "/project2.jpg",
      tags: ["Next.js", "Tailwind CSS", "Analytics"],
      color: "from-[#4B0082] to-[#5A189A]"
    },
    {
      id: 3,
      title: "Brand Identity & Typography System",
      category: "Brand Design",
      description: "Designed scalable brand visuals and custom typography guidelines.",
      image: "/project3.jpg",
      tags: ["Typography", "Branding", "Design Systems"],
      color: "from-[#5A189A] to-[#7B2CBF]"
    }
  ];

  return (
    <section id="work" className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#6A0DAD]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-[#4B0082]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#6A0DAD] font-semibold text-sm uppercase tracking-wider mb-2 block">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] bg-clip-text text-transparent">
              Selected Work
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-[#6E6E6E] max-w-2xl mx-auto">
            A glimpse into products we've designed and built.
          </p>
        </div>

        {/* Projects Grid - Alternating Layout */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image Column */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4B0082]/80 to-[#6A0DAD]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="text-white font-semibold flex items-center gap-2 text-lg">
                        View Case Study <FiExternalLink />
                      </span>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${project.color} rounded-full blur-xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>
              </div>

              {/* Content Column */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-4">
                  {/* Category */}
                  <span className="text-[#6A0DAD] font-semibold text-sm uppercase tracking-wider">
                    {project.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-[#4B0082]">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#6E6E6E] text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#F2F2F2] text-[#6E6E6E] rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Project Link */}
                  <a
                    href={`#project-${project.id}`}
                    className="inline-flex items-center gap-2 text-[#6A0DAD] hover:text-[#4B0082] font-semibold transition-colors duration-300 group/link mt-4"
                  >
                    View Project Details
                    <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alternative Card Grid Design (commented out - you can use this instead if you prefer cards) */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#F2F2F2]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4B0082] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white text-sm font-medium px-3 py-1 bg-[#6A0DAD] rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#4B0082] mb-2">{project.title}</h3>
                <p className="text-[#6E6E6E] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs text-[#6E6E6E] bg-[#F2F2F2] px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`#project-${project.id}`}
                  className="inline-flex items-center gap-2 text-[#6A0DAD] hover:text-[#4B0082] font-medium transition-colors duration-300"
                >
                  View Project <FiArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div> */}

        {/* CTA Button */}
        <div className="text-center mt-20">
          <a
            href="#portfolio"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] text-white font-semibold rounded-lg text-lg overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Full Portfolio
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;