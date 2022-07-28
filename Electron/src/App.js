// Utilities
import API from "./api";
import React, { useEffect, useState } from "react";
import "./App.css";

// Windows
import LandingPage from "./windows/LandingPage";
import Drawer from "./components/Drawer";

function App() {
  const [applicationData, setApplicationData] = useState(null);
  const [showDrawer, setShowDrawer] = useState(true);

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
  return (
    <div className="App">
      <Drawer
        setShowDrawer={setShowDrawer}
        showDrawer={showDrawer}
        setApplicationData={setApplicationData}
      />
      Hello
    </div>
  );
}

export default App;
