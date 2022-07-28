import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import API from "../api";

export default function LandingPage({ setApplicationData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const admin = { email, password };
    try {
      const { data } = await API.post("login/", admin);
      console.log(data);
      localStorage.setItem("token", data.token);
      setApplicationData({ player: data.players, fields: data.fields });
      // setTimeout(() => {
      //   setIsLoading(false);
      //   setUser({ token: res.data.token, info: res.data.user });
      // }, 2000);
    } catch (error) {
      // setTimeout(() => {
      //   setError(signUp ? "User already exists !!" : "Invalid Credentials !!");
      //   setIsLoading(false);
      // }, 2000);
      console.log(error, error.message);
    }
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
