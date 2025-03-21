import React from 'react';
import { Link } from 'react-router-dom';
import MatchCard from '../components/MatchCard';

function Dashboard() {
  return (
    <div className="container py-8 h-screen overflow-scroll">
      <section className="hero bg-gray-800 text-white p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-bold">Welcome to CricTracker-Pro</h1>
        <p className="text-lg text-gray-300">Your ultimate cricket companion</p>
        <Link to="/match-analytics" className="btn-primary mt-4 inline-block">Explore Match Analytics</Link>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for match cards */}
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
      </div>
    </div>
  );
}

export default Dashboard;