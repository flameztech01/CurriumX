import React, { useState } from 'react';
import {
  FiPlus,
  FiTrash2,
  FiExternalLink,
  FiGithub,
  FiX,
} from 'react-icons/fi';
import SideBar from '../components/SideBar';
import {
  useGetAdminProjectsQuery,
  useUploadProjectMutation,
  useDeleteProjectMutation,
} from '../slices/adminApiSlice';

const AdminProject: React.FC = () => {
  const { data: projects = [], isLoading, refetch } = useGetAdminProjectsQuery({});
  const [uploadProject, { isLoading: uploading }] = useUploadProjectMutation();
  const [deleteProject, { isLoading: deleting }] = useDeleteProjectMutation();

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    link: '',
    githubLink: '',
    category: '',
    description: '',
    technologies: '',
    status: '',
    rolesAndContributions: '',
    coreFeatures: '',
    challengesAndSolutions: '',
  });
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      link: '',
      githubLink: '',
      category: '',
      description: '',
      technologies: '',
      status: '',
      rolesAndContributions: '',
      coreFeatures: '',
      challengesAndSolutions: '',
    });
    setImage(null);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) {
      alert('Please select a project image');
      return;
    }

    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('link', formData.link);
      payload.append('githubLink', formData.githubLink);
      payload.append('category', formData.category);
      payload.append('description', formData.description);
      payload.append('technologies', formData.technologies);
      payload.append('status', formData.status);
      payload.append('image', image);

      payload.append(
        'rolesAndContributions',
        JSON.stringify(
          formData.rolesAndContributions
            .split('\n')
            .map((item) => item.trim())
            .filter(Boolean)
        )
      );

      payload.append(
        'coreFeatures',
        JSON.stringify(
          formData.coreFeatures
            .split('\n')
            .map((item) => item.trim())
            .filter(Boolean)
        )
      );

      payload.append(
        'challengesAndSolutions',
        JSON.stringify(
          formData.challengesAndSolutions
            .split('\n')
            .map((item) => item.trim())
            .filter(Boolean)
        )
      );

      await uploadProject(payload).unwrap();
      resetForm();
      setShowModal(false);
      refetch();
    } catch (error) {
      console.error(error);
      alert('Failed to upload project');
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this project?');
    if (!confirmDelete) return;

    try {
      await deleteProject(id).unwrap();
      refetch();
    } catch (error) {
      console.error(error);
      alert('Failed to delete project');
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F9F9F9]">
      <SideBar />

      <div className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#4B0082]">Manage Projects</h1>
            <p className="text-gray-500">Upload, view, and remove portfolio projects</p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] text-white rounded-lg shadow hover:shadow-lg transition"
          >
            <FiPlus />
            Add Project
          </button>
        </div>

        {/* Projects Table / Cards */}
        <div className="bg-white rounded-2xl shadow-md border border-[#ECECEC] overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center text-gray-500">Loading projects...</div>
          ) : projects.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No projects yet</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px]">
                <thead className="bg-[#F8F8FC] border-b border-[#ECECEC]">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[#4B0082]">
                      Project
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[#4B0082]">
                      Category
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[#4B0082]">
                      Status
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[#4B0082]">
                      Technologies
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[#4B0082]">
                      Links
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-[#4B0082]">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {projects.map((project: any) => (
                    <tr
                      key={project._id}
                      className="border-b border-[#F1F1F1] hover:bg-[#FAFAFD] transition"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-16 h-16 rounded-lg object-cover border border-[#ECECEC]"
                          />
                          <div>
                            <h3 className="font-semibold text-[#2F2F2F]">{project.name}</h3>
                            <p className="text-sm text-gray-500 line-clamp-2 max-w-xs">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-700">{project.category}</td>

                      <td className="px-6 py-4">
                        <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-[#F5EEFF] text-[#6A0DAD]">
                          {project.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-700 max-w-xs">
                        <div className="line-clamp-2">{project.technologies}</div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#6A0DAD] hover:text-[#4B0082]"
                              title="Live Link"
                            >
                              <FiExternalLink className="w-5 h-5" />
                            </a>
                          )}
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#6A0DAD] hover:text-[#4B0082]"
                              title="GitHub Repo"
                            >
                              <FiGithub className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDelete(project._id)}
                          disabled={deleting}
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                        >
                          <FiTrash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Upload Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>

          <div className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#ECECEC]">
              <h2 className="text-2xl font-bold text-[#4B0082]">Upload Project</h2>
              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 rounded-full bg-[#F5F5F8] hover:bg-[#ECECF5] flex items-center justify-center text-[#4B0082]"
              >
                <FiX />
              </button>
            </div>

            <form onSubmit={handleUpload} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#4B0082] mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#F9F9F9] border border-[#EAEAEA] focus:outline-none focus:border-[#6A0DAD]"
                    placeholder="Project name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4B0082] mb-2">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#F9F9F9] border border-[#EAEAEA] focus:outline-none focus:border-[#6A0DAD]"
                    placeholder="Web App, Mobile App..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4B0082] mb-2">
                    Live Link
                  </label>
                  <input
                    type="url"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#F9F9F9] border border-[#EAEAEA] focus:outline-none focus:border-[#6A0DAD]"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4B0082] mb-2">
                    GitHub Repo
                  </label>
                  <input
                    type="url"
                    name="githubLink"
                    value={formData.githubLink}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F9F9F9] border border-[#EAEAEA] focus:outline-none focus:border-[#6A0DAD]"
                    placeholder="https://github.com/..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4B0082] mb-2">
                    Technologies
                  </label>
                  <input
                    type="text"
                    name="technologies"
                    value={formData.technologies}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#F9F9F9] border border-[#EAEAEA] focus:outline-none focus:border-[#6A0DAD]"
                    placeholder="React, Node.js, MongoDB"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4B0082] mb-2">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#F9F9F9] border border-[#EAEAEA] focus:outline-none focus:border-[#6A0DAD]"
                  >
                    <option value="">Select status</option>
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Ongoing">Ongoing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4B0082] mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[#F9F9F9] border border-[#EAEAEA] focus:outline-none focus:border-[#6A0DAD] resize-none"
                  placeholder="Project description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4B0082] mb-2">
                  Roles and Contributions
                </label>
                <textarea
                  name="rolesAndContributions"
                  value={formData.rolesAndContributions}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[#F9F9F9] border border-[#EAEAEA] focus:outline-none focus:border-[#6A0DAD] resize-none"
                  placeholder={`One per line\nDesigned frontend UI\nBuilt backend APIs`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4B0082] mb-2">
                  Core Features
                </label>
                <textarea
                  name="coreFeatures"
                  value={formData.coreFeatures}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[#F9F9F9] border border-[#EAEAEA] focus:outline-none focus:border-[#6A0DAD] resize-none"
                  placeholder={`One per line\nAuthentication\nAdmin dashboard`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4B0082] mb-2">
                  Challenges and Solutions
                </label>
                <textarea
                  name="challengesAndSolutions"
                  value={formData.challengesAndSolutions}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[#F9F9F9] border border-[#EAEAEA] focus:outline-none focus:border-[#6A0DAD] resize-none"
                  placeholder={`One per line\nOptimized uploads with Cloudinary\nHandled secure JWT auth`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4B0082] mb-2">
                  Project Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#F9F9F9] border border-[#EAEAEA]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-3 rounded-xl border border-[#E0E0E0] text-gray-700 hover:bg-gray-50 transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={uploading}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] text-white font-medium hover:shadow-lg transition disabled:opacity-70"
                >
                  {uploading ? 'Uploading...' : 'Upload Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProject;