import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaCampground, FaComments, FaUserShield, FaCog, FaSignOutAlt } from "react-icons/fa";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleSidebar}
      ></div>

      <aside
        className={`fixed top-0 left-0 z-40 w-48 h-screen bg-emerald-950 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
        id='sidebar_responsive'
        aria-label="Sidebar"
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-white font-semibold text-xl ml-4">LifeCamps</h2>
          <button onClick={toggleSidebar} className="text-white sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="mt-8">
  <ul className="space-y-4">
    <li className="ml-4 flex items-center">
      <FaTachometerAlt className="text-white" />
      <Link to="/Dashboard" className="text-white hover:bg-emerald-800 px-4 py-2 block rounded-md">Dashboard</Link>
    </li>
    <li className="ml-4 flex items-center">
      <FaCampground className="text-white" />
      <Link to="/CampDataTable" className="text-white hover:bg-emerald-800 px-4 py-2 block rounded-md">Manage Camp</Link>
    </li>
    <li className="ml-4 flex items-center">
      <FaComments className="text-white" />
      <Link to="/MessageChat" className="text-white hover:bg-emerald-800 px-4 py-2 block rounded-md">Message</Link>
    </li>
    <li className="ml-4 flex items-center">
      <FaUserShield className="text-white" />
      <Link to="/Privacy" className="text-white hover:bg-emerald-800 px-4 py-2 block rounded-md">Privacy</Link>
    </li>
    <li className="ml-4 flex items-center">
      <FaCog className="text-white" />
      <Link to="/Settings" className="text-white hover:bg-emerald-800 px-4 py-2 block rounded-md">Settings</Link>
    </li>
    <li className="ml-4 flex items-center">
      <FaSignOutAlt className="text-white" />
      <Link to="/LogOut" className="text-white hover:bg-emerald-800 px-4 py-2 block rounded-md">Log Out</Link>
    </li>
  </ul>
</nav>
      </aside>
      <button
        onClick={toggleSidebar}
        className="sm:hidden fixed top-5 left-5 z-60 text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  );
}

export default Sidebar;
