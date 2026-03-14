import { useState } from "react";
import { FiArrowRight, FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useGetProjectsQuery } from "../slices/userApiSlice";

interface Project {
  _id?: string;
  id?: number | string;
  name?: string;
  title?: string;
  category?: string;
  description?: string;
  image?: string;
  technologies?: string[] | string;
  link?: string;
  githubLink?: string;
  status?: string;
  rolesAndContributions?: string[];
  coreFeatures?: string[];
  challengesAndSolutions?: string[];
  color?: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const {
    data: projects,
    isLoading,
    isError,
    error,
  } = useGetProjectsQuery({});

  const getCloudinaryImageUrl = (
    imageUrl?: string,
    options: {
      width?: number;
      height?: number;
      quality?: string;
      crop?: string;
    } = {}
  ): string => {
    if (!imageUrl) return "/placeholder-project.jpg";

    if (imageUrl.includes("cloudinary.com")) {
      const {
        width = 1200,
        height = 800,
        quality = "auto",
        crop = "fill",
      } = options;

      if (imageUrl.includes("/upload/")) {
        const parts = imageUrl.split("/upload/");
        if (parts.length === 2) {
          return `${parts[0]}/upload/c_${crop},w_${width},h_${height},q_${quality}/${parts[1]}`;
        }
      }

      return imageUrl;
    }

    if (!imageUrl.startsWith("http")) {
      const {
        width = 1200,
        height = 800,
        quality = "auto",
        crop = "fill",
      } = options;

      const cloudName =
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "your-cloud-name";

      const hasExtension = imageUrl.includes(".");
      const publicId = hasExtension ? imageUrl : `${imageUrl}.jpg`;

      return `https://res.cloudinary.com/${cloudName}/image/upload/c_${crop},w_${width},h_${height},q_${quality}/${publicId}`;
    }

    return imageUrl;
  };

  const getProjectTags = (project: Project): string[] => {
    if (!project.technologies) return [];

    if (Array.isArray(project.technologies)) {
      return project.technologies;
    }

    return project.technologies
      .split(",")
      .map((tech) => tech.trim())
      .filter(Boolean);
  };

  const displayedProjects = projects?.slice(0, 3) || [];

  const err = error as { data?: { message?: string } };

