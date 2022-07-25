import { useContext } from "react";
import "./App.css";

// Pages & Components
import Navbar from "./components/Navbar";
import { UserContext } from "./contexts/UserContext";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

function App() {
  const { user, setUser } = useContext(UserContext);
  if (!user) {
    return <LandingPage setUser={setUser} />;
  } else {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
