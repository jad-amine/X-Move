import React, { useEffect, useState } from "react";
import LandingPage from "./windows/LandingPage";
import API from "./api";

function App() {
  const [applicationData, setApplicationData] = useState();

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

  if (!applicationData) return <LandingPage />;
  return <div className="App"></div>;
}

export default App;
