// Utilities
import API from "../api";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function LandingPage({ setApplicationData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const admin = { email, password };
    try {
      const { data } = await API.post("login/", admin);
      localStorage.setItem("token", data.token);
      setApplicationData({ players: data.players, fields: data.fields });
    } catch (error) {
      setError("Wrong email or password !");
    }
  };

  return (
    <div className="landing-page">
      <div className="mobile-app">
        <img src={require("../assets/Group22.png")} height={550} alt="" />
      </div>
      <div className="login-form">
        <form>
          <p>Admin Log in</p>
          <div className="login-icon">
            <FaUserAlt color="gray" size={26} />
            <input
              type="text"
              placeholder="Admin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-icon">
            <RiLockPasswordFill color="gray" size={26} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            id="login-bttn"
            disabled={!email.length || !password.length}
            onClick={handleClick}
          >
            Log in
          </button>
          <span>{error}</span>
        </form>
      </div>
    </div>
  );
}
