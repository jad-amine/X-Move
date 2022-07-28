// Utilities
import API from "./api";
import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// Windows
import LandingPage from "./windows/LandingPage";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Equipment from "./windows/Equipment";
import Fields from "./windows/Fields";
import Players from "./windows/Players";

function App() {
  const { applicationData, setApplicationData } = useContext(second);
  const [showDrawer, setShowDrawer] = useState(false);

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
      <Navbar />
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<Players />}></Route>
        <Route path="/equipment" element={<Equipment />}></Route>
        <Route path="/fields" element={<Fields />}></Route>
      </Routes>
      <Drawer />
      Hello
    </div>
  );
}

export default App;
