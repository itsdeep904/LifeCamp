import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SignUpForm = () => {
  const [focused, setFocused] = useState({
    fullName: false,
    identifier: false,
    password: false,
    confirmPassword: false,
  });
  const [formData, setFormData] = useState({
    fullName: "",
    identifier: "",
    password: "",
    roleType: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    try {
        
        const url = formData.roleType == 1 
        ? "https://localhost:44387/api/Auth/AddUpdateAdmin" 
        : "https://localhost:44387/api/Auth/AddUpdateUser";
      
      const response = await axios.post(
        url,
        {
          fullName: formData.fullName,  
          identifier: formData.identifier,
          password: formData.password,
        }
      );
      if (response.status === 200) {
        toast.success("Signup successful!");
        setTimeout(() => {
          navigate("/LoginForm");
        }, 1500);
      } else {
        toast.error("Signup failed! Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };
  const handleRoleChange = (e) => {
    setFormData({
      ...formData,
      roleType: e.target.value,
    });
  };
  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field, value) => {
    setFocused({ ...focused, [field]: !!value });
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <div style={styles.container}>
        <div style={styles.typewriter}>Join Life Camp</div>
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Sign Up</h2>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputContainer}>
              <label
                style={focused.fullName ? styles.labelFocused : styles.label}
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onFocus={() => handleFocus("fullName")}
                onBlur={(e) => handleBlur("fullName", e.target.value)}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputContainer}>
              <label
                style={focused.identifier ? styles.labelFocused : styles.label}
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
                style={focused.password ? styles.labelFocused : styles.label}
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
            <div style={styles.inputContainer}>
              <label
                style={
                  focused.confirmPassword ? styles.labelFocused : styles.label
                }
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onFocus={() => handleFocus("confirmPassword")}
                onBlur={(e) => handleBlur("confirmPassword", e.target.value)}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.inputContainer}>
              <div className="flex items-center">
                <div className="flex">
                  <div className="flex items-center me-4">
                    <input
                      id="admin-radio"
                      type="radio"
                      value="1"
                      checked={formData.roleType === '1'}
                      onChange={handleRoleChange}
                      name="role-radio-group"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="admin-radio"
                      className="ms-2 text-sm font-medium text-white dark:text-gray-300"
                    >
                      Admin
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      id="user-radio"
                      type="radio"
                      value="2"
                      checked={formData.roleType === '2'}
                      onChange={handleRoleChange}
                      name="role-radio-group"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="user-radio"
                      className="ms-2 text-sm font-medium text-white dark:text-gray-300"
                    >
                      User
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" style={styles.button}>
              Sign Up
            </button>
            <div style={styles.linksContainer}>
              <Link to="/LoginForm" style={styles.link}>
                Already have an account? Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
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
    justifyContent: "center",
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

export default SignUpForm;
