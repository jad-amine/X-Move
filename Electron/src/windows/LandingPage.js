import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function LandingPage({ setApplicationData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="landing-page">
      <div className="mobile-app"></div>
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
        </form>
      </div>
    </div>
  );
}
