import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PlayerStats = () => {
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    const fetchPlayerStats = async () => {
      try {
        const response = await axios.get("http://localhost:5000/player-stats"); // Replace with actual API
        setPlayerData(response.data.players);
      } catch (error) {
        console.error("Error fetching player stats:", error);
      }
    };

    fetchPlayerStats();
    const interval = setInterval(fetchPlayerStats, 10000); // Update every 10 sec
    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: playerData.map(player => player.name),
    datasets: [
      {
        label: "Runs",
        data: playerData.map(player => player.runs),
        backgroundColor: "rgba(59, 130, 246, 0.7)", // blue-500
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
      {
        label: "Wickets",
        data: playerData.map(player => player.wickets),
        backgroundColor: "rgba(239, 68, 68, 0.7)", // red-500
        borderColor: "rgba(239, 68, 68, 1)",
        borderWidth: 1,
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
        text: "Player Statistics",
        color: document.documentElement.classList.contains('dark') ? '#fff' : '#000',
        font: {
          size: 20,
        },
      },
    },
  };

  return (
    <div className="container py-8">
      <div className="card">
        <div className="relative h-80 sm:h-96">
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;