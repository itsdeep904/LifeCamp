import React from 'react';

const Footer = () => {
  return (
    <div
      className="w-full flex flex-col sm:flex-row items-center justify-center p-2 bg-[var(--background-color)] text-[var(--text-color)] dark:[var(--background-color)] dark:text-gray-200"
      style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
    >
      <div className="flex flex-wrap gap-6 items-center justify-center sm:justify-start">
        <h4 className="text-xl text-[var(--text-color)] dark:text-gray-200 cursor-pointer">Privacy Policy</h4>
        <h4 className="text-xl text-[var(--text-color)] dark:text-gray-200 cursor-pointer">Terms of Service</h4>
        <h4 className="text-xl text-[var(--text-color)] dark:text-gray-200 cursor-pointer">FAQ</h4>
        <h4 className="text-xl text-[var(--text-color)] dark:text-gray-200 cursor-pointer">Support</h4>
      </div>
      <h2 className="font-bold mt-4 sm:mt-0 sm:ml-6 text-sm sm:text-lg text-[var(--text-color)] dark:text-gray-200">
        (© 2024 LifeCamp)
      </h2>
    </div>
  );
};

export default Footer;
