// pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <section className="hero bg-gray-800 text-white p-4">
        <h1 className="text-3xl font-bold">Welcome to CricTracker-Pro</h1>
        <p className="text-lg">Your ultimate cricket companion</p>
        <Link to="/match-analytics" className="btn-primary mt-4">Explore Match Analytics</Link>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {/* Match cards will be displayed here */}
      </div>
    </div>
  );
}

export default Dashboard;