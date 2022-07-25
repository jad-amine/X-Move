import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import API from "../api";
import ReactLoading from "react-loading";

function UserForm() {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const user = { name, email, password };
    try {
      const res = await API.post(signUp ? "register/" : "login/", user);
      localStorage.setItem("token", res.data.token);
      setTimeout(() => {
        setIsLoading(false);
        setUser({ token: res.data.token, info: res.data.user });
      }, 2000);
    } catch (error) {
      setTimeout(() => {
        setError(signUp ? "User already exists !!" : "Invalid Credentials !!");
        setIsLoading(false);
      }, 2000);
      console.log(error, error.message);
    }
  };

  return (
    <div>
      <form className="form">
        {signUp && (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </>
        )}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
        />
        <>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </>
        <button
          style={{ borderRadius: 20 }}
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
          {signUp ? "Already have an account?  " : "Don't have an account ?  "}
          <span
            style={{ color: "tomato" }}
            onClick={() => {
              setError("");
              setSignUp(!signUp);
            }}
          >
            {signUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
        <div className="loading">
          {isLoading && (
            <ReactLoading type="bars" color="white" height={40} width={60} />
          )}
        </div>
        <p className="error">{error}</p>
      </form>
    </div>
  );
}

export default UserForm;
