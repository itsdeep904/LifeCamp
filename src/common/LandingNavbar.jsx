import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

const LandingNavbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[var(--background-color)] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">LifeCamp</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-[var(--hover-text-color)] hover:bg-[var(--hover-bg-color)] px-3 py-2 rounded-md transition-colors">Home</a>
            <a href="#about" className="hover:text-[var(--hover-text-color)] hover:bg-[var(--hover-bg-color)] px-3 py-2 rounded-md transition-colors">About</a>
            <a href="#services" className="hover:text-[var(--hover-text-color)] hover:bg-[var(--hover-bg-color)] px-3 py-2 rounded-md transition-colors">Services</a>
            <a href="#contact" className="hover:text-[var(--hover-text-color)] hover:bg-[var(--hover-bg-color)] px-3 py-2 rounded-md transition-colors">Contact</a>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-[var(--hover-bg-color)] hover:text-[var(--hover-text-color)] transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/LoginForm">
            <button className="bg-[var(--hover-bg-color)] text-[var(--hover-text-color)] px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
              Login
            </button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-[var(--hover-bg-color)] hover:text-[var(--hover-text-color)] transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-[var(--hover-bg-color)] hover:text-[var(--hover-text-color)] transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--background-color)] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md hover:bg-[var(--hover-bg-color)] hover:text-[var(--hover-text-color)] transition-colors">Home</a>
            <a href="#about" className="block px-3 py-2 rounded-md hover:bg-[var(--hover-bg-color)] hover:text-[var(--hover-text-color)] transition-colors">About</a>
            <a href="#services" className="block px-3 py-2 rounded-md hover:bg-[var(--hover-bg-color)] hover:text-[var(--hover-text-color)] transition-colors">Services</a>
            <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-[var(--hover-bg-color)] hover:text-[var(--hover-text-color)] transition-colors">Contact</a>
            <button className="w-full text-left bg-[var(--hover-bg-color)] text-[var(--hover-text-color)] px-3 py-2 rounded-md hover:opacity-90 transition-opacity">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;
