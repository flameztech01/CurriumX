import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiFolder,
  FiEye,
  FiClock,
  FiX,
} from 'react-icons/fi';
import { HiOutlineFire } from 'react-icons/hi';
import { useGetProjectsQuery } from '../slices/userApiSlice';

interface Project {
  _id?: string;
  id?: string | number;
  name?: string;
  title?: string;
  category?: string;
  description?: string;
  image?: string;
  technologies?: string[] | string;
  link?: string;
  github?: string;
  githubLink?: string;
  status?: string;
  createdAt?: string;
  date?: string;
  rolesAndContributions?: string[];
  coreFeatures?: string[];
  challengesAndSolutions?: string[];
  color?: string;
}

interface ApiError {
  data?: {
    message?: string;
  };
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
    if (!imageUrl) return '/placeholder-project.jpg';

    if (imageUrl.includes('cloudinary.com')) {
      const {
        width = 1200,
        height = 800,
        quality = 'auto',
        crop = 'fill',
      } = options;

      if (imageUrl.includes('/upload/')) {
        const parts = imageUrl.split('/upload/');
        if (parts.length === 2) {
          return `${parts[0]}/upload/c_${crop},w_${width},h_${height},q_${quality}/${parts[1]}`;
        }
      }

      return imageUrl;
    }

    if (!imageUrl.startsWith('http')) {
      const {
        width = 1200,
        height = 800,
        quality = 'auto',
        crop = 'fill',
      } = options;

      const cloudName =
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'your-cloud-name';

      const hasExtension = imageUrl.includes('.');
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
      .split(',')
      .map((tech) => tech.trim())
      .filter(Boolean);
  };

  const err = error as ApiError;
  const allProjects = projects || [];

  if (isLoading) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-white via-[#faf7ff] to-white py-20 px-4 sm:px-6 overflow-hidden relative">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6A0DAD]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#4B0082]/8 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#EADCF8] bg-white/80 text-[#4B0082] font-medium shadow-sm"
            >
              <FiArrowLeft />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6EEFF] text-[#6A0DAD] text-sm font-semibold mb-6">
              <FiFolder className="w-4 h-4" />
              Full Portfolio
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] bg-clip-text text-transparent">
                All Projects
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#6E6E6E] max-w-2xl mx-auto">
              A complete collection of projects built from the database.
            </p>
          </div>

