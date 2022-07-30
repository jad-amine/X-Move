import React, { useContext } from "react";
import { ApplicationContext } from "../contexts/ApplicationContext";

export default function Dashboard() {
  const { applicationData } = useContext(ApplicationContext);
  console.log(applicationData);
  return (
    <div>
      <div className="app-stats">
        <div>
          <img src={require("../assets/Figpie-2.png")} alt="" />
          <span>{applicationData.players.length} Users</span>
        </div>
        <div>
          <img src={require("../assets/Figpie-1.png")} alt="" />
          <span>
            {
              applicationData.fields.filter(
                (field) => field.property === "Field"
              ).length
            }{" "}
            Fields
          </span>
        </div>
        <div>
          <img src={require("../assets/Figpie.png")} alt="" />
          <span>
            {
              applicationData.fields.filter(
                (field) => field.property !== "Field"
              ).length
            }{" "}
            Equipment
          </span>
        </div>
      </div>
    </div>
  );
}
