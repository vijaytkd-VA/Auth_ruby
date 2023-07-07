import React from "react";
import { useAuth } from "../provider/AuthProvider";
import { Navigate, useLocation  } from "react-router-dom";

const Authentication = ({ children }) => {
    const user  = useAuth();
    const loacation = useLocation();
    console.log("loacation value", location);
    if (!user.username) {
        return <Navigate to="login" state={{ path: locaction.pathname }}>;
    }
    return children;
};
export default Authentication;