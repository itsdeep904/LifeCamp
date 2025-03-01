import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const LandingFooter =() => {
  return (
    <footer className="bg-[var(--background-center-color)] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LifeCamp</h3>
            <p className="mb-4">
              Providing sustainable solutions for a better tomorrow. We're committed to helping businesses and individuals reduce their environmental impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[var(--edit-color)] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[var(--edit-color)] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[var(--edit-color)] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[var(--edit-color)] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-[var(--edit-color)] transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-[var(--edit-color)] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[var(--edit-color)] transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-[var(--edit-color)] transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-[var(--edit-color)] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[var(--edit-color)] transition-colors">Sustainable Energy</a></li>
              <li><a href="#" className="hover:text-[var(--edit-color)] transition-colors">Water Conservation</a></li>
              <li><a href="#" className="hover:text-[var(--edit-color)] transition-colors">Green Building</a></li>
              <li><a href="#" className="hover:text-[var(--edit-color)] transition-colors">Waste Management</a></li>
              <li><a href="#" className="hover:text-[var(--edit-color)] transition-colors">Clean Air Technology</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--edit-color)] text-gray-800"
              />
              <button
                type="submit"
                className="w-full bg-[var(--hover-bg-color)] text-[var(--hover-text-color)] px-4 py-2 border-2 border-white rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} LifeCamp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;