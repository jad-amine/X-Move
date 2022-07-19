import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

function Form() {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(false);
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
            />
          </>
        )}
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          disabled={false}
          onClick={(e) => {
            e.preventDefault();
            console.log(user);
          }}
        >
          {signUp ? "Sign Up" : "Sign In"}
        </button>
        <p>
          {signUp ? "Already have an accout?" : "Don't have an account ?"}
          <span style={{ color: "gray" }} onClick={() => setSignUp(!signUp)}>
            {signUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Form;
