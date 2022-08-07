import React, { useContext, useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ApplicationContext } from "../contexts/ApplicationContext";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart() {
  const { applicationData } = useContext(ApplicationContext);
  const [sportsStatistics, setSportsStatistics] = useState();

  useEffect(() => {
    let surf = 0;
    let football = 0;
    let snowboard = 0;
    let cycling = 0;
    let basketball = 0;
    let gym = 0;
    applicationData.players.forEach((player) => {
      console.log(player.sports);
      if (player.sports.includes("Football")) football += 1;
      if (player.sports.includes("Surf")) surf += 1;
      if (player.sports.includes("Gym")) gym += 1;
      if (player.sports.includes("Road bike")) cycling += 1;
      if (player.sports.includes("Basketball")) basketball += 1;
      if (player.sports.includes("Snowboard")) snowboard += 1;
    });
    setSportsStatistics([snowboard, surf, football, basketball, cycling, gym]);
  }, []);

  console.log(sportsStatistics);

  const data = {
    labels: ["Snowboard", "Surf", "Football", "Basketball", "Bike", "Gym"],
    datasets: [
      {
        label: "# of Votes",
        data: sportsStatistics,
        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="doughnutChart">
      <h1 className="dashboard-header">Favorite Sports</h1>
      <Doughnut data={data} />
    </div>
  );
}
