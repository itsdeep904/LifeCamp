import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "./axiosConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Initially true for loading
  
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axiosInstance
        .post("/Auth/CheckValidation", null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.data.status === 200) {
            setIsAuthenticated(true); // Successfully authenticated
          } else {
            setIsAuthenticated(false); // Authentication failed
            localStorage.removeItem("authToken");
          }
        })
        .catch(() => {
          setIsAuthenticated(false);
        })
        .finally(() => {
          setLoading(false); // Loading is false when done
        });
    } else {
      setLoading(false); // No token, stop loading
      setIsAuthenticated(false);
    }
  }, []);

  if (loading) {
    return null; // Or show a loading spinner, to avoid rendering protected routes before auth check
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
