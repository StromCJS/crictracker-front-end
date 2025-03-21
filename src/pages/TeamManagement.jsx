import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import AnimatedButton from '../components/AnimatedButton';

function TeamManagement() {
  const [players, setPlayers] = useState(() => {
    const savedPlayers = localStorage.getItem('players');
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });
  const [playerName, setPlayerName] = useState('');
  const [playerRole, setPlayerRole] = useState('Batsman');
  const [editingIndex, setEditingIndex] = useState(null);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [playerToDelete, setPlayerToDelete] = useState(null);

  const roles = ['Batsman', 'Bowler', 'All-Rounder', 'Wicketkeeper'];

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
  }, [players]);

  const addOrUpdatePlayer = () => {
    if (!playerName.trim()) {
      setError('Player name cannot be empty');
      toast.error('Player name cannot be empty');
      return;
    }
    setError('');

    if (editingIndex !== null) {
      const updatedPlayers = [...players];
      updatedPlayers[editingIndex] = { name: playerName, role: playerRole };
      setPlayers(updatedPlayers);
      setEditingIndex(null);
      toast.success(`Updated ${playerName} successfully!`);
    } else {
      setPlayers([...players, { name: playerName, role: playerRole }]);
      toast.success(`Added ${playerName} to the team!`);
    }
    setPlayerName('');
    setPlayerRole('Batsman');
  };

  const editPlayer = (index) => {
    setPlayerName(players[index].name);
    setPlayerRole(players[index].role);
    setEditingIndex(index);
    toast.info(`Editing ${players[index].name}`);
  };

  const confirmDeletePlayer = (index) => {
    setPlayerToDelete(index);
    setShowModal(true);
  };

  const deletePlayer = () => {
    const playerName = players[playerToDelete].name;
    setPlayers(players.filter((_, i) => i !== playerToDelete));
    if (editingIndex === playerToDelete) {
      setEditingIndex(null);
      setPlayerName('');
      setPlayerRole('Batsman');
    }
    setShowModal(false);
    setPlayerToDelete(null);
    toast.success(`Removed ${playerName} from the team!`);
  };

  const closeModal = () => {
    setShowModal(false);
    setPlayerToDelete(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="card w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Team Management</h1>
        <div className="space-y-6">
          {/* Add/Edit Player Form */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label htmlFor="playerName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Player Name
              </label>
              <input
                type="text"
                id="playerName"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="w-full p-3 border rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Enter player name"
              />
            </div>
            <div>
              <label htmlFor="playerRole" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Role
              </label>
              <select
                id="playerRole"
                value={playerRole}
                onChange={(e) => setPlayerRole(e.target.value)}
                className="w-full p-3 border rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {error && <p className="text-red-600 dark:text-red-500 text-center">{error}</p>}
          <AnimatedButton
            text={editingIndex !== null ? 'Update Player' : 'Add Player'}
            onClick={addOrUpdatePlayer}
            className="w-full py-3 text-lg font-semibold"
          />

          {/* Player List */}
          {players.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400">No players added yet.</p>
          ) : (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Team Roster</h2>
              <ul className="space-y-3">
                {players.map((player, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                  >
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">{player.name}</span>
                      <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">({player.role})</span>
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => editPlayer(index)}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
                      >
                        <span className="material-icons">edit</span>
                      </button>
                      <button
                        onClick={() => confirmDeletePlayer(index)}
                        className="text-red-600 dark:text-red-500 hover:text-red-700 dark:hover:text-red-600 transition-colors"
                      >
                        <span className="material-icons">delete</span>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Confirm Deletion</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Are you sure you want to remove <span className="font-medium">{players[playerToDelete]?.name}</span> from the team?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-400 dark:bg-gray-600 text-gray-900 dark:text-white rounded-lg hover:bg-gray-500 dark:hover:bg-gray-500 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={deletePlayer}
                className="px-4 py-2 bg-red-600 dark:bg-red-500 text-white rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamManagement;