
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useGetProjectsQuery } from '../slices/userApiSlice';

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
  color?: string;
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
        width = 800,
        height = 600,
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
        width = 800,
        height = 600,
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

  const displayedProjects = projects?.slice(0, 3) || [];

  if (isLoading) {
    return (
      <section id="our-work" className="py-24 bg-[#F8F8FC]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#F28C38]"></span>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-[#6A0DAD]">
                Our Portfolio
              </span>
              <span className="w-8 h-[2px] bg-[#F28C38]"></span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4B0082] mb-4">
              Featured Projects
            </h2>

            <p className="text-[#6E6E6E] text-base md:text-lg max-w-2xl mx-auto">
              A glimpse into products we’ve designed and built.
            </p>
          </div>

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
                    <div className="h-8 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                  </div>
                  <div className="h-10 w-36 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    const err = error as { data?: { message?: string } };

    return (
      <section id="our-work" className="py-24 bg-[#F8F8FC]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#F28C38]"></span>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-[#6A0DAD]">
                Our Portfolio
              </span>
              <span className="w-8 h-[2px] bg-[#F28C38]"></span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4B0082] mb-4">
              Featured Projects
            </h2>
          </div>

          <div className="text-center py-12 max-w-md mx-auto bg-white rounded-2xl border border-[#ECECEC] shadow-sm">
            <p className="text-[#4B0082] text-lg font-semibold mb-2">
              Unable to load projects
            </p>
            <p className="text-[#6E6E6E] text-sm">
              {err?.data?.message || 'Please check your connection and try again'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="our-work" className="py-24 bg-[#F8F8FC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#F28C38]"></span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-[#6A0DAD]">
              Our Portfolio
            </span>
            <span className="w-8 h-[2px] bg-[#F28C38]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4B0082] mb-4">
            Featured Projects
          </h2>

          <p className="text-[#6E6E6E] text-base md:text-lg max-w-2xl mx-auto">
            A glimpse into products we’ve designed and built.
          </p>
        </div>

        {displayedProjects.length > 0 ? (
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
                          width: 800,
                          height: 600,
                          quality: 'auto:good',
                        })}
                        alt={project.name || project.title || 'Project image'}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder-project.jpg';
                        }}
                      />

                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#4B0082] text-white shadow-sm">
                          {project.category || 'Project'}
                        </span>
                      </div>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 bg-[#4B0082]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        >
                          <span className="inline-flex items-center gap-2 text-white font-semibold">
                            View Website <FiExternalLink />
                          </span>
                        </a>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#2F2F2F] mb-3 group-hover:text-[#4B0082] transition-colors">
                        {project.name || project.title}
                      </h3>

                      <p className="text-[#6E6E6E] text-sm md:text-base leading-relaxed mb-5">
                        {project.description
                          ? project.description.length > 110
                            ? `${project.description.slice(0, 110)}...`
                            : project.description
                          : 'A modern digital project crafted with usability and performance in mind.'}
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

                      <a
                        href={project.link || '#'}
                        target={project.link ? '_blank' : undefined}
                        rel={project.link ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-2 bg-[#F28C38] hover:bg-[#dd7c2d] text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300"
                      >
                        View Project
                        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                      </a>
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
  );
};

export default Projects;