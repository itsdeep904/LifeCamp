import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../common/Loader";
import axiosInstance from "./axiosConfig";

const LoginForm = ({ onLogin }) => {
  const [focused, setFocused] = useState({
    identifier: false,
    password: false,
  });
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const AuthStatus = Object.freeze({
    PENDING: "PENDING",
    SUCCESS: "SUCCESS",
    FAILED: "FAILED",
  });

  const [IsAuthStatus, setIsAuthStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      identifier: formData.identifier,
      password: formData.password,
    };

    try {
      setIsAuthStatus(AuthStatus.PENDING);
      const response = await axiosInstance.post("/Auth/LoginDetail", data);

      setIsAuthStatus(AuthStatus.SUCCESS);
      localStorage.setItem("authToken", response.data.token);
      toast.success("Login successfully!");
      setTimeout(() => {
        navigate("/Dashboard");
      }, 1500);
      if (onLogin) onLogin();
    } catch (error) {
      console.error("Login Error:", error);
      setIsAuthStatus(AuthStatus.FAILED);
      toast.error("Login failed. Please try again.");
    }
  };

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field, value) => {
    setFocused({ ...focused, [field]: !!value });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ToastContainer autoClose={1000} />
          <div style={styles.container}>
            <div style={styles.typewriter}>Welcome to Life Camp</div>
            <div style={styles.formContainer}>
              <h2 style={styles.heading}>Login</h2>
              <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.inputContainer}>
                  <label
                    style={
                      focused.identifier ? styles.labelFocused : styles.label
                    }
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="identifier"
                    value={formData.identifier}
                    onChange={handleChange}
                    onFocus={() => handleFocus("identifier")}
                    onBlur={(e) => handleBlur("identifier", e.target.value)}
                    style={styles.input}
                    required
                  />
                </div>
                <div style={styles.inputContainer}>
                  <label
                    style={
                      focused.password ? styles.labelFocused : styles.label
                    }
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => handleFocus("password")}
                    onBlur={(e) => handleBlur("password", e.target.value)}
                    style={styles.input}
                    required
                  />
                </div>
                <button type="submit" style={styles.button}>
                  Login
                </button>
                <div style={styles.linksContainer}>
                  <Link to="/forgot-password" style={styles.link}>
                    Forgot Password?
                  </Link>
                  <Link to="/SignUpForm" style={styles.link}>
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #022c22, #000)",
    padding: "20px",
    flexDirection: "column",
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    maxWidth: "400px",
    padding: "30px",
    borderRadius: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(10px)",
    textAlign: "center",
    color: "#fff",
    animation: "fadeIn 1.5s ease",
  },
  typewriter: {
    fontSize: "1.8rem",
    fontFamily: "Courier New, monospace",
    color: "#fff",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginBottom: "20px",
  },
  heading: {
    marginBottom: "20px",
    color: "#fff",
    fontSize: "1.8rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputContainer: {
    position: "relative",
    marginBottom: "20px",
  },
  label: {
    position: "absolute",
    left: "12px",
    top: "12px",
    color: "#999",
    fontSize: "16px",
    pointerEvents: "none",
    transition: "0.2s ease all",
  },
  labelFocused: {
    position: "absolute",
    left: "12px",
    top: "-10px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "0 5px",
    color: "#fff",
    fontSize: "12px",
  },
  input: {
    width: "100%",
    padding: "14px 12px",
    borderRadius: "4px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    transition: "transform 0.2s ease",
    outline: "none",
    appearance: "none",
  },
  button: {
    padding: "12px",
    marginTop: "20px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#022c22",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "background 0.3s ease, transform 0.2s ease",
  },
  linksContainer: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
};

export default LoginForm;
