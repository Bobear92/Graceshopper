import React, { useState, useEffect } from "react";

import { getUser } from "../api";
import { Login } from "./";
import Header from "./Header";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   getSomething()
  //     .then(response => {
  //       setMessage(response.message);
  //     })
  //     .catch(error => {
  //       setMessage(error.message);
  //     });
  // });

  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
};

export default App;
