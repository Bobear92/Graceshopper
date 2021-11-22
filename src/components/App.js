import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header, Home, User, Inventory, SingleProduct } from "./";
import { getToken } from "../auth";
import { getInventory } from "../api";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [allInventory, getAllInventory] = useState([]);

  function isUserLoggedIn() {
    const token = getToken();

    if (token) {
      setLoggedIn(true);
    }
  }

  const handleInventory = async () => {
    const data = await getInventory();
    getAllInventory(data);
  };

  useEffect(() => {
    isUserLoggedIn();
    handleInventory();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Switch>
          <Route path="/products">
            <Inventory allInventory={allInventory} />
          </Route>
          <Route path="/single-product/:id">
            <SingleProduct allInventory={allInventory} />
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
