import React, { useState, useEffect } from "react";
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize based on localStorage
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    // Apply theme based on the current state
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg--background-color dark:bg--background-color hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-var(--global-theme-color)" />
      ) : (
        <Moon className="w-5 h-5 text-var(--global-theme-color)" />
      )}
    </button>
  );
};

export default DarkModeToggle;
