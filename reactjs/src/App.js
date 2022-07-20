import { useContext } from "react";
import "./App.css";

// Pages & Components
import Navbar from "./components/Navbar";
import { UserContext } from "./contexts/UserContext";
import LandingPage from "./pages/LandingPage";

function App() {
  const { user, setUser } = useContext(UserContext);
  if (!user) {
    return (
      <div className="App">
        <Navbar />
        <LandingPage setUser={setUser} />
      </div>
    );
  } else {
    setTimeout(() => {
      console.log(user);
    }, 2000);
    return <div>Home Page</div>;
  }
}

export default App;
