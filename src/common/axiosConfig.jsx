import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL: "https://localhost:44387/api", 
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("Request error", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const navigate = useNavigate();

    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem("authToken");
        toast.error("Session expired. Please log in again.");
        navigate("/LoginForm"); 
      } 
      else if (error.response.status === 403) {
        toast.error("You do not have permission to perform this action.");
      }
      else if (error.response.status >= 500) {
        toast.error("Server error. Please try again later.");
      }
    } else {
      console.error("Network Error:", error.message);
      toast.error("Network error. Please check your connection.");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
