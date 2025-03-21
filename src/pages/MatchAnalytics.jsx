import React, { useEffect, useRef } from "react";
import { Chart, CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend } from "chart.js";

// Register necessary components
Chart.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend);

const MatchAnalytics = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
      chartInstance.current = null;
    }

    const isDarkMode = document.documentElement.classList.contains('dark');

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Match 1", "Match 2", "Match 3"],
        datasets: [
          {
            label: "Runs Scored",
            data: [200, 150, 220],
            backgroundColor: isDarkMode
              ? ["rgba(59, 130, 246, 0.5)", "rgba(34, 197, 94, 0.5)", "rgba(249, 115, 22, 0.5)"]
              : ["rgba(59, 130, 246, 0.7)", "rgba(34, 197, 94, 0.7)", "rgba(249, 115, 22, 0.7)"],
            borderColor: isDarkMode
              ? ["rgba(59, 130, 246, 0.8)", "rgba(34, 197, 94, 0.8)", "rgba(249, 115, 22, 0.8)"]
              : ["rgba(59, 130, 246, 1)", "rgba(34, 197, 94, 1)", "rgba(249, 115, 22, 1)"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            type: "linear",
            beginAtZero: true,
            grid: {
              color: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              color: isDarkMode ? "white" : "black",
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: isDarkMode ? "white" : "black",
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: isDarkMode ? "white" : "black",
            },
          },
          title: {
            display: true,
            text: "Match Analytics",
            color: isDarkMode ? "white" : "black",
            font: {
              size: 24,
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="card w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Match Analytics</h2>
        <div className="relative h-80 sm:h-96">
          <canvas ref={chartRef} />
        </div>
      </div>
    </div>
  );
};

export default MatchAnalytics;