          {/* Loading skeleton - updated for mobile 2 columns */}
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-[#EFE7F8] shadow-sm overflow-hidden"
              >
                <div className="h-36 xs:h-44 sm:h-56 md:h-64 bg-gray-200 animate-pulse"></div>
                <div className="p-3 sm:p-4 md:p-6">
                  <div className="h-3 sm:h-4 w-16 sm:w-20 bg-gray-200 rounded animate-pulse mb-2 sm:mb-3"></div>
                  <div className="h-4 sm:h-6 w-full bg-gray-200 rounded animate-pulse mb-1 sm:mb-2"></div>
                  <div className="h-4 sm:h-6 w-4/5 bg-gray-200 rounded animate-pulse mb-2 sm:mb-3"></div>
                  <div className="hidden sm:block h-3 w-full bg-gray-200 rounded animate-pulse mb-1"></div>
                  <div className="hidden sm:block h-3 w-5/6 bg-gray-200 rounded animate-pulse mb-3 sm:mb-4"></div>
                  <div className="flex gap-1 sm:gap-2 mb-3 sm:mb-4">
                    <div className="h-6 sm:h-7 w-12 sm:w-14 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="h-6 sm:h-7 w-14 sm:w-16 bg-gray-200 rounded-full animate-pulse"></div>
                  </div>
                  <div className="h-8 sm:h-9 w-full bg-gray-200 rounded-lg sm:rounded-xl animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-white via-[#faf7ff] to-white py-20 px-4 sm:px-6 overflow-hidden relative">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6A0DAD]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#4B0082]/8 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#EADCF8] bg-white/80 hover:bg-white text-[#4B0082] font-medium shadow-sm transition-all duration-300"
            >
              <FiArrowLeft />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6EEFF] text-[#6A0DAD] text-sm font-semibold mb-6">
              <FiFolder className="w-4 h-4" />
              Full Portfolio
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] bg-clip-text text-transparent">
                All Projects
              </span>
            </h1>
          </div>

          <div className="max-w-md mx-auto text-center bg-white rounded-3xl border border-[#EFE7F8] shadow-lg px-8 py-12">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#F6EEFF] flex items-center justify-center">
              <FiFolder className="w-8 h-8 text-[#6A0DAD]" />
            </div>
            <h3 className="text-2xl font-bold text-[#4B0082] mb-2">
              Unable to load projects
            </h3>
            <p className="text-[#6E6E6E]">
              {err?.data?.message || 'Please check your connection and try again.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-white via-[#faf7ff] to-white py-16 sm:py-20 px-4 sm:px-6 overflow-hidden relative">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6A0DAD]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#4B0082]/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] -translate-x-1/2 -translate-y-1/2 bg-[#7B2CBF]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 sm:mb-12">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-[#EADCF8] bg-white/80 hover:bg-white text-[#4B0082] font-medium shadow-sm hover:shadow-md transition-all duration-300 w-fit text-sm sm:text-base"
            >
              <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Home
            </Link>

            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#F6EEFF] text-[#6A0DAD] text-xs sm:text-sm font-semibold w-fit">
              <FiFolder className="w-3 h-3 sm:w-4 sm:h-4" />
              {allProjects.length} Project{allProjects.length !== 1 ? 's' : ''}
            </div>
          </div>

          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#6A0DAD] font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-2 sm:mb-3 block">
              Full Portfolio
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-5">
              <span className="bg-gradient-to-r from-[#4B0082] via-[#6A0DAD] to-[#7B2CBF] bg-clip-text text-transparent">
                All Projects
              </span>
            </h1>

            <div className="w-20 sm:w-24 md:w-28 h-1 bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] mx-auto rounded-full mb-4 sm:mb-6"></div>

            <p className="text-base sm:text-lg md:text-xl text-[#6E6E6E] max-w-3xl mx-auto leading-relaxed px-2">
              Explore the complete collection of projects, designs, and digital products
              built with creativity, strategy, and clean execution.
            </p>
          </div>

          {allProjects.length > 0 ? (
            // Updated grid for mobile: 2 columns, tablet: 2 columns, desktop: 3 columns
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {allProjects.map((project: Project, index: number) => {
                const tags = getProjectTags(project);
                const projectName = project.name || project.title || 'Untitled Project';

                return (
                  <div
                    key={project._id || project.id || index}
                    className="group relative bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl border border-[#EFE7F8] hover:border-[#DAC3F2] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#4B0082] via-[#6A0DAD] to-[#7B2CBF]"></div>

                    <div className="relative overflow-hidden">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={getCloudinaryImageUrl(project.image, {
                            width: 600,
                            height: 450,
                            quality: 'auto:good',
                          })}
                          alt={projectName}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder-project.jpg';
                          }}
                        />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-[#2E0B4F]/90 via-[#4B0082]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                        <span className="inline-flex items-center px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#4B0082] text-[10px] sm:text-xs font-semibold shadow-sm">
                          {project.category || 'Project'}
                        </span>
                      </div>

                      {project.status && project.status !== 'Completed' && (
                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                          <span
                            className={`inline-flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs font-semibold backdrop-blur-sm shadow-sm ${
                              project.status === 'In Progress'
                                ? 'bg-amber-50/95 text-amber-700'
                                : project.status === 'Planning'
                                ? 'bg-indigo-50/95 text-indigo-700'
                                : 'bg-slate-50/95 text-slate-700'
                            }`}
                          >
                            {project.status === 'In Progress' && (
                              <HiOutlineFire className="w-2 h-2 sm:w-3 sm:h-3" />
                            )}
                            <span className="hidden xs:inline">{project.status}</span>
                          </span>
                        </div>
                      )}

                      {/* Mobile view button - hidden on mobile, visible on hover on larger screens */}
                      <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 translate-y-2 sm:translate-y-4 opacity-100 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-500">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center justify-center w-full px-2 sm:px-3 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-white/95 backdrop-blur-sm text-[#4B0082] text-xs sm:text-sm font-semibold shadow-md hover:bg-white transition-all duration-300"
                        >
                          <span className="hidden xs:inline">View Details</span>
                          <span className="xs:hidden">Details</span>
                          <FiEye className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="p-2 sm:p-3 md:p-4 lg:p-6">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#4B0082] mb-1 sm:mb-2 line-clamp-1">
                        {projectName}
                      </h3>

                      {/* Description - hidden on smallest mobile, visible on sm and up */}
                      <p className="hidden sm:block text-xs sm:text-sm md:text-base text-[#6E6E6E] leading-relaxed mb-2 sm:mb-3 line-clamp-2 md:line-clamp-3">
                        {project.description || 'No description available.'}
                      </p>

                      {/* Tags - responsive sizing */}
                      {tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                          {tags.slice(0, 2).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 bg-[#F5F2FA] text-[#6E6E6E] rounded-full text-[8px] sm:text-xs font-medium truncate max-w-[70px] sm:max-w-none"
                            >
                              {tag}
                            </span>
                          ))}
                          {tags.length > 2 && (
                            <span className="text-[8px] sm:text-xs text-[#8A8A8A]">
                              +{tags.length - 2}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Action buttons - simplified for mobile */}
                      <div className="flex items-center justify-between gap-1 sm:gap-2 pt-1 sm:pt-2 md:pt-3 border-t border-[#F0E8F8]">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center text-[#6A0DAD] hover:text-[#4B0082] font-semibold text-[10px] sm:text-xs md:text-sm transition-colors duration-300"
                        >
                          <FiEye className="mr-0.5 sm:mr-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                          <span className="hidden xs:inline">Details</span>
                        </button>

                        {(project.github || project.githubLink) && (
                          <a
                            href={project.github || project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[#6E6E6E] hover:text-[#4B0082] font-semibold text-[10px] sm:text-xs md:text-sm transition-colors duration-300"
                          >
                            <FiGithub className="mr-0.5 sm:mr-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                            <span className="hidden xs:inline">Code</span>
                          </a>
                        )}
                      </div>

                      {/* Date - hidden on smallest mobile */}
                      {(project.createdAt || project.date) && (
                        <div className="hidden xs:flex mt-1 sm:mt-2 md:mt-3 pt-1 sm:pt-2 md:pt-3 border-t border-[#F0E8F8]">
                          <div className="flex items-center gap-1 sm:gap-1.5 text-[8px] sm:text-xs text-[#8A8A8A]">
                            <FiClock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span>
                              {new Date(project.createdAt || project.date || '').toLocaleDateString(
                                'en-US',
                                {
                                  month: 'short',
                                  day: 'numeric',
                                }
                              )}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="max-w-md mx-auto text-center bg-white rounded-3xl border border-[#EFE7F8] shadow-lg px-8 py-12">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#F6EEFF] flex items-center justify-center">
                <FiFolder className="w-8 h-8 text-[#6A0DAD]" />
              </div>
              <h3 className="text-2xl font-bold text-[#4B0082] mb-2">
                No projects yet
              </h3>
              <p className="text-[#6E6E6E] mb-6">
                Projects from your database will appear here once available.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FiArrowLeft />
                Go Back Home
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal - responsive for mobile */}
      {selectedProject && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white rounded-xl sm:rounded-2xl shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center text-[#333] transition-all duration-300"
              aria-label="Close modal"
            >
              <FiX className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Modal image */}
            <div className="relative h-[180px] xs:h-[220px] sm:h-[280px] md:h-[380px] overflow-hidden rounded-t-xl sm:rounded-t-2xl">
              <img
                src={getCloudinaryImageUrl(selectedProject.image, {
                  width: 800,
                  height: 500,
                  quality: 'auto:good',
                })}
                alt={selectedProject.name || selectedProject.title || "Project image"}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder-project.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 mb-1 sm:mb-3">
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#6A0DAD] text-white text-[10px] sm:text-xs font-semibold">
                    {selectedProject.category || 'Project'}
                  </span>

                  {selectedProject.status && (
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/90 text-[#333] text-[10px] sm:text-xs font-semibold">
                      {selectedProject.status}
                    </span>
                  )}
                </div>

                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  {selectedProject.name || selectedProject.title || 'Untitled Project'}
                </h3>
              </div>
            </div>

            {/* Modal body - responsive padding */}
            <div className="p-4 xs:p-5 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {/* Main content */}
                <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#4B0082] mb-2 sm:mb-3">
                      Project Overview
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-[#5F5F5F] leading-relaxed">
                      {selectedProject.description || 'No description available.'}
                    </p>
                  </div>

                  {selectedProject.coreFeatures &&
                    selectedProject.coreFeatures.length > 0 && (
                      <div>
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#4B0082] mb-2 sm:mb-3">
                          Core Features
                        </h4>
                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                          {selectedProject.coreFeatures.map((feature, index) => (
                            <div
                              key={index}
                              className="bg-[#F8F8FC] border border-[#ECECEC] rounded-lg sm:rounded-xl px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm text-[#444]"
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
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#4B0082] mb-2 sm:mb-3">
                          Roles & Contributions
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {selectedProject.rolesAndContributions.map((role, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-[#555]"
                            >
                              <span className="mt-1.5 sm:mt-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#6A0DAD] shrink-0"></span>
                              <span>{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {selectedProject.challengesAndSolutions &&
                    selectedProject.challengesAndSolutions.length > 0 && (
                      <div>
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#4B0082] mb-2 sm:mb-3">
                          Challenges & Solutions
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {selectedProject.challengesAndSolutions.map(
                            (item, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-[#555]"
                              >
                                <span className="mt-1.5 sm:mt-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C0C0C0] shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-[#F8F8FC] border border-[#ECECEC] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5">
                    <h4 className="text-base sm:text-lg font-bold text-[#4B0082] mb-3 sm:mb-4">
                      Project Details
                    </h4>

                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-gray-400 mb-0.5 sm:mb-1">
                          Category
                        </p>
                        <p className="text-xs sm:text-sm text-[#333] font-medium">
                          {selectedProject.category || 'N/A'}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-gray-400 mb-0.5 sm:mb-1">
                          Status
                        </p>
                        <p className="text-xs sm:text-sm text-[#333] font-medium">
                          {selectedProject.status || 'N/A'}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-gray-400 mb-1 sm:mb-2">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {getProjectTags(selectedProject).length > 0 ? (
                            getProjectTags(selectedProject).map((tag, index) => (
                              <span
                                key={index}
                                className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white border border-[#E4E4E8] text-[#5F5F5F] rounded-full text-[8px] sm:text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))
                          ) : (
                            <span className="text-xs sm:text-sm text-[#777]">No technologies listed</span>
                          )}
                        </div>
                      </div>

                      {(selectedProject.createdAt || selectedProject.date) && (
                        <div>
                          <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-gray-400 mb-0.5 sm:mb-1">
                            Added
                          </p>
                          <p className="text-xs sm:text-sm text-[#333] font-medium">
                            {new Date(selectedProject.createdAt || selectedProject.date || '').toLocaleDateString(
                              'en-US',
                              {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              }
                            )}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:gap-3">
                    {(selectedProject.link || selectedProject.github || selectedProject.githubLink) && (
                      <>
                        {selectedProject.link && (
                          <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-[#6A0DAD] hover:bg-[#4B0082] text-white font-semibold px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm transition-all duration-300"
                          >
                            Visit Live
                            <FiExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          </a>
                        )}

                        {(selectedProject.github || selectedProject.githubLink) && (
                          <a
                            href={selectedProject.github || selectedProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1 sm:gap-2 border border-[#D9D9E3] hover:bg-[#F8F8FC] text-[#333] font-semibold px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm transition-all duration-300"
                          >
                            View GitHub
                            <FiGithub className="w-3 h-3 sm:w-4 sm:h-4" />
                          </a>
                        )}
                      </>
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