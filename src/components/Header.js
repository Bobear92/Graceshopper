import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Login, Register } from ".";
import { getUser } from "../auth";
import { Title } from ".";
import "./Header.css";
const Header = ({ loggedIn, setLoggedIn }) => {
  const [logToggle, setLogToggle] = useState(false);
  const [registerToggle, setRegisterToggle] = useState(false);

  const user = getUser();

  return (
    <div className="header-container">
      {loggedIn ? (
        <>
          <NavLink className="nav-button" to="/">
            Home
          </NavLink>
          <NavLink className="nav-button" to="/products">
            Products
          </NavLink>
          <Title />
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
          <NavLink className="nav-button" to="/">
            Home
          </NavLink>
          <NavLink className="nav-button" to="/products">
            Products
          </NavLink>
          <Title />
          <div className="login-container">
            <NavLink className="nav-button" to="/login">
              Login
            </NavLink>
          </div>

          <NavLink className="nav-button" to="/register">
            Register
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Header;
