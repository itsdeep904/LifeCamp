import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import Sidebar from './common/Sidebar'
import { Route, Routes } from 'react-router-dom'
import ManageCamp from './pages/ManageCamp'
import Dashboard from './pages/Dashboard'
import CampDataTable from './pages/CampDataTable'
import MessageChat from './pages/MessageChat'
import PageNotFound from './pages/PageNotFound'
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Sidebar/>
      <div className="flex-grow">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/ManageCamp' element={<ManageCamp />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/CampDataTable' element={<CampDataTable />} />
        <Route path='/MessageChat' element={<MessageChat />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
