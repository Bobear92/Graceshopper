import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Login, Register } from ".";
import { getUser } from "../auth";

const Header = ({ loggedIn, setLoggedIn }) => {
  const [logToggle, setLogToggle] = useState(false);
  const [registerToggle, setRegisterToggle] = useState(false);

  const user = getUser();

  return (
    <div>
      {loggedIn ? (
        <>
          <NavLink className="Head-home" to="/">
            Home
          </NavLink>
          <NavLink className="Head-products" to="/products">
            Products
          </NavLink>
          <NavLink className="loggedUser" to="/my-info">{`${user}`}</NavLink>
          <NavLink
            className="Head-Logged-in"
            to="/"
            onClick={() => {
              localStorage.clear();
              setLoggedIn(false);
            }}
          >
            Log Out
          </NavLink>
        </>
      ) : (
        <>
          <NavLink className="Head-home" to="/">
            Home
          </NavLink>
          <NavLink className="Head-products" to="/products">
            Products
          </NavLink>
          <div className="login-container">
            <button className="login-button" onClick={() => setLogToggle(true)}>
              Login
            </button>
            {logToggle ? <Login setLoggedIn={setLoggedIn} /> : null}
          </div>
          <div
            className="register-container"
            onClick={() => setRegisterToggle(true)}
          >
            <button className="register-button">Register</button>
            {registerToggle ? <Register setLoggedIn={setLoggedIn} /> : null}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
