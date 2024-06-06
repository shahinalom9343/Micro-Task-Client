import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";

const AdminRoutes = ({ children }) => {
  const [role, isLoading] = useRole();
  if (isLoading)
    return <span className="loading loading-dots loading-lg"></span>;
  if (role === "admin") return children;

  return <Navigate to="/dashboard"></Navigate>;
};

export default AdminRoutes;
