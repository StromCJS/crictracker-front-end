import React from 'react';

function MatchCard({ matchData = {} }) {
  const {
    name,
    matchType,
    status,
    venue,
    dateTimeGMT,
    teams = [],
    score = []
  } = matchData;

  // Format innings score
  const formatScore = (inningData) => {
    if (!inningData) return "Did not bat";
    return `${inningData.r || 0}/${inningData.w || 0} (${inningData.o || '0.0'})`;
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800">
      {/* Match Type & Status */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
            {matchType?.toUpperCase()}
          </span>
          <span className="text-sm text-gray-400">
            {new Date(dateTimeGMT).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </span>
        </div>
        <p className="text-gray-500 text-sm">{venue}</p>
      </div>

      {/* Teams & Scores */}
      <div className="p-4 space-y-3">
        {/* Team 1 */}
        <div className="flex justify-between items-center">
          <span className="text-gray-200 font-medium">{teams[0]}</span>
          <span className="text-gray-300">{formatScore(score[0])}</span>
        </div>

        {/* Team 2 */}
        <div className="flex justify-between items-center">
          <span className="text-gray-200 font-medium">{teams[1]}</span>
          <span className="text-gray-300">{formatScore(score[1])}</span>
        </div>

        {/* Match Result */}
        <div className="pt-3 border-t border-gray-800">
          <p className="text-green-400 text-sm">{status}</p>
        </div>
      </div>
    </div>
  );
}

export default MatchCard;