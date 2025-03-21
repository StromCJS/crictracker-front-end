import React, { useState } from "react";
import AnimatedButton from "../components/AnimatedButton";

function MatchScoring() {
  const [score, setScore] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="card w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Live Scoring</h1>
        <p className="text-xl text-center text-gray-700 dark:text-gray-300 mb-8">Current Score: {score}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <AnimatedButton
            text="+1 Run"
            onClick={() => setScore(score + 1)}
            className="py-3 text-lg font-semibold"
          />
          <AnimatedButton
            text="+4 Runs"
            onClick={() => setScore(score + 4)}
            className="py-3 text-lg font-semibold"
          />
          <AnimatedButton
            text="+6 Runs"
            onClick={() => setScore(score + 6)}
            className="py-3 text-lg font-semibold"
          />
        </div>
      </div>
    </div>
  );
}

export default MatchScoring;