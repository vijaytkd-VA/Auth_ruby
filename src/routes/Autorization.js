import { useAuth } from "../provider/AuthProvider";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const Authorization = ({ Permissions }) => {
  const user = useAuth();
  const location = userLoaction();
  console.log("loacation value", location);
  if (user.username) {
      
    const userpermission = user.permissions;
    const isAllowed = permissions.some((allowed) => {
      userpermission.includes(allowed);
    });
    return isAllowed ? <Outlet /> : <unauthorized />;
  }

  return <Navigate to="/login" state={{ path: location.pathname }} />;
};

export default Authorization;