  return (
    <>
      <section id="our-work" className="py-24 bg-[#F8F8FC]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#C0C0C0]"></span>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-[#6A0DAD]">
                Our Portfolio
              </span>
              <span className="w-8 h-[2px] bg-[#C0C0C0]"></span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4B0082] mb-4">
              Featured Projects
            </h2>

            <p className="text-[#6E6E6E] text-base md:text-lg max-w-2xl mx-auto">
              A glimpse into products we’ve designed and built with strategy,
              performance, and user experience in mind.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#ECECEC] overflow-hidden shadow-sm"
                >
                  <div className="aspect-[16/10] bg-gray-200 animate-pulse"></div>
                  <div className="p-6">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-3"></div>
                    <div className="h-6 w-2/3 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse mb-5"></div>
                    <div className="flex gap-2 mb-5">
                      <div className="h-8 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                      <div className="h-8 w-20 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                    <div className="h-10 w-40 bg-gray-200 rounded-lg animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : isError ? (
            <div className="text-center py-12 max-w-md mx-auto bg-white rounded-2xl border border-[#ECECEC] shadow-sm">
              <p className="text-[#4B0082] text-lg font-semibold mb-2">
                Unable to load projects
              </p>
              <p className="text-[#6E6E6E] text-sm">
                {err?.data?.message || "Please check your connection and try again"}
              </p>
            </div>
          ) : displayedProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {displayedProjects.map((project: Project, index: number) => {
                  const tags = getProjectTags(project);

                  return (
                    <div
                      key={project._id || project.id || index}
                      className="group bg-white rounded-2xl border border-[#ECECEC] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={getCloudinaryImageUrl(project.image, {
                            width: 900,
                            height: 650,
                            quality: "auto:good",
                          })}
                          alt={project.name || project.title || "Project image"}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder-project.jpg";
                          }}
                        />

                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#4B0082] text-white shadow-sm">
                            {project.category || "Project"}
                          </span>

                          {project.status && (
                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-[#333] shadow-sm">
                              {project.status}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#2F2F2F] mb-3 group-hover:text-[#4B0082] transition-colors">
                          {project.name || project.title || "Untitled Project"}
                        </h3>

                        <p className="text-[#6E6E6E] text-sm md:text-base leading-relaxed mb-5">
                          {project.description
                            ? project.description.length > 110
                              ? `${project.description.slice(0, 110)}...`
                              : project.description
                            : "A modern digital project crafted with usability and performance in mind."}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-[#F5F5F8] text-[#6E6E6E] rounded-full text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 bg-[#6A0DAD] hover:bg-[#4B0082] text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300"
                        >
                          View Project
                          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center mt-16">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 bg-[#6A0DAD] hover:bg-[#4B0082] text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  View Full Portfolio
                  <FiArrowRight />
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12 max-w-md mx-auto bg-white rounded-2xl border border-[#ECECEC] shadow-sm">
              <p className="text-[#4B0082] text-lg font-semibold mb-2">
                No projects to display
              </p>
              <p className="text-[#6E6E6E] text-sm">New projects coming soon</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center text-[#333]"
              aria-label="Close modal"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Modal image */}
            <div className="relative h-[260px] sm:h-[320px] md:h-[380px] overflow-hidden rounded-t-2xl">
              <img
                src={getCloudinaryImageUrl(selectedProject.image, {
                  width: 1400,
                  height: 900,
                  quality: "auto:good",
                })}
                alt={selectedProject.name || "Project image"}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder-project.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#6A0DAD] text-white text-xs font-semibold">
                    {selectedProject.category || "Project"}
                  </span>

                  {selectedProject.status && (
                    <span className="px-3 py-1 rounded-full bg-white/90 text-[#333] text-xs font-semibold">
                      {selectedProject.status}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {selectedProject.name || selectedProject.title || "Untitled Project"}
                </h3>
              </div>
            </div>

            {/* Modal body */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main content */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-[#4B0082] mb-3">
                      Project Overview
                    </h4>
                    <p className="text-[#5F5F5F] leading-relaxed">
                      {selectedProject.description || "No description available."}
                    </p>
                  </div>

                  {selectedProject.coreFeatures &&
                    selectedProject.coreFeatures.length > 0 && (
                      <div>
                        <h4 className="text-xl font-bold text-[#4B0082] mb-3">
                          Core Features
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedProject.coreFeatures.map((feature, index) => (
                            <div
                              key={index}
                              className="bg-[#F8F8FC] border border-[#ECECEC] rounded-xl px-4 py-3 text-[#444]"
                            >
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {selectedProject.rolesAndContributions &&
                    selectedProject.rolesAndContributions.length > 0 && (
                      <div>
                        <h4 className="text-xl font-bold text-[#4B0082] mb-3">
                          Roles & Contributions
                        </h4>
                        <ul className="space-y-3">
                          {selectedProject.rolesAndContributions.map((role, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-[#555]"
                            >
                              <span className="mt-2 w-2 h-2 rounded-full bg-[#6A0DAD] shrink-0"></span>
                              <span>{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {selectedProject.challengesAndSolutions &&
                    selectedProject.challengesAndSolutions.length > 0 && (
                      <div>
                        <h4 className="text-xl font-bold text-[#4B0082] mb-3">
                          Challenges & Solutions
                        </h4>
                        <ul className="space-y-3">
                          {selectedProject.challengesAndSolutions.map(
                            (item, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3 text-[#555]"
                              >
                                <span className="mt-2 w-2 h-2 rounded-full bg-[#C0C0C0] shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="bg-[#F8F8FC] border border-[#ECECEC] rounded-2xl p-5">
                    <h4 className="text-lg font-bold text-[#4B0082] mb-4">
                      Project Details
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-400 mb-1">
                          Category
                        </p>
                        <p className="text-[#333] font-medium">
                          {selectedProject.category || "N/A"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-400 mb-1">
                          Status
                        </p>
                        <p className="text-[#333] font-medium">
                          {selectedProject.status || "N/A"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-400 mb-2">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {getProjectTags(selectedProject).length > 0 ? (
                            getProjectTags(selectedProject).map((tag, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-white border border-[#E4E4E8] text-[#5F5F5F] rounded-full text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))
                          ) : (
                            <span className="text-[#777] text-sm">No technologies listed</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#6A0DAD] hover:bg-[#4B0082] text-white font-semibold px-5 py-3 rounded-xl transition"
                      >
                        Visit Live Website
                        <FiExternalLink />
                      </a>
                    )}

                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 border border-[#D9D9E3] hover:bg-[#F8F8FC] text-[#333] font-semibold px-5 py-3 rounded-xl transition"
                      >
                        View GitHub
                        <FiGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* click outside closes modal */}
          <button
            className="absolute inset-0 -z-10 cursor-default"
            onClick={() => setSelectedProject(null)}
            aria-label="Close"
          />
        </div>
      )}
    </>
  );
};

export default Projects;