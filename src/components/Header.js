import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getUser } from "../auth";
import { getUserByUsername } from "../api";
import { Title } from ".";
import "./Header.css";
const Header = ({ loggedIn, setLoggedIn }) => {
  const [admin, setAdmin] = useState(false);
  const username = getUser();

  const handleUser = async () => {
    const user = await getUserByUsername(username);

    if (user.admin) {
      setAdmin(true);
    }
  };
  useEffect(() => {
    handleUser();
  }, []);

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
          <NavLink
            className="nav-button"
            to="/my-info"
          >{`${username}`}</NavLink>
          {admin ? (
            <>
              <NavLink className="nav-button" to="/admin">
                Admin
              </NavLink>
            </>
          ) : null}
          <NavLink
            className="nav-button"
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
