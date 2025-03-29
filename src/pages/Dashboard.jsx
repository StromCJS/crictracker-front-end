import React, { useState, useEffect } from 'react';
import MatchCard from '../components/MatchCard';

function Dashboard() {
  const [recentMatches, setRecentMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentMatches = async () => {
      try {
        const API_KEY = '8628194c-d3f5-4442-8581-a95714e42a6f';
        const response = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`);
        
        const data = await response.json();
        
        if (data.status !== "success") {
          throw new Error(data.message || "Failed to fetch matches");
        }

        // Filter for completed matches only and sort by date
        const completedMatches = data.data
          ?.filter(match => 
            match.status.toLowerCase().includes('won') || 
            match.status.toLowerCase().includes('drawn') ||
            match.status.toLowerCase().includes('tied') ||
            match.status.toLowerCase().includes('no result')
          )
          .sort((a, b) => new Date(b.dateTimeGMT) - new Date(a.dateTimeGMT))
          .slice(0, 10); // Get only the 10 most recent matches

        setRecentMatches(completedMatches || []);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching matches:', error);
        setError('Failed to fetch match data');
        setIsLoading(false);
      }
    };

    fetchRecentMatches();
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-200">Recent Cricket Matches</h1>
        <p className="text-gray-400 mt-2">Latest results from around the world</p>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="text-center py-10">
          <p className="text-red-500">{error}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentMatches.map((match, index) => (
            <MatchCard key={match.id || index} matchData={match} />
          ))}
          {recentMatches.length === 0 && (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">No recent matches found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Dashboard;