import React, { useState } from "react";
import AnimatedButton from "../components/AnimatedButton";

function MatchScoring() {
  const [score, setScore] = useState(0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Live Scoring</h1>
      <p className="text-xl">Current Score: {score}</p>
      <div className="mt-4">
        <AnimatedButton text="+1 Run" onClick={() => setScore(score + 1)} />
        <AnimatedButton text="+4 Runs" onClick={() => setScore(score + 4)} />
        <AnimatedButton text="+6 Runs" onClick={() => setScore(score + 6)} />
      </div>
    </div>
  );
}

export default MatchScoring;
