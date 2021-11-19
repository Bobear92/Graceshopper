import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header, Home, User, Inventory } from "./";
import { getToken } from "../auth";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  function isUserLoggedIn() {
    const token = getToken();

    if (token) {
      setLoggedIn(true);
    }
  }

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Switch>
          <Route path="/products">
            <Inventory />
          </Route>
          <Route path="/my-info">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
