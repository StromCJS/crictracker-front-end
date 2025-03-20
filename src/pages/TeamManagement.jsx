// pages/TeamManagement.jsx
import React, { useState } from 'react';

function TeamManagement() {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState('');

  const addPlayer = () => {
    setPlayers([...players, { name: playerName }]);
    setPlayerName('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Team Management</h1>
      <input
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Add Player"
      />
      <button onClick={addPlayer} className="btn-primary mt-2">Add Player</button>
      <ul className="mt-4">
        {players.map((player, index) => (
          <li key={index} className="p-2 bg-gray-800 rounded my-1">{player.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeamManagement;