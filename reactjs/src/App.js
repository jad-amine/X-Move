import { useContext } from "react";
import "./App.css";

// Pages & Components
import Navbar from "./components/Navbar";
import { UserContext } from "./contexts/UserContext";
import LandingPage from "./pages/LandingPage";

function App() {
  const { user } = useContext(UserContext);
  if (!user) {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
      </div>
    );
  } else {
    return <div>Home Page</div>;
  }
}

export default App;
