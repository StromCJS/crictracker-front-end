import React from 'react';
import { Link } from 'react-router-dom';

function MatchCard({ matchData = {} }) {
  const defaultData = {
    team1: { name: "India", logo: "https://flagcdn.com/16x12/in.png" },
    team2: { name: "Pakistan", logo: "https://flagcdn.com/16x12/pk.png" },
    venue: "Wankhede Stadium",
    status: "Live",
    score: "245/3",
    overs: "45.2",
    batsman1: { name: "Virat Kohli", runs: 85, balls: 92, image: "https://randomuser.me/api/portraits/men/1.jpg" },
    batsman2: { name: "Rohit Sharma", runs: 112, balls: 108, image: "https://randomuser.me/api/portraits/men/2.jpg" },
    bowler: { name: "Babar Azam", overs: "8.2", wickets: 1, runs: 42, image: "https://randomuser.me/api/portraits/men/3.jpg" },
  };

  const data = { ...defaultData, ...matchData };

  return (
    <div 
      className="relative w-[340px] h-[480px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] bg-cover bg-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1574623452334-79e7fb0e76a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")`,
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(10, 25, 47, 0.85)',
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 p-6 h-full flex flex-col text-white">
        {/* Team Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-3">
            <img src={data.team1.logo} alt={data.team1.name} className="w-8 h-8 rounded-full shadow-md" />
            <span className="text-2xl font-extrabold tracking-wide">{data.team1.name}</span>
          </div>
          <div className="text-2xl font-bold text-gray-400">VS</div>
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-extrabold tracking-wide">{data.team2.name}</span>
            <img src={data.team2.logo} alt={data.team2.name} className="w-8 h-8 rounded-full shadow-md" />
          </div>
        </div>

        {/* Score & Status */}
        <div className="relative bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-4 mb-5 flex justify-between items-center">
          <div>
            <p className="text-4xl font-extrabold text-green-300 drop-shadow-md">{data.score}</p>
            <p className="text-sm text-gray-300">Overs: {data.overs}</p>
          </div>
          <div className="text-right">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
              data.status === 'Live' ? 'bg-red-500/30 text-red-200' : 'bg-green-500/30 text-green-200'
            }`}>
              <span className={`w-2 h-2 rounded-full mr-2 ${data.status === 'Live' ? 'bg-red-500 animate-ping' : 'bg-green-500'}`}></span>
              {data.status}
            </span>
            <p className="text-xs text-gray-400 mt-1">{data.venue}</p>
          </div>
          {/* Curved Accent */}
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-500 rounded-full opacity-50"></div>
        </div>

        {/* Players Section */}
        <div className="flex-1 space-y-4">
          {/* Batsmen */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 rounded-xl p-3 flex items-center space-x-3 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <img src={data.batsman1.image} alt={data.batsman1.name} className="w-10 h-10 rounded-full border-2 border-green-400" />
              <div>
                <p className="text-sm font-semibold truncate">{data.batsman1.name} *</p>
                <p className="text-xs text-gray-200">{data.batsman1.runs} ({data.batsman1.balls})</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 flex items-center space-x-3 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <img src={data.batsman2.image} alt={data.batsman2.name} className="w-10 h-10 rounded-full border-2 border-green-400" />
              <div>
                <p className="text-sm font-semibold truncate">{data.batsman2.name}</p>
                <p className="text-xs text-gray-200">{data.batsman2.runs} ({data.batsman2.balls})</p>
              </div>
            </div>
          </div>

          {/* Bowler */}
          <div className="bg-white/10 rounded-xl p-3 flex items-center space-x-3 backdrop-blur-sm hover:bg-white/20 transition-colors">
            <img src={data.bowler.image} alt={data.bowler.name} className="w-10 h-10 rounded-full border-2 border-blue-400" />
            <div>
              <p className="text-sm font-semibold">Bowler: {data.bowler.name}</p>
              <p className="text-xs text-gray-200">{data.bowler.overs} ov • {data.bowler.runs}-{data.bowler.wickets}</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={`/match/`}
          className="mt-5 block bg-gradient-to-r from-green-500 to-blue-600 text-white text-center py-3 rounded-xl font-semibold text-sm uppercase tracking-wide hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Watch Live
        </Link>
      </div>

      {/* Dynamic Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/10 via-blue-500/10 to-transparent rounded-3xl"></div>
      </div>
    </div>
  );
}

export default MatchCard;