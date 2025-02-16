import React, { useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  return (
    <nav
      className="flex px-8 items-center bg-[var(--background-color)] text-[var(--header-text-color)] dark:[var(--background-color)] dark:text-gray-200"
      style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
    >
      <div className="flex gap-4 items-center ml-auto">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-transparent dark:border-gray-400"
        />
        <h4 className="text-xl text-[var(--header-text-color)] dark:text-gray-200">Mandeep Kumar</h4>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Header;
