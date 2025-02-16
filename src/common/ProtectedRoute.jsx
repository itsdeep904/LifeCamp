import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../common/AuthContext";  // Import AuthContext
import Loader from "./Loader";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);  // Use context here
  
  if (loading) {
    return <Loader />;
  }
  if (!isAuthenticated) {
    return <Navigate to="/LoginForm" replace />;
  }

  return children;
};

export default ProtectedRoute;
