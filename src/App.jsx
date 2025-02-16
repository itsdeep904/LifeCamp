import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";
import Footer from "./common/Footer";
import LoginForm from "./common/LoginForm";
import SignUpForm from "./common/SignUpForm";
import ProtectedRoute from "./common/ProtectedRoute";
import { AuthProvider } from "./common/AuthContext"; 
import DarkModeToggle from "./common/DarkModeToggle"; // Import your dark mode toggle
import Setting from "./common/Setting";
import ManageCamp from "./pages/ManageCamp";
import Dashboard from "./pages/Dashboard";
import CampDataTable from "./pages/CampDataTable";
import MessageChat from "./pages/MessageChat";
import PageNotFound from "./pages/PageNotFound";
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/LoginForm" || location.pathname === "/SignUpForm";

  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="flex flex-col min-h-screen">
        {/* Conditionally render Layout (Header, Sidebar, Footer) */}
        {!hideLayout && (
          <>
            <Header />
            <Sidebar />
          </>
        )}

        <div className="flex-grow">
          {/* Wrap your Routes with AuthProvider */}
          <AuthProvider>
            <Routes>
              <Route path="/LoginForm" element={<LoginForm />} />
              <Route path="/SignUpForm" element={<SignUpForm />} />
              <Route path="/" element={<Navigate to="/LoginForm" />} /> {/* Redirect to LoginForm */}
              <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/ManageCamp" element={<ProtectedRoute><ManageCamp addUpdate="add" /></ProtectedRoute>} />
              <Route path="/ManageCamp/Edit/:id" element={<ProtectedRoute><ManageCamp addUpdate="edit" /></ProtectedRoute>} />
              <Route path="/CampDataTable" element={<ProtectedRoute><CampDataTable /></ProtectedRoute>} />
              <Route path="/MessageChat" element={<ProtectedRoute><MessageChat /></ProtectedRoute>} />
              <Route path="/Setting" element={<ProtectedRoute><Setting /></ProtectedRoute>} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AuthProvider>
        </div>

        {/* Conditionally render Footer */}
        {!hideLayout && <Footer />}
      </div>
    </>
  );
}

export default App;
