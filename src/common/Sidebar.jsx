
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  FaTachometerAlt,
  FaCampground,
  FaComments,
  FaUserShield,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogOut = async () => {
    try {
      localStorage.removeItem("authToken");
      toast.success("Logout successfully !");
      setTimeout(() => {
        navigate("/LoginForm");
      }, 1500);
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer autoClose={950} />
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={toggleSidebar}
      ></div>

      <aside
        className={`fixed top-0 left-0 z-40 w-48 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 bg-[var(--background-color)] text-[var(--text-color)] dark:[var(--background-color)] dark:text-gray-200`}
        id="sidebar_responsive"
        aria-label="Sidebar"
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="font-semibold text-xl ml-4">LifeCamps</h2>
          <button onClick={toggleSidebar} className="sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="mt-8">
          <ul className="space-y-4">
            <li className="pl-4 flex items-center hover:bg-[var(--hover-bg-color)] dark:hover:[var(--hover-bg-color)] group">
              <FaTachometerAlt className="text-[var(--icon-color)] group-hover:text-[var(--hover-icon-color)] dark:[var(--hover-text-color)] dark:group-hover:[var(--hover-text-color)]" />
              <Link
                to="/Dashboard"
                className="px-4 py-2 block rounded-md text-[var(--text-color)] dark:[var(--hover-bg-color)] group-hover:text-[var(--hover-text-color)] dark:group-hover:[var(--hover-text-color)]"
              >
                Dashboard
              </Link>
            </li>
            <li className="pl-4 flex items-center hover:bg-[var(--hover-bg-color)] dark:hover:[var(--hover-bg-color)] group">
              <FaCampground className="text-[var(--icon-color)] group-hover:text-[var(--hover-icon-color)] dark:[var(--hover-text-color)] dark:group-hover:[var(--hover-text-color)]" />
              <Link
                to="/CampDataTable"
                className="px-4 py-2 block rounded-md text-[var(--text-color)] dark:[var(--hover-bg-color)] group-hover:text-[var(--hover-text-color)] dark:group-hover:[var(--hover-text-color)]"
              >
                Manage Camp
              </Link>
            </li>
            <li className="pl-4 flex items-center hover:bg-[var(--hover-bg-color)] dark:hover:[var(--hover-bg-color)] group">
              <FaComments className="text-[var(--icon-color)] group-hover:text-[var(--hover-icon-color)] dark:[var(--hover-text-color)] dark:group-hover:[var(--hover-text-color)]" />
              <Link
                to="/MessageChat"
                className="px-4 py-2 block rounded-md text-[var(--text-color)] dark:[var(--hover-bg-color)] group-hover:text-[var(--hover-text-color)] dark:group-hover:[var(--hover-text-color)]"
              >
                Message
              </Link>
            </li>
            <li className="pl-4 flex items-center hover:bg-[var(--hover-bg-color)] dark:hover:[var(--hover-bg-color)] group">
              <FaUserShield className="text-[var(--icon-color)] group-hover:text-[var(--hover-icon-color)] dark:[var(--hover-text-color)] dark:group-hover:[var(--hover-text-color)]" />
              <Link
                to="/Privacy"
                className="px-4 py-2 block rounded-md text-[var(--text-color)] dark:[var(--hover-bg-color)] group-hover:text-[var(--hover-text-color)] dark:group-hover:[var(--hover-text-color)]"
              >
                Privacy
              </Link>
            </li>
            <li className="pl-4 flex items-center hover:bg-[var(--hover-bg-color)] dark:hover:[var(--hover-bg-color)] group">
              <FaCog className="text-[var(--icon-color)] group-hover:text-[var(--hover-icon-color)] dark:[var(--hover-text-color)] dark:group-hover:[var(--hover-text-color)]" />
              <Link
                to="/Setting"
                className="px-4 py-2 block rounded-md text-[var(--text-color)] dark:[var(--hover-bg-color)] group-hover:text-[var(--hover-text-color)] dark:group-hover:[var(--hover-text-color)]"
              >
                Settings
              </Link>
            </li>
            <li className="pl-4 flex items-center hover:bg-[var(--hover-bg-color)] dark:hover:[var(--hover-bg-color)] group">
              <FaSignOutAlt className="text-[var(--icon-color)] group-hover:text-[var(--hover-icon-color)] dark:[var(--hover-text-color)] dark:group-hover:[var(--hover-text-color)]" />
              <Link
                onClick={handleLogOut}
                className="px-4 py-2 block rounded-md text-[var(--text-color)] dark:[var(--hover-bg-color)] group-hover:text-[var(--hover-text-color)] dark:group-hover:[var(--hover-text-color)]"
              >
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <button
        onClick={toggleSidebar}
        className="sm:hidden fixed top-5 left-5 z-60 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </>
  );
};

export default Sidebar;
