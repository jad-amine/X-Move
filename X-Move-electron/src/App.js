// Utilities
import API from "./api";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { ApplicationContext } from "./contexts/ApplicationContext";

// Windows and Components
import LandingPage from "./windows/LandingPage";
import Dashboard from "./windows/Dashboard";
import Players from "./windows/Players";
import Fields from "./windows/Fields";
import Equipment from "./windows/Equipment";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";

function App() {
  const { applicationData, setApplicationData } =
    useContext(ApplicationContext);

  useEffect(() => {
    // Launch the application automatically if the admin hadn't logged out previously
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
        }
      };
      authAdmin();
    }
  }, []);

  // Log in window
  if (!applicationData)
    return <LandingPage setApplicationData={setApplicationData} />;

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/players" element={<Players />}></Route>
        <Route path="/equipment" element={<Equipment />}></Route>
        <Route path="/fields" element={<Fields />}></Route>
      </Routes>
      <Drawer />
    </div>
  );
}

export default App;
