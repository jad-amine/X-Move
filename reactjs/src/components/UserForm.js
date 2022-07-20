import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import API from "../api";

function UserForm() {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [error, setError] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const user = { name, email, password };
    try {
      const res = await API.post(signUp ? "register/" : "login/", user);
      localStorage.setItem("token", res.data.token);
      setUser({ token: res.data.token, info: res.data.user });
    } catch (error) {
      setError(signUp ? "User already exists !!" : "Invalid Credentials !!");
      console.log(error, error.message);
    }
  };

  return (
    <div>
      <form className="form">
        {signUp && (
          <>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </>
        )}
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={
            signUp
              ? name === "" || email === "" || password === ""
              : email === "" || password === ""
          }
          onClick={handleClick}
        >
          {signUp ? "Sign Up" : "Sign In"}
        </button>
        <p>
          {signUp ? "Already have an accout?" : "Don't have an account ?"}
          <span style={{ color: "gray" }} onClick={() => setSignUp(!signUp)}>
            {signUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
        <p className="error">{error}</p>
      </form>
    </div>
  );
}

export default UserForm;
