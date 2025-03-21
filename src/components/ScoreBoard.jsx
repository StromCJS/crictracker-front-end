import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Scoreboard() {
  const [score, setScore] = useState({
    teamA: 0,
    teamB: 0,
    overs: 0,
    wickets: 0,
  });

  useEffect(() => {
    axios.get('/api/score')
      .then(response => {
        setScore(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleScoreUpdate = (team, value) => {
    axios.post('/api/score', { team, value })
      .then(response => {
        setScore(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container py-8">
      <div className="card">
        <h1 className="text-3xl font-bold text-center text-white dark:text-gray-900 mb-8">Scoreboard</h1>
        <div className="space-y-4">
          <p className="text-lg text-white dark:text-gray-900">Team A: {score.teamA}</p>
          <p className="text-lg text-white dark:text-gray-900">Team B: {score.teamB}</p>
          <p className="text-lg text-white dark:text-gray-900">Overs: {score.overs}</p>
          <p className="text-lg text-white dark:text-gray-900">Wickets: {score.wickets}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => handleScoreUpdate('teamA', 1)}
              className="btn-primary py-3 text-lg font-semibold"
            >
              Add 1 to Team A
            </button>
            <button
              onClick={() => handleScoreUpdate('teamB', 1)}
              className="btn-primary py-3 text-lg font-semibold"
            >
              Add 1 to Team B
            </button>
            <button
              onClick={() => handleScoreUpdate('overs', 1)}
              className="btn-primary py-3 text-lg font-semibold"
            >
              Add 1 Over
            </button>
            <button
              onClick={() => handleScoreUpdate('wickets', 1)}
              className="btn-primary py-3 text-lg font-semibold"
            >
              Add 1 Wicket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;