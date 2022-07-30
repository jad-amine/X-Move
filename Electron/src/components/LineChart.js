import React from "react";
import { Line } from "react-chartjs-2";
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
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

  return (
    <div className="lineChart">
      <h1 className="dashboard-header">Players Flow</h1>
      <Line
        datasetIdKey="id"
        data={{
          labels,
          datasets: [
            {
              id: 1,
              label: "Joining",
              data: [5, 6, 7, 3, 5.5, 8, 9, 10, 9, 11, 8, 10],
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
            {
              id: 2,
              label: "Leaving",
              data: [2, 4, 1, 0, 3, 1, 2, 0, 1, 2, 1, 0],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }}
      />
    </div>
  );
}
