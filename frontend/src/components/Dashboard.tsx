import {
  FiFolder,
  FiMail,
  FiPlusCircle,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  useGetAdminProjectsQuery,
  useGetUserMessagesQuery,
} from "../slices/adminApiSlice";

const Dashboard: React.FC = () => {
  const { data: projects = [], isLoading: projectsLoading } =
    useGetAdminProjectsQuery({});

  const { data: messages = [], isLoading: messagesLoading } =
    useGetUserMessagesQuery({});

  const recentProjects = projects.slice(0, 5);
  const recentMessages = messages.slice(0, 5);

  return (
    <div className="p-8 bg-[#F9F9F9] min-h-screen">
      
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#4B0082]">Admin Dashboard</h1>
        <p className="text-gray-500">Manage projects and messages</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

        <div className="bg-white rounded-xl p-6 shadow-md flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Projects</p>
            <h2 className="text-3xl font-bold text-[#4B0082]">
              {projectsLoading ? "..." : projects.length}
            </h2>
          </div>
          <FiFolder className="text-4xl text-[#6A0DAD]" />
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Messages</p>
            <h2 className="text-3xl font-bold text-[#4B0082]">
              {messagesLoading ? "..." : messages.length}
            </h2>
          </div>
          <FiMail className="text-4xl text-[#6A0DAD]" />
        </div>

      </div>

      {/* Quick Actions */}
      <div className="mb-10 flex gap-4">
        <Link
          to="/admin/projects"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] text-white rounded-lg shadow hover:shadow-lg transition"
        >
          <FiPlusCircle />
          Add Project
        </Link>

        <Link
          to="/admin/messages"
          className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
        >
          <FiMail />
          View Messages
        </Link>
      </div>

      {/* Recent Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent Projects */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-[#4B0082]">
              Recent Projects
            </h3>
            <Link
              to="/admin/projects"
              className="flex items-center gap-1 text-sm text-[#6A0DAD] hover:underline"
            >
              View all <FiArrowRight />
            </Link>
          </div>

          <div className="space-y-3">
            {recentProjects.length === 0 ? (
              <p className="text-gray-500 text-sm">No projects yet</p>
            ) : (
              recentProjects.map((project: any) => (
                <div
                  key={project._id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span className="text-gray-700 text-sm">
                    {project.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {project.category}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Messages */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-[#4B0082]">
              Recent Messages
            </h3>
            <Link
              to="/admin/messages"
              className="flex items-center gap-1 text-sm text-[#6A0DAD] hover:underline"
            >
              View all <FiArrowRight />
            </Link>
          </div>

          <div className="space-y-3">
            {recentMessages.length === 0 ? (
              <p className="text-gray-500 text-sm">No messages yet</p>
            ) : (
              recentMessages.map((msg: any) => (
                <div
                  key={msg._id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span className="text-gray-700 text-sm">{msg.name}</span>
                  <span className="text-xs text-gray-400">
                    {msg.email}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;