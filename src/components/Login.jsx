import React, { useState } from "react";
import { loginUser } from "../api";
import { storeToken, storeUser } from "../auth";

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="Login-main">
      <form
        id="login"
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            const { token, user } = await loginUser(username, password);
            console.log(token, user, "token and user!!");
            storeToken(token);
            storeUser(user.username);

            setUsername("");
            setPassword("");
            setError("");
          } catch (error) {
            console.log(error.response);
            setError(error);
          }
        }}
      >
        <fieldset className="auth-component-input">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(event) => {
              console.log(event.target.value);
              setUsername(event.target.value);
            }}
          ></input>
        </fieldset>

        <fieldset className="auth-component-input">
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
        </fieldset>

        <button className="auth-button" onSubmit={console.log("pressed")}>
          Login
        </button>
        {/* {error && <p>{error.response}</p>} */}
      </form>
    </div>
  );
};

export default Login;
