// Utilities
import "./App.css";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";

// Pages & Components
import LandingPage from "./pages/LandingPage";
import OwnerCalendar from "./pages/OwnerCalendar";
import Property from "./pages/Property";
import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";

function App() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <LandingPage />;
  } else {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<OwnerCalendar />}></Route>
          <Route path="/propertyInfo" element={<Property />}></Route>
        </Routes>
        <Drawer />
      </div>
    );
  }
}

export default App;
