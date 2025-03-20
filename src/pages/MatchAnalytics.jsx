import React, { useEffect, useRef } from "react";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register necessary components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MatchAnalytics = () => {
  const chartRef = useRef(null);
  let chartInstance = useRef(null);

  useEffect(() => {
    // Destroy previous chart instance before creating a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart instance
    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Match 1", "Match 2", "Match 3"],
        datasets: [
          {
            label: "Runs Scored",
            data: [200, 150, 220],
            backgroundColor: ["rgba(75, 192, 192, 0.5)"],
            borderColor: ["rgba(75, 192, 192, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy chart on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center">Match Analytics</h2>
      <div className="flex justify-center">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default MatchAnalytics;
