// components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    console.log('Toggle dark mode clicked');
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
    console.log('Dark mode class added:', document.body.classList.contains('dark-mode'));
  };

  return (
    <header className={`bg-gray-800 p-4 text-white ${darkMode ? 'dark-mode' : ''}`}>
      <nav className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <img src="logo.png" alt="CricTracker-Pro" className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">CricTracker-Pro</h1>
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">Dashboard</Link>
          </li>
          <li>
            <Link to="/match-analytics" className="hover:text-gray-300">Match Analytics</Link>
          </li>
          <li>
            <Link to="/team-management" className="hover:text-gray-300">Team Management</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-300">Login</Link>
          </li>
          <li>
            <input
              type="search"
              placeholder="Search"
              className="w-full p-2 border rounded"
            />
          </li>
          <li>
            <button onClick={toggleDarkMode} className="hover:text-gray-300">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;