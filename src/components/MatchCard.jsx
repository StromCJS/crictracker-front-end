// components/MatchCard.jsx
import React from 'react';

function MatchCard({ match }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md w-72">
      <h3 className="text-xl font-bold">{match.team1} vs {match.team2}</h3>
      <p className="text-gray-400">Venue: {match.venue}</p>
      <p className="text-gray-400">Status: {match.status}</p>
      <Link to={`/match/${match.id}`} className="btn-primary mt-3">View Details</Link>
    </div>
  );
}

export default MatchCard;