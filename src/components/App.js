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
  const [allInventory, setAllInventory] = useState([]);
  const [cart, setCart] = useState([]);

  function isUserLoggedIn() {
    const token = getToken();

    if (token) {
      setLoggedIn(true);
    }
  }

  const handleInventory = async () => {
    const data = await getInventory();
    console.log(data, "<<<<<<<<<");
    setAllInventory(data);
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
            <SingleProduct
              allInventory={allInventory}
              cart={cart}
              setCart={setCart}
            />
          </Route>
          <Route path="/my-info">
            <User cart={cart} setCart={setCart} />
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
