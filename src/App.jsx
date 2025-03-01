import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, Navigate, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";
import Footer from "./common/Footer";
import LoginForm from "./common/LoginForm";
import SignUpForm from "./common/SignUpForm";
import ProtectedRoute from "./common/ProtectedRoute";
import { AuthProvider } from "./common/AuthContext"; 
import Setting from "./common/Setting";
import ManageCamp from "./pages/ManageCamp";
import Dashboard from "./pages/Dashboard";
import CampDataTable from "./pages/CampDataTable";
import MessageChat from "./pages/MessageChat";
import PageNotFound from "./pages/PageNotFound";
import LandingNavbar from './common/LandingNavbar';
import LandingIndex from './common/LandingIndex';
import LandingAbout from './common/LandingAbout';
import LandingServices from './common/LandingServices';
import LandingContact from './common/LandingContact';
import LandingFooter from './common/LandingFooter';

function LandingPage() {
  const navigate = useNavigate(); // Navigation ke liye useNavigate hook

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for user preference in localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
      <LandingIndex />
      <LandingAbout />
      <LandingServices />
      <LandingContact />
      </main>
      <LandingFooter />
    </div>
  );
}

function App() {
  const location = useLocation();

  const hideLayout = location.pathname === "/" ||  location.pathname === "/LoginForm" || location.pathname === "/SignUpForm";

  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="flex flex-col min-h-screen">
        {!hideLayout && <><Header /><Sidebar /></>}

        <div className="flex-grow">
          <AuthProvider>
            <Routes>
              {/* Default route ko Landing Page se replace kiya */}
              <Route path="/" element={<LandingPage />} />

              {/* Login & Sign Up Routes */}
              <Route path="/LoginForm" element={<LoginForm />} />
              <Route path="/SignUpForm" element={<SignUpForm />} />

              {/* Agar user login ho chuka ho, tab direct Dashboard pe redirect karein */}
              <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/ManageCamp" element={<ProtectedRoute><ManageCamp addUpdate="add" /></ProtectedRoute>} />
              <Route path="/ManageCamp/Edit/:id" element={<ProtectedRoute><ManageCamp addUpdate="edit" /></ProtectedRoute>} />
              <Route path="/CampDataTable" element={<ProtectedRoute><CampDataTable /></ProtectedRoute>} />
              <Route path="/MessageChat" element={<ProtectedRoute><MessageChat /></ProtectedRoute>} />
              <Route path="/Setting" element={<ProtectedRoute><Setting /></ProtectedRoute>} />

              {/* Agar koi invalid route ho to PageNotFound dikhaye */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AuthProvider>
        </div>

        {!hideLayout && <Footer />}
      </div>
    </>
  );
}

export default App;
