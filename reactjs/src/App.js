import { useContext, useState } from "react";
import "./App.css";
import Drawer from "./components/Drawer";
import Property from "./pages/Property";
import { Route, Routes } from "react-router-dom";

// Pages & Components
import Navbar from "./components/Navbar";
import { UserContext } from "./contexts/UserContext";
import LandingPage from "./pages/LandingPage";
import OwnerCalendar from "./pages/OwnerCalendar";

function App() {
  const { user, setUser } = useContext(UserContext);
  if (!user) {
    return <LandingPage setUser={setUser} />;
  } else {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/calendar" element={<OwnerCalendar />}></Route>
          <Route
            path="/propertyInfo"
            element={<Property user={user} setUser={setUser} />}
          ></Route>
        </Routes>
        <Drawer />
      </div>
    );
  }
}

export default App;
