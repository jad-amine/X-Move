// Utilities
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Fields",
        data: [50, 60, 70, 30, 50, 80, 90, 10, 90, 110, 80, 100],
        backgroundColor: "rgba(252, 111, 3, 0.7)",
      },
      {
        label: "Equipments",
        data: [40, 50, 20, 0, 30, 20, 50, 0, 20, 50, 20, 0],
        backgroundColor: "rgba(53, 162, 235, 0.7)",
      },
    ],
  };

  return (
    <div className="lineChart">
      <h1 className="dashboard-header">Property Reservations</h1>
      <Bar data={data} />;
    </div>
  );
}
