import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiFolder,
  FiMail,
  FiLogOut,
} from "react-icons/fi";

const AdminSidebar: React.FC = () => {
  const navigate = useNavigate();

  const menu = [
    {
      name: "Dashboard",
      icon: <FiGrid />,
      path: "/admin",
    },
    {
      name: "Projects",
      icon: <FiFolder />,
      path: "/admin/projects",
    },
    {
      name: "Messages",
      icon: <FiMail />,
      path: "/admin/messages",
    },
  ];

  const logoutHandler = () => {
    localStorage.removeItem("adminInfo");
    navigate("/admin/login");
  };

  return (
    <aside className="h-screen w-64 bg-[#1a1b3a] text-white flex flex-col shadow-xl">
      
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-white">Currium</span>
          <span className="text-[#C0C0C0]">X</span>
        </h1>
        <p className="text-xs text-gray-400 mt-1">Admin Panel</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] shadow-lg"
                  : "hover:bg-white/10"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={logoutHandler}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all"
        >
          <FiLogOut />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;