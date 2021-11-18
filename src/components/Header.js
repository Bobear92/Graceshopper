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
          <p>{user} is logged in</p>
        </>
      ) : (
        <>
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
            <button className="-register-button">Register</button>
            {registerToggle ? <Register setLoggedIn={setLoggedIn} /> : null}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
