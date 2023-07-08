import { useAuth } from "../provider/AuthProvider";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import Unauthorized from "../components/Unauthorized";

const Authorization = ({ Permissions }) => {
  const user = useAuth();
  const location = useLocation();
  console.log("location value", location);
  if (user.username) {
    const userpermission = user.Permissions;
    const isAllowed = permissions.some((allowed)) => {
      userpermission.includes(allowed);
    });
    return isAllowed ? <Outlet /> : <Unauthorized />;
  }

  return <Navigate to="/login" state={{ path: location.pathname }} />;
};

export default Authorization;