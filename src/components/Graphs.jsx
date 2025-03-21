import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Graphs = () => {
  const [matchData, setMatchData] = useState([]);

  useEffect(() => {
    const fetchLiveScores = async () => {
      try {
        const response = await axios.get("http://localhost:5000/live-score");
        const scores = response.data.matches.map(match => ({
          time: new Date().toLocaleTimeString(),
          runs: match.score ? match.score.runs : 0,
        }));
        setMatchData(prev => [...prev, ...scores].slice(-10));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const interval = setInterval(fetchLiveScores, 5000);
    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: matchData.map(d => d.time),
    datasets: [
      {
        label: "Runs",
        data: matchData.map(d => d.runs),
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: document.documentElement.classList.contains('dark') ? '#fff' : '#000',
        },
        grid: {
          color: document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
      },
      y: {
        ticks: {
          color: document.documentElement.classList.contains('dark') ? '#fff' : '#000',
        },
        grid: {
          color: document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: document.documentElement.classList.contains('dark') ? '#fff' : '#000',
        },
      },
      title: {
        display: true,
        text: "Live Match Score Graph",
        color: document.documentElement.classList.contains('dark') ? '#fff' : '#000',
        font: {
          size: 20,
        },
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="card w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Live Match Score Graph</h2>
        <div className="relative h-80 sm:h-96">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Graphs;