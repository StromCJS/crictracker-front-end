import React from 'react';
import { Link } from 'react-router-dom';

function MatchCard({ match }) {
  return (
    <div className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 p-4 rounded-lg shadow-md w-72">
      <h3 className="text-xl font-bold">{match.team1} vs {match.team2}</h3>
      <p className="text-gray-400 dark:text-gray-600">Venue: {match.venue}</p>
      <p className="text-gray-400 dark:text-gray-600">Status: {match.status}</p>
      <Link to={`/match/${match.id}`} className="btn-primary mt-3 inline-block">View Details</Link>
    </div>
  );
}

export default MatchCard;