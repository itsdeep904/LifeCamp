import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Sidebar from './common/Sidebar';
import LoginForm from './common/LoginForm';
import SignUpForm from './common/SignUpForm';
import ManageCamp from './pages/ManageCamp';
import Dashboard from './pages/Dashboard';
import CampDataTable from './pages/CampDataTable';
import MessageChat from './pages/MessageChat';
import PageNotFound from './pages/PageNotFound';

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === '/LoginForm' || location.pathname === '/SignUpForm';
  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Header />}
      {!hideLayout && <Sidebar />}
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ManageCamp" element={<ManageCamp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/CampDataTable" element={<CampDataTable />} exact />
          <Route path="/MessageChat" element={<MessageChat />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
