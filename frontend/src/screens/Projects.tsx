
import { Link } from 'react-router-dom';
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiFolder,
  FiEye,
  FiClock,
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
  status?: string;
  createdAt?: string;
  date?: string;
}

interface ApiError {
  data?: {
    message?: string;
  };
}

const Projects: React.FC = () => {
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
      <section className="min-h-screen bg-gradient-to-b from-white via-[#faf7ff] to-white py-20 px-6 overflow-hidden relative">
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

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl border border-[#EFE7F8] shadow-sm overflow-hidden"
              >
                <div className="h-64 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-4"></div>
                  <div className="h-7 w-3/4 bg-gray-200 rounded animate-pulse mb-3"></div>
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse mb-5"></div>
                  <div className="flex gap-2 mb-5">
                    <div className="h-8 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="h-8 w-20 bg-gray-200 rounded-full animate-pulse"></div>
                  </div>
                  <div className="h-10 w-full bg-gray-200 rounded-xl animate-pulse"></div>
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
      <section className="min-h-screen bg-gradient-to-b from-white via-[#faf7ff] to-white py-20 px-6 overflow-hidden relative">
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
    <section className="min-h-screen bg-gradient-to-b from-white via-[#faf7ff] to-white py-20 px-6 overflow-hidden relative">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#6A0DAD]/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#4B0082]/8 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] -translate-x-1/2 -translate-y-1/2 bg-[#7B2CBF]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#EADCF8] bg-white/80 hover:bg-white text-[#4B0082] font-medium shadow-sm hover:shadow-md transition-all duration-300 w-fit"
          >
            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6EEFF] text-[#6A0DAD] text-sm font-semibold w-fit">
            <FiFolder className="w-4 h-4" />
            {allProjects.length} Project{allProjects.length !== 1 ? 's' : ''}
          </div>
        </div>

        <div className="text-center mb-16">
          <span className="text-[#6A0DAD] font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">
            Full Portfolio
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
            <span className="bg-gradient-to-r from-[#4B0082] via-[#6A0DAD] to-[#7B2CBF] bg-clip-text text-transparent">
              All Projects
            </span>
          </h1>

          <div className="w-28 h-1 bg-gradient-to-r from-[#4B0082] to-[#6A0DAD] mx-auto rounded-full mb-6"></div>

          <p className="text-lg md:text-xl text-[#6E6E6E] max-w-3xl mx-auto leading-relaxed">
            Explore the complete collection of projects, designs, and digital products
            built with creativity, strategy, and clean execution.
          </p>
        </div>

        {allProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {allProjects.map((project: Project, index: number) => {
              const tags = getProjectTags(project);
              const projectName = project.name || project.title || 'Untitled Project';

              return (
                <div
                  key={project._id || project.id || index}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-3xl border border-[#EFE7F8] hover:border-[#DAC3F2] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#4B0082] via-[#6A0DAD] to-[#7B2CBF]"></div>

                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={getCloudinaryImageUrl(project.image, {
                          width: 1200,
                          height: 800,
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

                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#4B0082] text-xs font-semibold shadow-sm">
                        {project.category || 'Project'}
                      </span>
                    </div>

                    {project.status && project.status !== 'Completed' && (
                      <div className="absolute top-4 right-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm shadow-sm ${
                            project.status === 'In Progress'
                              ? 'bg-amber-50/95 text-amber-700'
                              : project.status === 'Planning'
                              ? 'bg-indigo-50/95 text-indigo-700'
                              : 'bg-slate-50/95 text-slate-700'
                          }`}
                        >
                          {project.status === 'In Progress' && (
                            <HiOutlineFire className="w-3 h-3" />
                          )}
                          {project.status}
                        </span>
                      </div>
                    )}

                    <div className="absolute bottom-5 left-5 right-5 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <a
                        href={project.link || '#'}
                        target={project.link ? '_blank' : undefined}
                        rel={project.link ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center justify-center w-full px-4 py-3 rounded-2xl bg-white text-[#4B0082] font-semibold shadow-lg hover:bg-[#f9f5ff] transition-all duration-300"
                      >
                        View Website
                        <FiExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#4B0082] mb-3 line-clamp-1">
                      {projectName}
                    </h3>

                    <p className="text-[#6E6E6E] leading-relaxed mb-5 line-clamp-3">
                      {project.description || 'No description available for this project.'}
                    </p>

                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {tags.slice(0, 4).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1.5 bg-[#F5F2FA] text-[#6E6E6E] rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#F0E8F8]">
                      <a
                        href={project.link || '#'}
                        target={project.link ? '_blank' : undefined}
                        rel={project.link ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center text-[#6A0DAD] hover:text-[#4B0082] font-semibold text-sm transition-colors duration-300"
                      >
                        <FiEye className="mr-2 w-4 h-4" />
                        View Project
                      </a>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#6E6E6E] hover:text-[#4B0082] font-semibold text-sm transition-colors duration-300"
                        >
                          <FiGithub className="mr-2 w-4 h-4" />
                          Code
                        </a>
                      )}
                    </div>

                    {(project.createdAt || project.date) && (
                      <div className="mt-4 pt-4 border-t border-[#F0E8F8]">
                        <div className="flex items-center gap-2 text-sm text-[#8A8A8A]">
                          <FiClock className="w-4 h-4" />
                          <span>
                            Added{' '}
                            {new Date(project.createdAt || project.date || '').toLocaleDateString(
                              'en-US',
                              {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
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
  );
};

export default Projects;