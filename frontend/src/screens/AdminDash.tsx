import AdminSidebar from "../components/AdminSidebar";
import Dashboard from "../components/Dashboard";

const AdminDash = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Dashboard Content */}
      <div className="flex-1 bg-[#F9F9F9]">
        <Dashboard />
      </div>
    </div>
  );
};

export default AdminDash;