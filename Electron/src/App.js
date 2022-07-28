import React, { useEffect, useState } from "react";
import LandingPage from "./windows/LandingPage";
import API from "./api";
import "./App.css";

function App() {
  const [applicationData, setApplicationData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    else {
      const authAdmin = async () => {
        try {
          const { data } = await API.post(
            "authAdmin/",
            { mission: "Auth Admin" },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (data.message === "Validated") {
            setApplicationData({ players: data.players, fields: data.fields });
          }
        } catch (error) {
          setApplicationData(null);
          console.log(error.message, error);
        }
      };
      authAdmin();
    }
  }, []);

  if (!applicationData)
    return <LandingPage setApplicationData={setApplicationData} />;
  return <div className="App">hi</div>;
}

export default App;
