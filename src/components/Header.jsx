import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../context/Darkmode';

function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-200 dark:bg-gray-800 shadow-md z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="logo.png" alt="CricTracker-Pro" className="w-10 h-10 mr-3" />
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CricTracker-Pro</h1>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-gray-900 dark:text-white focus:outline-none">
            <span className="material-icons">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:flex sm:items-center sm:space-x-6 absolute sm:static top-16 left-0 w-full sm:w-auto bg-gray-200 dark:bg-gray-800 sm:bg-transparent p-4 sm:p-0 transition-all duration-300`}
        >
          <li className="mb-3 sm:mb-0">
            <Link to="/" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Dashboard
            </Link>
          </li>
          <li className="mb-3 sm:mb-0">
            <Link to="/match-analytics" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Match Analytics
            </Link>
          </li>
          <li className="mb-3 sm:mb-0">
            <Link to="/team-management" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Team Management
            </Link>
          </li>
          <li className="mb-3 sm:mb-0">
            <Link to="/login" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Login
            </Link>
          </li>
          <li className="mb-3 sm:mb-0">
            <input
              type="search"
              placeholder="Search matches..."
              className="w-full sm:w-40 p-2 border border-gray-400 dark:border-gray-600 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </li>
          <li>
            <button onClick={toggleDarkMode} className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center">
              <span className="material-icons mr-1">{darkMode ? 'light_mode' : 'dark_mode'}</span>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;